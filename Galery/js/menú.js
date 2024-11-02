/*----------------Edición de loader-------------*/

window.addEventListener("load", function(){
    document.getElementById("loader").classList.toggle("loader")
})

window.onload=function(){
    $('#onload').fadeOut();
};

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