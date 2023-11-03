$(document).ready(function() {

    // Fetching data from  JSON file
    $.getJSON("../Magento Frontend Assessment - Christian Terania/data/data.json", function(data) {
        
        data.forEach((key, value) => {

            // Inserting Tabs & Accordion Data
            $('.tab__links').append('<button id="tab-id'+ value +'" class="tab__link">'+ key.title +'</button>');
            $('.tab__contents').append('<div class="tab__content" id="tab-content-id'+ value +'">'+ key.content +'</div>');

            $('.accordion__wrapper').append('<div class="accordion__item">'
                +'<button id="accordion-id'+ value +'" class="accordion__link"><h2>'+ key.title +'</h2></button>'
                +'<div class="accordion__content" id="acc-content-id'+ value +'">'+ key.content +'</div>'
                +'</div>');
            
            // Hiding and Showing Tabs
            $(".tab__link").first().trigger('click');
            
            $('#tab-id'+ value +'').on('click', function() {
                $(".tab__link").removeClass("tab__link--active");
                $(this).addClass('tab__link--active');

                $('.tab__content').css('display', 'none'); 
                $('#tab-content-id'+ value +'').css('display', 'block');
            });    
            
            // Hiding and Showing Accordion
            $('.accordion__content').hide();
            $(".accordion__link").first().trigger('click');

            $('#accordion-id'+ value +'').on('click', function() {               

                if ($('#acc-content-id'+ value +'').is( ":hidden")) {
                    $(".accordion__link").removeClass("accordion__link--active");
                    $(this).addClass('accordion__link--active');

                    $('.accordion__content').hide();
                    $('#acc-content-id'+ value +'').slideDown('slow');              
                } else {
                    $('#acc-content-id'+ value +'').slideUp();
                    $(".accordion__link").removeClass("accordion__link--active");
                }
              });
        });
    });
});
