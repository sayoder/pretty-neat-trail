function doSlideIn() {
    var extra = 60;
    var bg = $(this).css('background-image');

    // $(this).css({
    //     background: "linear-gradient(0deg, rgba(28,28,28,60%) 0%, rgba(0,0,0,0) 38%)",
    //     backgroundImage: bg,
    //     backgroundSize: "cover",
    //     backgroundRepeat: "no-repeat",
    //     backgroundClip: "border-box",
    //     backgroundPosition: "center center",
    // });

    var text = $(this).find('.category-text');
    // if (!text.hasClass('animated')) {
        var width = $(this).find('.category-slidein').width() + $(this).find('.category-slidein .category-name').width() + extra;
        // text.dequeue().stop();
        text.transition({ x: -width}, 300, 'easeOutCubic');
    // }
}

function doSlideOut() {
    var text = $(this).find('.category-text');
    // text.addClass('animated');
    text.transition({ x: 0}, 200, 'easeOutCubic', function() {
        // $(this).removeClass('animated').dequeue();
    });
}

$(document).ready(function() {
    if (!window.matchMedia( "(hover: none)" ).matches) {
        // We have hover capabilities
        $('div.category-image').click(function(e) {
            window.location = $(this).find('a.category-name').attr("href");
            return false;
        });
    }

    $('.category-image').hover(doSlideIn, doSlideOut);
});
