// @flow
'use strict'

import bmImageComponent from './bm-image-component.js'
import bmUploaderService from './bm-uploader-service.js'

// $FlowFixMe
angular.module('bmUploader', []) // eslint-disable-line no-undef, angular/no-service-method
  .service('bmUploaderService', bmUploaderService)
  .component('bmImage', bmImageComponent)
