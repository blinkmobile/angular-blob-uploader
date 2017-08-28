// @flow
'use strict'

// import BmUploaderComponent from './bm-uploader-component.js'
import bmUploaderService from './bm-uploader-service.js'

const angular = require('angular')

// eslint-disable-next-line angular/no-service-method
angular.module('bmUploader', [])
  .service('bmUploader', bmUploaderService)
  // .component('bmUploader', BmUploaderComponent)
