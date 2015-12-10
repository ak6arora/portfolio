$(document).ready(function() {
    var titles = ['UI designers', 'UI developers']; //Titles to be shown
    var index = 0; //Starting index for rotating titles
    var changeTitle = setInterval(function() {
        if (index == titles.length - 1)
            index = 0;
        else
            index++;
        $('.rotate-title').text(titles[index]);
    }, 1000)
})
