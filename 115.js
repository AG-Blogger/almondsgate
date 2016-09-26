/*
* File: jquery.slickhover.js
* Version: 1.0.2
* Description: Create a simple hover effect for images to open up in a popup using prettyPhoto or fancyBox of whatver else
* Author: 9bit Studios
* Copyright 2012, 9bit Studios
* http://www.9bitstudios.com
* Free to use and abuse under the MIT license.
* http://www.opensource.org/licenses/mit-license.php
*/

(function ($) {

    $.fn.slickhover = function (options) {

        var defaults = $.extend({
            animateIn: false,
            background:'https://lh3.googleusercontent.com/TYfBPR6Y8aVVokmdzGiUynrSSGfMi6PsL436nODVxlgerTgT6qHCvSUodU4dRlsnWTsrH2NPUwDBfm4aikPypLZDGcH9Oq7U4jJxz-pbGuv1PRrEiRmb52r8ihAd2KM8kM9hOXO87MsXCOCKEKizxXPATy4pQleFIFmEBtdtnQhN5QbYx64nZkSLGk1mGAvYtkox-v1OX--GOnGOj7ODugY9tiXPADEdhbk_OcaEjdaTbTNqIwc-zqX2BmevZQRc_vletTmxI3ulSZ7kpWZP5KlJPWSw9zgbzYppVgaLuL6CP4-APW28W10rjMZoupp5RxIj-n9O3ZPqCIWVgU64OfPAAXOMCkh9m9MBp488ixj1tSBZQ6ZCAGMjTeXNGc-BSOueEVvAJ4nlEZ1PECcn7xtzBZBQcBP3ojWYdM51RQSrGXabt09six0Eko9pvy5HKMq1BRyb7iQiBuyGy1ubKTS9JLW2c5moYYYvxJmg1SrKMZ_FolD68YMc41DjtEHLsmeEtUqJ5m7A5ypRtsziv3QXKc5oTR3z-nAG9H00SAS_zM1Lqzeh3VG5tISCuzvsC9Ap_M6YymiFNyN-16CSAx4YfswdR750RbYqQVEt5Zwtw-Lh=s32-no',
            color: '#000',
            opacity: 0.2,
            speed: 400
        }, options);
        
        /******************************
        Private Variables
        *******************************/         
        
        var object = $(this);
        var settings = $.extend(defaults, options);
        
        /******************************
        Public Methods
        *******************************/         
        
        var methods = {
            
            init: function() {
                return this.each(function () {
                    methods.appendHTML();
                    methods.setEventHandlers();
                });
            },
            
            /******************************
            Append HTML
            *******************************/            
            
            appendHTML: function() {
                if($(object).is('img')) {

                    if(settings.animateIn) {    
                        var icon = '<span class="icon" style="position: absolute; left: -100%; top: 0; height: 100%; width: 100%; background:url('+settings.icon+') center center no-repeat"></span>';
                        $(object).wrap('<div class="slickhoverWrapper" style="position: relative; max-width:100%; overflow:hidden; display:inline-block; background:'+settings.color+';"></div>');
                        $(icon).insertBefore($(object));
                    }
                    else
                        $(object).wrap('<div class="slickhoverWrapper" style="position: relative; max-width:100%; overflow:hidden; display:inline-block; background:url('+settings.icon+') center center no-repeat '+settings.color+';"></div>');        
                }
            },

            /******************************
            Set Event Handlers
            *******************************/            
            
            setEventHandlers: function() {
                
                $(object).on({
                    mouseenter: function () {
                        $(this).stop().animate({ opacity: settings.opacity }, settings.speed);

                        if (settings.animateIn)
                            $(object).prev().stop().animate({ left: '0px' }, settings.speed);      
                    }, 
                    mouseleave: function () {
                        $(this).stop().animate({ opacity: 1 }, settings.speed);
                        
                        if (settings.animateIn) {
                            $(object).prev().stop().animate({ left: '100%' }, settings.speed, function(){
                                $(object).prev().css('left', '-100%');
                            });        
                        }
                    }
                });
            }
        
        };
        
        if (methods[options]) {     // $("#element").pluginName('methodName', 'arg1', 'arg2');
            return methods[options].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof options === 'object' || !options) {     // $("#element").pluginName({ option: 1, option:2 });
            return methods.init.apply(this);  
        } else {
            $.error( 'Method "' +  method + '" does not exist in slickhover plugin!');
        } 
};

})(jQuery);
