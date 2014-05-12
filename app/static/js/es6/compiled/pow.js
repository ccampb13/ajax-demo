(function() {
  'use strict';
  $(document).ready(init);
  function init() {
    $('#add').click(add);
  }
  function add(e) {
    var data = $('#pow').serialize();
    $.ajax({
      url: '/power',
      type: 'POST',
      data: data,
      success: (function(response) {
        $('#result').text(response.pow);
      })
    });
    e.preventDefault();
  }
})();

//# sourceMappingURL=pow.map
