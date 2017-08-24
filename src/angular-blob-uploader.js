// @flow
'use strict'

import BlobUploaderComponent from './blob-uploader-component.js'
import BlobUploaderService from './blob-uploader-service.js'

const angular = require('angular')

// eslint-disable-next-line angular/no-service-method
angular.module('bmBlobUploader', [])
  .service('BlobUploader', BlobUploaderService)
  .component('bmBlobUploader', BlobUploaderComponent)
