$('#menu-button').click(function(e){
    e.stopPropagation();
     $('#hide-menu').toggleClass('show-menu');
    $('.menu-button').toggleClass('active');
    $('.quickspan').toggleClass('active');
});
$('#hide-menu').click(function(e){
    e.stopPropagation();
});
