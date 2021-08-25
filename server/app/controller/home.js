'use strict';

/**
 * String.prototype.replaceAll() polyfill
 * https://gomakethings.com/how-to-replace-a-section-of-a-string-with-another-one-with-vanilla-js/
 * @author Chris Ferdinandi
 * @license MIT
 */
if (!String.prototype.replaceAll) {
  String.prototype.replaceAll = function(str, newStr){

    // If a regex pattern
    if (Object.prototype.toString.call(str).toLowerCase() === '[object regexp]') {
      return this.replace(str, newStr);
    }

    // If a string
    return this.replace(new RegExp(str, 'g'), newStr);

  };
}

const Controller = require('egg').Controller;

const { codegen } = require('../../../dist/index.js')

const fs = require('fs-extra')
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const path = require('path')
const lodash = require('lodash')
const pinyin = require('pinyin');

function capitalizeFirstLetter(string = '') {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

async function fixFile(p, folder = '') {
  let readDir = fs.readdirSync(p);
  // console.log(readDir);
  
  let filePaths = readDir.filter( v => v.endsWith('js'))
    .map(v => {
      return path.join(p, v)
    })
  
  filePaths.forEach((filepath) => {
    fs.readFile(filepath, 'utf8', (err, data) => {

      if (!data.match(/import .* from/g)) {
        return
      }
      let newData = data.replace(/(import .* from\s+['"])(.*)(?=['"])/g, '$1$2.js')
      if (err) throw err;

      console.log(`writing to ${filepath}`)
      fs.writeFile(filepath, newData, function (err) {
        if (err) {
          throw err;
        }
        console.log('complete');
      });
    })

  })
  
  return ''
}

function hasChina(s){
  var patrn=/[\u4E00-\u9FA5]|[\uFE30-\uFFA0]/gi;
  if(!patrn.exec(s)){
    return false;
  }
  else{
    return true;
  }
}

class HomeController extends Controller {
  async clean() {
    const { ctx } = this;
    let query = ctx.query
    if (!query || !query.folder) {
      throw new Error('not folder')
    }
    let body = ''
    let folder = query.folder ? query.folder : 'folder'
    let publicPath = `public/${folder}`
    let dest = `./app/${publicPath}`
    fs.removeSync(`${dest}`)
    ctx.body = body
  }
  async index() {
    const { ctx } = this;
    let query = ctx.query
    // console.log(ctx.req)
    if (!query || !query.url) {
      throw new Error('not url')
    }
    if (!query || !query.folder) {
      throw new Error('not folder')
    }
    let body = ''
    let folder = query.folder ? query.folder : 'folder'
    let publicPath = `public/${folder}`
    let dest = `./app/${publicPath}`
    fs.removeSync(`${dest}`)
    fs.copySync('./app/public/template/', dest)
    fs.mkdirsSync(`${dest}/swagger`)
    let swaggerSourceStr = ''
    await codegen({
      methodNameMode: 'path',
      // source: require('../../../example/swagger.json'),
      // remoteUrl: 'http://192.168.1.60:7888/api-system/v2/api-docs',
      remoteUrl: query.url,
      handleRemoteResponse(swaggerSource) {
        // console.log(swaggerSource)
        swaggerSourceStr = JSON.stringify(swaggerSource)
        let tags = lodash.get(swaggerSource, 'tags', [])
        let tagNames = tags.map( v => v.name) 
        let notValid = tagNames.filter(v => hasChina(v))
        if (notValid.length > 0) {
          // console.log(notValid)
          notValid.forEach(notValidName => {
            let className = ''
            // let trueName = notValidName.replaceAll('-', '_')
            let trueName = pinyin(notValidName, {style: pinyin.STYLE_NORMAL})
            if (trueName.length > 1) {
              className = trueName.map(item => {
                return capitalizeFirstLetter(item[0])
              }).join('')
            } else {
              className = trueName[0][0]
            }
            console.log(notValidName, trueName, className)
            swaggerSourceStr = swaggerSourceStr.replaceAll(notValidName, className)
          })
        }
        return JSON.parse(swaggerSourceStr)
      },
      outputDir: `${dest}/swagger/services`,
      strictNullChecks: false,
      // useCustomerRequestInstance: true,
      modelMode: 'interface',
      extendDefinitionFile: `${dest}/swagger/customerDefinition.ts`,
      extendGenericType: ['JsonResult'],
      sharedServiceOptions: true
    })

    let origin = `${ctx.protocol}://${ctx.host}`
    body = {
      host: ctx.host,
      origin,
      files: [
        `${origin}/${publicPath}/src/swagger/services/index.js`,
        `${origin}/${publicPath}/src/swagger/services/serviceOptions.js`
      ],
    }
    let p = path.resolve(__dirname, `../public/${folder}`)
    ctx.body =  body;
    await exec(`tsc -p ${p}`)

    let findP = path.join(__dirname, `../public/${folder}/src/swagger/services`)
    try {
      fs.outputFileSync(path.join(findP, 'config.js'), `export default ${swaggerSourceStr}`)
      await fixFile(findP, folder)
    } catch (e) {
      console.error(e)
    }
//     body =`<html>
// <body>
// <a href='${publicPath}/src/swagger/services/index.js' download>index</a>
// </body>
// </html>`
    
  }
}

module.exports = HomeController;
