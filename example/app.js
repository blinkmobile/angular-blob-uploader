// @flow
'use strict'

// $FlowFixMe
angular.module('bmUploaderDemo', [
  'bmUploader'
])
  .controller('DemoController', function DemoController (
    $scope /* :Object */,
    bmUploaderService /* :Object */
  ) {
    'ngInject'
    const vm = this
    // eslint-disable-next-line angular/controller-as
    $scope.uploadFile = (event) => {
      return bmUploaderService.uploadContent(event.target.files[0], vm.progress)
        .then((uploader) => {
          vm.uploader = uploader
          return vm.uploader.upload()
            .then(() => {
              vm.result = 'Upload succeeded with id: ' + vm.uploader.id
              vm.uploader = null
              $scope.$apply()
            })
            .catch((err) => {
              vm.result = 'Upload failed with err: ' + err
              vm.uploader = null
              $scope.$apply()
            })
        })
    }

    vm.progress = (uploaded, total) => {
      const percentage = parseInt((uploaded * 100) / total)
      vm.uploaded = percentage
      vm.total = total
      $scope.$apply()
    }
    vm.cancel = () => {
      if (vm.uploader) {
        vm.uploader.cancel()
      }
    }
  })
  .constant('BLOB_API_URL', 'https://bm-blob-uploader-dev.api.blinkm.io/')
  .directive('customOnChange', () => {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        var onChangeHandler = scope.$eval(attrs.customOnChange);
        element.bind('change', onChangeHandler);
      }
    };
  })
