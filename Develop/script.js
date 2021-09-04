//display current day
$('#currentDay').text(moment().format('dddd, MMMM Do'));

//save function
$('.saveBtn').on('click', function() {
    //get description value
    var description = $(this).siblings('.description').val();
    //get parent id
    var time= $(this).parent().attr('id');
    //set to localstorage
    localStorage.setItem(time, description);

    console.log(localStorage);
});

//load function
function load() {
    $('#9am .description').val(localStorage.getItem('9am'));
    $('#10am .description').val(localStorage.getItem('10am'));
    $('#11am .description').val(localStorage.getItem('11am'));
    $('#12pm .description').val(localStorage.getItem('12pm'));
    $('#1pm .description').val(localStorage.getItem('1pm'));
    $('#2pm .description').val(localStorage.getItem('2pm'));
    $('#3pm .description').val(localStorage.getItem('3pm'));
    $('#4pm .description').val(localStorage.getItem('4pm'));
    $('#5pm .description').val(localStorage.getItem('5pm'));
}

load();