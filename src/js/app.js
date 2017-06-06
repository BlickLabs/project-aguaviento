(function () {
  $.extend($.validator.messages, {
    required: "Este campo es obligatorio",
    remote: "Please fix this field",
    email: "Ingresa una dirección de correo válida",
    url: "Ingresa una URL válida",
    date: "Ingresa una fecha válida",
    dateISO: "Ingresa una fecha válida (ISO)",
    number: "Ingresa un número válido",
    digits: "Solo se permiten números dígitos",
    creditcard: "Ingresa un número de tarjeta válido",
    equalTo: "Los valores deben coincidir",
    accept: "Please enter a value with a valid extension",
    maxlength: $.validator.format("No ingreses más de {0} caracteres"),
    minlength: $.validator.format("Ingresa al menos {0} caracteres"),
    rangelength: $.validator.format("El texto debe tener entre {0} y {1} caracteres"),
    range: $.validator.format("Ingresa un valor entre {0} y {1}"),
    max: $.validator.format("Ingresa un valor menor o igual que {0}"),
    min: $.validator.format("Ingresa un valor mayor o igual que {0}")
  });

  $.validator.setDefaults({
    invalidHandler: function (event, validator) {
      var form = $(this);
      form.find('.form-message')
      .removeClass(form.hasClass('success') ? 'success' : 'error')
      .html('');
    },
    submitHandler: function (form) {
      var $form = $(form).serialize(),
        fields = $(form).find('select, input, textarea, button').not('[disabled]'),
        formMessage = $(form).find('.form-message'),
        successMessage = $('<i class="fa fa-check-circle"></i><span>Mensaje enviado exitosamente</span>'),
        errorMessage = $('<i class="fa fa-times-circle"></i><span>Ocurrió un error</span>'),
        setMessage = function (success) {
          var message = success ? successMessage : errorMessage;
          fields.removeAttr('disabled');
          formMessage.removeClass(success ? 'error' : 'success');
          formMessage.addClass(success ? 'success' : 'error');
          formMessage.html(message);
        };

      formMessage.html('');
      if (!$(form).find('.button-wrapper .loader').length) {
        $(form).find('.button-wrapper').addClass('disabled');
      }
      $.ajax({
        url: $(form).attr('action'),
        method: 'POST',
        data: $form
      })
        .done(function (data) {
          setMessage(parseInt(data) === 1);
          form.reset();
        })
        .fail(function () {
          setMessage(false);
        })
        .always(function () {
          fields.removeAttr('disabled');
          $(form).find('.button-wrapper').removeClass('disabled');
        });
    }
  });
})();