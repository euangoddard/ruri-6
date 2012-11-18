$(function () {
    // Load all the images required by the card into the browser cache
    var image_names = [
       "afro-pig.png",
       "backdrop.jpg",
       "balloons.png",
       "barn.png",
       "barrel.png",
       "cake.png",
       "sheep.png",
       "tree.png",
    ];
    
    $.each(image_names, function () {
        var image = new Image();
        image.src = "../img/" + this;
    });
});