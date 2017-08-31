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
    vm.files = []
    vm.percentageUploaded = 0
    vm.imageId = ''
    $scope.$watch(() => vm.files, (newValue, oldValue) => {
      if (newValue === oldValue) {
        return
      }
      return bmUploaderService.uploadContent(vm.files[0], vm.progress)
        .then((uploader) => {
          vm.uploader = uploader
          return vm.uploader.upload()
            .then(() => {
              vm.result = 'Upload succeeded with id: ' + vm.uploader.id
              vm.imageId = vm.uploader ? vm.uploader.id : ''
              vm.uploader = null
              $scope.$apply()
            })
            .catch((err) => {
              vm.result = 'Upload failed with err: ' + err
              vm.uploader = null
              vm.imageId = ''
              $scope.$apply()
            })
        })
    })

    vm.progress = (uploaded, total) => {
      const percentage = parseInt((uploaded * 100) / total)
      vm.percentageUploaded = percentage
      vm.uploaded = uploaded
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
  .directive('filesInput', () => {
    return {
      require: 'ngModel',
      link: (scope, elem, attrs, ngModel) => {
        elem.on('change', (e) => {
          var files = elem[0].files
          ngModel.$setViewValue(files)
        })
      }
    }
  })
