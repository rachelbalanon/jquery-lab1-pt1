"use strict";

$(document).ready(() => {
    $(document).on("mouseenter", ".table", (event) => {
        $(event.target).fadeTo(800, 0.2);
    });
    $(document).on("mouseleave", ".table", (event) => {
        $(event.target).fadeTo(800, 1);
    });

    $(".table").on("click", () => {
        $(".form-container").show(300);
    });

    $(".material-icons").on("click", () => {
        $(".form-container").hide(300);
    });

    // $(".save-btn").on("click", (event) => {
    //     $(event.target).
    // });

    $(".save-btn").on("click", () => {
        $(".form-container").hide(300);
        $(".available").addClass(".reserved").removeClass(".available");
    });

    // $(document).on("click", "#it", (event) => {
    //     $(event.target).addClass("red");
    //     //selects elements that are green and turns them yellow when you click on element with class of "it"
    //     $(".green").addClass("yellow").removeClass("green");
    // });

});