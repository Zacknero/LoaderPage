angular.module("lirico.loaderpage.directive", [])
        .directive("loaderPage", ['$state',
            function ($state) {
                return {

                    restrict: 'A',

                    link: function (scope, element, attrs) {
                        element.bind('click', function () {
                            scope.dataService.dataWorkFlow.idCategoria = attrs.loaderPage;
                            $state.go('loadingPage');
                        });

                    }

                }
            }]);
