(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#add').click(add);
  }

  function add(e){
  var data = $('#sum').serialize();

  $.ajax({
    url:'/sum',
    type: 'POST',
    data: data,
    success: response => {
      $('#result').text(response.sum);
    }
  });

    e.preventDefault();
  }

})();
