(function () {
  $('#contact-form').validate({
    rules: {
      phone: {
        number: true
      }
    }
  });
})();