$(document).ready(function() {
    var titles = ['web developers', 'Programmers', 'SEO Experts']; //Titles to be shown
    var index = 0; //Starting index for rotating titles
    var changeTitle = setInterval(function() {
        if (index == titles.length - 1)
            index = 0;
        else
            index++;
        $('.rotate-title').animate({
            "opacity": "0",
            "margin-left": "10px"
        }, 500, function() {
            $('.rotate-title').text(titles[index]);
            $('.rotate-title').animate({
                "opacity": "1",
                "margin-left": "0"
            }, 500);
        });

    }, 2000);
    //adding a class on scrolling to skill-set section
    $('.wp7').waypoint(function() {
        $('#skill-set').addClass('visible');
    })

    // browser window scroll (in pixels) after which the "back to top" link is shown
    var offset = 300,
        //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
        offset_opacity = 1200,
        //duration of the top scrolling animation (in ms)
        scroll_top_duration = 700,
        //grab the "back to top" link
        $back_to_top = $('.cd-top');

    //hide or show the "back to top" link
    $(window).scroll(function() {
        ($(this).scrollTop() > offset) ? $back_to_top.addClass('cd-is-visible'): $back_to_top.removeClass('cd-is-visible cd-fade-out');
        if ($(this).scrollTop() > offset_opacity) {
            $back_to_top.addClass('cd-fade-out');
        }
    });

    //smooth scroll to top
    $back_to_top.on('click', function(event) {
        event.preventDefault();
        $('body,html').animate({
            scrollTop: 0,
        }, scroll_top_duration);
    });
    
    // to make title of modal similar to h2 dynamically
    $('.read-more,.expand i').click(function() {
        var title = $(this).closest('li>div').find('h2').text();
        $('#title').text(title);
    })

    /*end of document.ready*/
})
