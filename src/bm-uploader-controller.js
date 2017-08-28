'use strict'

BmUploaderController.$inject = ['$rootScope', 'BmUploader']

function BmUploaderController (
  $rootScope,
  BmUploader
) {
  this.BLOB_API_URL = $rootScope.BlobApiUrl
}

export default BmUploaderController
