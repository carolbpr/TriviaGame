window.onload = function () {
    $(".reset").on("click", reset);
    $(".start").on("click", start);
};
//  Variable that will hold our setInterval that runs the stopwatch
var intervalId;
// prevents the clock from being sped up unnecessarily
var clockRunning = false;
var time = 0;
var number = 30;
function reset() {

    time = 0;

}
function start() {
    $(".start").css("display", "none");
    $("#timer").css("display", "contents");
    $("#timer").text("Time Remaining: " + number);
    if (!clockRunning) {
        intervalId = setInterval(count, 1000);
        clockRunning = true;
    }
}
//this function countdown the clock
function count() {
    number--;
    $("#timer").html("Time Remaining: " + number);
//Timeout is the counter is equal 0
    if (number === 0) {
        alert("Time Up!");
        clearInterval(intervalId);
        clockRunning = false;
    }
}
