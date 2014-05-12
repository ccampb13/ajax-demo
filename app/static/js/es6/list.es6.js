(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#add').click(add);
  }

  function add(e){
  var data = $('#list').serialize();

  $.ajax({
    url:'/list',
    type: 'POST',
    data: data,
    success: response => {
      $('#result').text(response.list);
    }
  });

    e.preventDefault();
  }

})();
