angular.module('lirico.loaderpage.controller', [])
        .controller('LoaderPageController', ['$scope', '$state',
            function ($scope, $state) {
                $scope.dataService.dataNavigation.typeLoader = 'info';
               
                var _stateCurrentToGo = $scope.dataService.dataNavigation.fsm.currentState,
                    _idCategoria = $scope.dataService.dataWorkFlow.idCategoria;

                $scope.dataService.dataNavigation.showMenu = false;

                //Here we have the map of the messages to be displayed in the code (@@ocd@@) and are built with a code to be displayed, the font color and the name of the page to be addressed once the upload is complete.
                var _listCategorie = {
                    
                    31: {
                        nomeCategoria: 'creaListaDinieghi',
                        messaggio: '<span style="color:blue;">Lista Dinieghi n.</span><span style="color: #28A4C9"> @@cod@@</span> <span style="color:blue;">creata</span>',
                        stateToGo: 'dinieghi'
                    },
                    33: {
                        nomeCategoria: 'dettaglioDinieghi',
                        messaggio: '<span style="color:blue;">Lista Dinieghi n.</span><span style="color: #28A4C9"> @@cod@@</span> <span style="color:blue;"> eliminata</span>',
                        stateToGo: 'dinieghi'
                    },
                    34: {
                        nomeCategoria: 'gestioneComunicazioniDinieghi',
                        messaggio: '<span style="color:blue;">Comunicazioni relative alla Lista Dinieghi n.</span><span style="color: #28A4C9"> @@cod@@</span> <span style="color:blue;"> elaborate</span>',
                        stateToGo: 'gestioneComunicazioniDinieghi'
                    },
                    35: {
                        nomeCategoria: 'gestioneComunicazioniDinieghi',
                        messaggio: '<span style="color:blue;">Comunicazioni relative alla Lista Dinieghi n.</span><span style="color: #28A4C9"> @@cod@@</span> <span style="color:blue;"> protocollati</span>',
                        stateToGo: 'gestioneComunicazioniDinieghi'
                    },
                    52: {
                        nomeCategoria: 'dettaglioRimborsi',
                        messaggio: '<span style="color:blue;">Lista Impegno Fondi n.</span><span style="color: #28A4C9"> @@cod@@</span> <span style="color:blue;"> eliminata</span>',
                        stateToGo: 'rimborsi'
                    },
                    53: {
                        nomeCategoria: 'creaListaRimborsi',
                        messaggio: '<span style="color:blue;">Lista Impegno Fondi n.</span><span style="color: #28A4C9"> @@cod@@</span> <span style="color:blue;"> creata</span>',
                        stateToGo: 'rimborsi'
                    },
                    61: {
                        nomeCategoria: 'gestioneAvvisiRimborsi',
                        messaggio: '<span style="color:blue;">Avvisi Relativi alla Lista Impegno Fondi.</span><span style="color: #28A4C9"> @@cod@@</span> <span style="color:blue;"> elaborati</span>',
                        stateToGo: 'gestioneAvvisiRimborsi'
                    },
                    62: {
                        nomeCategoria: 'gestioneAvvisiRimborsi',
                        messaggio: '<span style="color:blue;">Avvisi Relativi alla Lista Impegno Fondi.</span><span style="color: #28A4C9"> @@cod@@</span> <span style="color:blue;"> protocollati</span>',
                        stateToGo: 'gestioneAvvisiRimborsi'
                    }
                };

                //
                if (_listCategorie.hasOwnProperty(_idCategoria)) {
                    var builMessage = _listCategorie[_idCategoria];
                    $scope.dataService.dataNavigation.messageForLoaderpage = builMessage.messaggio;
                    _stateCurrentToGo = builMessage.stateToGo;
                    $scope.dataService.dataNavigation.statusBar += 20;
                } else {
                    $scope.dataService.dataNavigation.messageForLoaderpage = '_idCategoria NON MAPPATA';
                }
              
                //Function which is directed to the page finishes loading
                $scope.endLoader = function () {
                    $scope.dataService.dataNavigation.showMenu = true;
                    $scope.dataService.dataNavigation.statusBar = 60;
                    $scope.dataService.dataNavigation.messageAdditionalForLoaderpage = '';
                    $state.go(_stateCurrentToGo);
                };

            }]);
