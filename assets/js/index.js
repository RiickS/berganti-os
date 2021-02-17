// LOGO AND BANNERS RESIZE 

$(document).ready(function () {
    $(window).trigger('resize');
});


$(window).resize(function () {

    var height = $("#feet-icon").height();
    height = (height / 2)
    $(".feet-icon-section").css('top', '-' + height + 'px')

    var imagesRowWidth = $(".images-content-row").width();
    imagesRowWidth = (imagesRowWidth - 60)
    var bannerWidth = $("#banner-img-content")
    var bannerTwoWidth = $("#banner-image-content")

    bannerTwoWidth.css('width', imagesRowWidth + 'px')
    bannerWidth.css('width', imagesRowWidth + 'px')
});


// PLUGIN SCROLL 

AOS.init();