'use strict';

const Controller = require('egg').Controller;

const { codegen } = require('../../../dist/index.js')

const fs = require('fs-extra')
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const path = require('path')

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
    await codegen({
      methodNameMode: 'path',
      // source: require('../../../example/swagger.json'),
      // remoteUrl: 'http://192.168.1.60:7888/api-system/v2/api-docs',
      remoteUrl: query.url,
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
    ctx.body =  body;
    let p = path.resolve(__dirname, `../public/${folder}`)
    await exec(`tsc -p ${p}`)
//     body =`<html>
// <body>
// <a href='${publicPath}/src/swagger/services/index.js' download>index</a>
// </body>
// </html>`
    
  }
}

module.exports = HomeController;
