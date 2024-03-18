"use strict";

$(document).ready( () => {
    // const trips = new Trips();

    $("#add_trip").click( () => {
        const trip = new Trip( 
          $("#destination").val(), $("#km").val(), $("#litres").val() );

        if (trip.isValid) {
            tripModule.push(trip); 
            $("#trip_list").val(tripModule.toString());

            $("#destination").val("");
            $("#km").val("");
            $("#litres").val("");

            $("#destination").focus();
        } 
        else {
            alert("Please complete all fields.\nKilometers and litres " 
                + "must be numeric and greater than zero.");
            $("#destination").select();
        }
    });
    
    $("#destination").focus();
});