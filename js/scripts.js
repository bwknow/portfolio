$(function() {

  "use strict";

  var hash = $(this).find('li.active a').attr('href');
  if(hash !== '#featured') {
    $('header nav').addClass('inbody');
  } else {
    $('header nav').removeClass('inbody');
  }

  function SortByID(x,y) {
    return x.id - y.id; 
  }

  function SortByName(x,y) {
    return ((x.name == y.name) ? 0 : ((x.name > y.name) ? 1 : -1 ));
  }

  $('.banner').on('click', function(){
    $('body').scrollTop(0);
  })


    $.getJSON('chris.json', function(data) {

        data.items.sort(SortByName);

        var myTemplate = $.templates("#portfolioTmpl");
        var html = myTemplate.render(data.items);
        $("#sites").html(html);

        myTemplate = $.templates("#portfolioTmpl2");
        html = myTemplate.render(data.items);
        $("#sites2").html(html);
        
        myTemplate = $.templates("#projectsTmpl");
        html = myTemplate.render(data.items);
        //$("ul#projects").html(html);

    });

});
