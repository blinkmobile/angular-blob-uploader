# @blinkmobile / angular-bm-uploader [![AppVeyor Status](https://img.shields.io/appveyor/ci/blinkmobile/angular-bm-uploader/master.svg)](https://ci.appveyor.com/project/blinkmobile/angular-bm-uploader) [![npm](https://img.shields.io/npm/v/angular-bm-uploader.svg?maxAge=2592000)](https://www.npmjs.com/package/angular-bm-uploader) [![Travis CI Status](https://travis-ci.org/blinkmobile/angular-bm-uploader.svg?branch=master)](https://travis-ci.org/blinkmobile/angular-bm-uploader)
AngularJS 1.x component for uploading and retrieving content using the [BM Uploader JS wrapper](https://github.com/blinkmobile/bm-uploader.js/), [Blob uploader service](https://github.com/blinkmobile/blob-uploader) and S3

## Installation

1.  Install this module using npm

   ```
   npm install @blinkmobile/angular-bm-uploader
   ```
1.  Add the module to your app

   ```js
   angular.module('app', [
     'bmUploader'
   ])
   ```

## Usage

### Uploading content
  Inject the bmUploaderService which returns the [BMUploader](https://github.com/blinkmobile/bm-uploader.js/blob/master/README.md) object 
  ```js
  .controller('DemoController', function DemoController (
    $scope /* :Object */,
    bmUploaderService /* :Object */
  ) {
    'ngInject

    function upload(content) {
      bmUploaderService.uploadContent(content, progressFn)
        .then((uploader) => {
          uploader.upload()
            .then(() => {
              this.imageId = uploader.id
              $scope.$apply()
            })
    }
  }
  ```
### Retrieving content URL
Inject the bmUploaderService which returns the [BMUploader](https://github.com/blinkmobile/bm-uploader.js/blob/master/README.md) object 
  ```js
  .controller('DemoController', function DemoController (
    $scope /* :Object */,
    bmUploaderService /* :Object */
  ) {
    'ngInject

    function retrieveContentURL(id) {
      bmUploaderService.retrieveContentUrl(id)
        .then((url) => {
          // retrieve content with HTTP GET
          $scope.$apply()
        })
    }
  }
  ```
### Retrieving and Displaying images  
  ```html
  <bm-image image-id="{{ctrl.imageId}}"></bm-image>
  ```

## Example
See [Browser example](example/index.html) and [JS example](example/app.js) for an example on how to use this library
