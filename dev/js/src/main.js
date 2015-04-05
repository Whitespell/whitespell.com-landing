(function(){

    'use strict';

    var Bbody = B(document.body);

    //Navigation
    (function(){

        B('#sidebar-trigger').click(function(e){
            e.preventDefault();
            Bbody.toggleClass('sidebar-open');
        });

    }());

}());