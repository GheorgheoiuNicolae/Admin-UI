'use strict';

$(document).ready(function(){
  $('ul.tabs').tabs();
  $('select').material_select();
  $('.modal-trigger').leanModal();

  // toggles for add/edit panels
  $('a.add-new').on('click', function(){
    $('.panel.list').slideToggle(300);
    $('a.add-new').fadeOut();
    $('.panel.add').slideToggle(300);
  });

  $('a.edit').on('click', function(){
    $('.panel.list').slideToggle(300);
    $('a.add-new').fadeOut();
    $('.panel.edit').slideToggle(300);
  });
  $('a.cancel').on('click', function() {
    $('.panel.list').slideToggle(300);
    $('a.add-new').fadeIn();
    $('.panel.add').fadeOut(300);
    $('.panel.edit').fadeOut(300);
  });


  // Script to select All from a list
  $('p.check-all input').change(function(){
    if(this.checked) {
      $('tr .product-checkbox input').prop( "checked", true );
    }
    else {
      $('tr .product-checkbox input').prop( "checked", false );
    }
  });
});
