/*----------------Edición de loader-------------*/


/*-----------Menú desplegable---------- */
jQuery('document').ready(function(S){
    var menuBtn = $('.menu-icon'),
        menu = $('.navigation ul');
    
    menuBtn.click(function(){

        if(menu.hasClass('show')){
            menu.removeClass('show');
        }
        else{
            menu.addClass('show');
        }

    });
});




