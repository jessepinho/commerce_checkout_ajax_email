(function($) {

Drupal.behaviors.commerce_checkout_ajax_email = {
  attach: function (context, settings) {
    $('#edit-account-login-mail').change(function() {
      if ($(this).val().trim() != '') {
        $.post(
          settings.basePath + 'commerce_checkout_ajax_email/ajax',
          {
            mail: $(this).val().trim(),
            order_id: $(this).parents('form').find('input[type="hidden"][name="order_id"]').val()
          }
        );
      }
    });
  }
};

})(jQuery);
