"use strict";

$(document).ready(function () {
  const {start} = createClock(
    $("#hours"),
    $("#minutes"),
    $("#seconds"),
    $("#ampm")
  );
  const stopwatch = createStopwatch(
    $("#s_minutes"),
    $("#s_seconds"),
    $("#s_ms")
  );

  // To start the clock initially
  start();

  $("#start").click(stopwatch.start);
  $("#stop").click(stopwatch.stop);
  $("#reset").click(stopwatch.reset);
}); // end ready()
