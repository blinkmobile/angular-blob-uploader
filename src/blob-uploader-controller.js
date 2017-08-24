'use strict'

BlobUploaderController.$inject = ['$rootScope', 'BlobUploader']

function BlobUploaderController (
  $rootScope,
  BlobUploader
) {
  this.BLOB_API_URL = $rootScope.BlobApiUrl
}

export default BlobUploaderController
