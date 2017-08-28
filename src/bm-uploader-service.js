// @flow
'use strict'

const BMUploader = require('@blinkmobile/bm-uploader')

export default function (
  BLOB_API_URL /* :string */
) /* :Object */ {
  'ngInject'

  return new BMUploader(BLOB_API_URL)
}
