// @flow
'use strict'

import BMUploader from '@blinkmobile/bm-uploader'

export default function (
  BLOB_API_URL /* :string */
) /* :Object */ {
  'ngInject'

  return new BMUploader(BLOB_API_URL)
}
