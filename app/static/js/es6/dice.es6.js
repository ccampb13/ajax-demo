(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#add').click(roll);
  }

  function roll(e){
    $.ajax({
      url:'/dice',
      type: 'POST',
      success: response => {
        $('#result').append('<img src="img/' + response.roll + '.png">');
      }
    });

      e.preventDefault();
    }

})();
