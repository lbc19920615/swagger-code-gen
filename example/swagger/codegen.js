// const { codegen } = require('swagger-axios-codegen')
const { codegen } = require('../../dist/index.js')

codegen({
  methodNameMode: 'path',
  // source: require('../swagger.json'),
  // remoteUrl: 'http://localhost:44307/swagger/v1/swagger.json',
  remoteUrl: 'http://192.168.1.60:7888/api-system/v2/api-docs',
  outputDir: './swagger/services',
  strictNullChecks: false,
  // useCustomerRequestInstance: true,
  modelMode: 'interface',
  extendDefinitionFile: './swagger/customerDefinition.ts',
  extendGenericType: ['JsonResult'],
  sharedServiceOptions: true
})
