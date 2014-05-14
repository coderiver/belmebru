head.ready(function() {
		
	$(document).click(function(){
		$(".js-overlay").hide();
		$("body").removeClass("has-open-popup");
	});  

	// validation form
	$(".js-validate").each(function(){
		if ($(this).length > 0) {
			$(this).validate({
				errorClass: "has-error",
				rules: {
					firstname: "required",
					lastname: "required",
					username: {
						required: true,
						minlength: 2
					},
					password: {
						required: true,
						minlength: 5
					},
					confirm_password: {
						required: true,
						minlength: 5,
						equalTo: "#password"
					},
					email: {
						required: true,
						email: true
					},
					tel: {
						required: true,
						minlength: 2,
						phoneUS: true
					},
					address: {
						required: false,
						minlength: 2
					},
					message: {
						minlength: 4
					}
				},
				messages: {
					firstname: "Вас так зовут?",
					lastname: "У вас такая фамилия?",
					password: {
						required: "Пароли не совпадают",
						minlength: "Минимум 5 символов"
					},
					confirm_password: {
						required: "Пароли не совпадают",
						minlength: "Минимум 5 символов",
						equalTo: "Пароли не совпадают"
					},
					email: "Неверный формат",
					address: "Это Ваш адрес?",
					tel: {
						required: "Телефон с ошибкой",
						phoneUS: "Please enter a valid phone number: (e.g. 19999999999 or 9999999999)"
					},
					message: {
						required: "Это Ваш вопрос?",
						minlength: "Это Ваш вопрос?"
					}
				}
			});
		}
	});
	$(".js-validate-enter").each(function(){
		if ($(this).length > 0) {
			$(this).validate({
				errorClass: "has-error",
				rules: {
					password: {
						required: true,
						minlength: 5
					},
					email: {
						required: true,
						email: true
					},
				},
				messages: {
					password: {
						required: "Неверный пароль",
						minlength: "Минимум 5 символов"
					},
					email: "Неверный формат"
				}
			});
		}
	});

	// popups
	$(".js-popup-link").on("click", function(event){
		var popup = $(this).attr("data-popup");
		$("body").addClass("has-open-popup");
		$("."+popup).parent().fadeIn(200);
		event.stopPropagation();
		return false;
	});
  	$(".js-popup-close").on("click", function(){
  		$(".js-overlay").fadeOut(200); 
  		$("body").removeClass("has-open-popup")
		return false;
	});
  	$(".js-popup").on("click", function(event){
		event.stopPropagation();
	});

  	// 1. Initialize fotorama manually.
    var $fotoramaDiv = $('.js-fotorama').on('fotorama:ready ',
            function (e, fotorama, extra) {
              $('.js-fotorama').addClass("is-visible");
            }
        )
        // Initialize fotorama manually
        .fotorama();

    // 2. Get the API object.
    var fotorama = $fotoramaDiv.data('fotorama');
	$(".js-prev-banner").on("click", function(){
		fotorama.show('<');
		return false;
	});
	$(".js-next-banner").on("click", function(){
		fotorama.show('>');
		return false;
	});

	$("body").prepend( '<div class="tooltip js-tooltip"><div class="tooltip__in"></div></div>' );
    var tooltip = $(".js-tooltip");
    $(".js-tooltip-key").hover(
        function(){
            var left = $(this).offset().left;
            var bottom = $(window).height() - $(this).offset().top;
            var tooltip_html = $(this).attr("data-title");
            tooltip.css({
                left: left,
                bottom: bottom-8 
            });
            tooltip.find(".tooltip__in").html(tooltip_html).fadeIn("fast");
            tooltip.fadeIn("fast");
        },
        function() {
            tooltip.hide();
        }
    );
    tooltip.hover(
        function(){
            tooltip.show();
        },
        function() {
            tooltip.hide(); 
        }
    );

    if ($(".js-counter").length) {
    	$(".js-counter").each(function(){
    		var year = $(this).attr("data-year");
	    	var month = $(this).attr("data-month")-1;
	    	var day = $(this).attr("data-day");
	    	var hour = $(this).attr("data-hour");
	    	var minute = $(this).attr("data-minute");
	        $(this).countdown({
	            until: new Date(year, month, day, hour, minute),
	            format: 'DHMS',
	            compact: true,
	            padZeroes: true,
	            layout: '{d<}<div class="counter__item"><span>{dn}:</span></div>{d>}{h<}<div class="counter__item"><span>{hn}:</span></div>{h>}' + 
	            '{m<}<div class="counter__item"><span>{mn}:</span></div>{m>}{s<}<div class="counter__item"><span>{sn}</span></div>{s>}'
	        });
    	});
	    	
    }

});