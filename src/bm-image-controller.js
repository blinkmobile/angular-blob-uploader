// @flow
'use strict'

export default function bmImageController (
  $scope /* :Object */,
  bmUploaderService /* :Object */
) {
  'ngInject'
  const ctrl = this
  ctrl.$onInit = function () {
    if (!ctrl.imageId) {
      return
    }

    bmUploaderService.retrieveContentUrl(ctrl.imageId)
      .then((url) => {
        ctrl.src = url
        $scope.$apply()
      })
  }
}
