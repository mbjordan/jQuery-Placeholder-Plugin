/*
  jQuery Placeholder Plugin v0.1
  Emulates the HTML5 Placeholder attribute in browsers without native support with a focus on minimalism.
  Released under the CC BY 3.0 License (http://creativecommons.org/licenses/by/3.0/)
  https://github.com/matthewbj/jQuery-Placeholder-Plugin
*/

(function ($) {
    $.fn.placeHolder = function () {

        /*
          Setup a test to see if placeholder is natively supported
        */
        var phsupport = false,
            phtest = document.createElement('input');
        if ('placeholder' in phtest) {
            return false;
        } else { // No native support? Run the code!
            return this.each(function () {
                if ($(this).is('input') || $(this).is('textarea')) { // filter the elements

                    /*
                      Set the return-to color
                    */
                    if ($(this).attr('style') === undefined) {
                        var color = '#000';
                    } else {
                        var color = $(this).css('color');
                    }

                    /*
                      Run the main function
                    */
                    $(this).css('color', '#999').val($(this).attr('placeholder')).on({
                        focus: function () {
                            var val = $(this).val();
                            var text = $(this).attr('placeholder');
                            if (val === text) {
                                $(this).val('').css('color', color);
                            }
                        },
                        blur: function () {
                            var val = $(this).val();
                            var text = $(this).attr('placeholder');
                            if (val === '') {
                                $(this).val(text).css('color', '#999');
                            }
                        }
                    });
                }
            });
        }
    };
})(jQuery);
