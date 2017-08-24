// @flow
'use strict'

import BlobUploader from '@blinkmobile/blob-uploader.js'

export default function (
  BLOB_API_URL /* :string */
) /* :Object */ {
  'ngInject'

  return new BlobUploader(BLOB_API_URL)
}
