$(function () {
    
    // Place Afro Pig somewhere at random
    var $afro_pig = $("#afro-pig");
    var $hiding_places = $("figure").not($afro_pig);
    var hiding_places_count = $hiding_places.length;
    var random_index = Math.floor(Math.random() * hiding_places_count);
    
    var $hiding_place = $hiding_places.eq(random_index);
    var hiding_place_name = $hiding_place.attr("id");
    
    $afro_pig.addClass(hiding_place_name);
    
    // Show Afro pig when his hiding place is clicked, otherwise inform that
    // he's not there
    var $not_there = $("#not-there");
    $hiding_places.on("click", $hiding_places, function () {
        if ($(this).attr("id") === hiding_place_name) {
            $afro_pig.addClass("show");
            $hiding_places.off("click");
            setTimeout(function () {
                $("#found-him").show();
            }, 3000);
        } else {
            $not_there.show();
            setTimeout(function () {
                $not_there.hide();
            }, 2000);
        }
    });
    
    // Due to animations, Afro pig is initially invisible, but we can discard
    // this after 2 seconds as any initial animations will already be done
    setTimeout(function () {
        $afro_pig.css("opacity", 1);
    }, 2000);
    
});