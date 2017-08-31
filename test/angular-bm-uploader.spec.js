'use strict'
/* eslint-disable no-undef */

describe('bm image controller', () => {
  let $componentController
  let locals
  let $ctrl
  beforeEach(module('bmUploader'))

  beforeEach(inject(function (_$componentController_, _$rootScope_) {
    $componentController = _$componentController_
    locals = {
      $scope: _$rootScope_.$new(),
      bmUploaderService: {
        retrieveContentUrl: () => Promise.resolve('123')
      }
    }
    $ctrl = $componentController('bmImage', locals, {imageId: '123'})
  }))

  it('should call service when imageId changes', (done) => {
    const $onSpy = spyOn(locals.bmUploaderService, 'retrieveContentUrl').and.callThrough()
    $ctrl.$onChanges({
      imageId: {
        currentValue: '123'
      }
    })
    expect($onSpy).toHaveBeenCalled()
    done()
  })

  it('should NOT call service when imageId does not change', (done) => {
    const $onSpy = spyOn(locals.bmUploaderService, 'retrieveContentUrl').and.callThrough()
    $ctrl.$onChanges({})
    expect($onSpy).not.toHaveBeenCalled()
    done()
  })
})
