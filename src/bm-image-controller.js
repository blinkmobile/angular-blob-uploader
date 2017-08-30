// @flow
'use strict'

export default function bmImageController (
  $scope /* :Object */,
  bmUploaderService /* :Object */
) {
  'ngInject'
  const ctrl = this

  ctrl.$onChanges = (changesObj) => {
    if (changesObj.imageId) {
      if (changesObj.imageId.currentValue) {
        getImage(changesObj.imageId.currentValue)
      }
    }
  }

  function getImage (imageId) {
    bmUploaderService.retrieveContentUrl(imageId)
      .then((url) => {
        ctrl.src = url
        $scope.$apply()
      })
  }
}
