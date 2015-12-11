$(document).ready(function() {
    var titles = [ 'web developers','Programmers']; //Titles to be shown
    var index = 0; //Starting index for rotating titles
    var changeTitle = setInterval(function() {
        if (index == titles.length - 1)
            index = 0;
        else
            index++;
        $('.rotate-title').animate({
            "opacity": "0","margin-left":"10px"
        }, 500, function() {
            $('.rotate-title').text(titles[index]);
            $('.rotate-title').animate({
                "opacity": "1","margin-left":"0"
            }, 500);
        });

    }, 2000);
    //adding a class on scrolling to skill-set section
    $('.wp7').waypoint(function(){
        $('#skill-set').addClass('visible');
    })
})
