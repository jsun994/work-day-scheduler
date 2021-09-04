//display current day
$('#currentDay').text(moment().format('dddd, MMMM Do'));

//save function
$('.saveBtn').on('click', function() {
    //get description value
    var description = $(this).siblings('.description').val();
    //get parent id
    var time = $(this).parent().attr('id');
    //set to localstorage
    localStorage.setItem(time, description);

    console.log(localStorage);
});

//load function
function load() {
    $('#9 .description').val(localStorage.getItem('9'));
    $('#10 .description').val(localStorage.getItem('10'));
    $('#11 .description').val(localStorage.getItem('11'));
    $('#12 .description').val(localStorage.getItem('12'));
    $('#13 .description').val(localStorage.getItem('13'));
    $('#14 .description').val(localStorage.getItem('14'));
    $('#15 .description').val(localStorage.getItem('15'));
    $('#16 .description').val(localStorage.getItem('16'));
    $('#17 .description').val(localStorage.getItem('17'));
}

load();

//color scheduler
function scheduler() {
    //get current time
    //var current = 10;
    var current = moment().hours();
    console.log(current);

    $('.time-block').each(function() {
        //parse the hour
        var hour = parseInt($(this).attr('id'));
        //.substring(0, $(this).attr('id').length - 2));

        console.log(hour);

        //check hour and color accordingly
        if (hour < current) {
            $(this).addClass('past');
        }
        else if (hour === current) {
            $(this).removeClass('past');
            $(this).addClass('present');
        }
        else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    });
}

scheduler();