// @flow
'use strict'

import bmImageController from './bm-image-controller.js'
// $FlowFixMe
import bmImageTemplate from './bm-image-template.html'

export default {
  controller: bmImageController,
  controllerAs: '$bmImageController',
  template: bmImageTemplate,
  bindings: {
    imageId: '@'
  }
}
