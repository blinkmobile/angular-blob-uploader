// @flow
'use strict'

export default function bmImageController (
  $rootScope /* :any */,
  bmUploaderService /* :any */
) {
  'ngInject'
  const ctrl = this
  ctrl.imageId = '2cc12da2-c0fd-4d76-b531-8afe2fe17228'
  ctrl.$onInit = function () {
    if (!ctrl.imageId) {
      return
    }
    bmUploaderService.retrieveContentUrl(ctrl.imageId)
      .then((url) => {
        ctrl.src = url
      })
  }
}
