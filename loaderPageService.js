angular.module('lirico.loaderpage.service', [])
        .factory('LoaderPageService', ['$sce',
            function ($sce) {

                var _loaderPage = {}, indentify = '@@';

                //Picking function key and value to SEND function to replace
                function _decodeParamsMessage(message, params) {
                    var messaggio = message;
                    for (var key in params) {
                        var search = indentify + key + indentify;
                        var replacement = params[key];
                        messaggio = _replaceAll(messaggio, search, replacement);
                    }
                    return messaggio;
                }

                //replace the function key with the value
                function _replaceAll(target, search, replacement) {
                    return target.replace(new RegExp(search, 'g'), replacement);
                }

                _loaderPage.buildMessage = function (message, params, callback) {
                    var messaggio = _decodeParamsMessage(message, params);
                    //It is converted to the string as html with $sce module 
                    callback($sce.trustAsHtml(messaggio));
                };

                _loaderPage.errorSystemLoader = function (errorMex, callback) {
                    callback(errorMex);
                };

                return _loaderPage;
            }
        ]);
