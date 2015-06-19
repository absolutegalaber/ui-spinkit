'use strict'
class UiSpinkitTestAppController
  constructor: (@$scope)->
    @$scope.data =
      loading: true
    @$scope.flip = @flip

  flip: =>
    @$scope.data.loading = !@$scope.data.loading


UiSpinkitTestAppController.$inject = ['$scope']
angular.module('uiSpinkitTestApp').controller 'UiSpinkitTestAppController', UiSpinkitTestAppController