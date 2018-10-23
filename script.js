"use strict";

$(document).ready(() => {
    // Changes opacity of tables 
    $(document).on("mouseenter", ".available", (event) => {
        $(event.target).fadeTo(800, 0.2);
    });
    $(document).on("mouseleave", ".available", (event) => {
        $(event.target).fadeTo(800, 1);
    });
    // Shows form when a table is clicked
    $(".available").on("click", () => {
        $(".form-container").show(300);
    });
    // Closes form with x
    $(".material-icons").on("click", () => {
        $(".form-container").hide(300);
    });
    // Closes/saves form and changes tables to reserved 
    $(".save-btn").on("click", () => {
        $(".form-container").hide(300);
        $(".available").addClass(".reserved").removeClass(".available");
    });

    // Table Number
    // console.log($(".available"));
});