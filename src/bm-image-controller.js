// @flow
'use strict'

export default function bmImageController (
  $scope /* :Object */,
  bmUploaderService /* :Object */
) {
  'ngInject'
  const ctrl = this

  ctrl.$onChanges = (changesObj) => {
    if (changesObj.imageId && changesObj.imageId.currentValue) {
      bmUploaderService.retrieveContentUrl(changesObj.imageId.currentValue)
        .then((url) => {
          ctrl.src = url
          $scope.$apply()
        })
    }
  }
}
