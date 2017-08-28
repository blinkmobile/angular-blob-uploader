// @flow
'use strict'

bmImageController.$inject = ['$rootScope', 'bmUploaderService']

function bmImageController (
  $rootScope,
  bmUploaderService
) {
  const ctrl = this
  ctrl.BLOB_API_URL = $rootScope.BlobApiUrl
  ctrl.$onInit = function () {
    if (!ctrl.imageId) {
      return
    }
    bmUploaderService.retrieveContentUrl(ctrl.imageId).then((url) => {
      ctrl.src = url
    })
  }
}
