
$(document).ready(function() {
    
    //store site url as var
    var site_url = $('#masthead #logo').attr('href');
    //console.log(site_url)
    //remove link titles
    //$('#masthead a').removeAttr('title');

    // Mobile menu
    var test = '<!--mobmenu -->';
    var footermenu = $('#footermenu').html();
    $('.showmenu').click(function(e){
        if (test == $('#mobmenu').html()){
            $('#mobmenu').html(footermenu);
        }
        $('.drop').each(function(index) {
            var a = $(this).attr('style');
            var r = /block/;
            var id = $(this).attr('id');
            if(r.test(a) && id != "mobmenu"){ 
                $(this).slideToggle();
            } 
        });
        $('#mobmenu').slideToggle();
        e.preventDefault();
    });
    $(window).resize(function() {
        $('.drop').each(function(index) {
            var a = $(this).attr('style');
            var r = /block/;
            var id = $(this).attr('id');
            if(r.test(a)){ 
                $(this).hide();
            } 
        });
    }).resize();

    // Search
    // $('#sitemenu .live').click(function(e){
    //     $('.drop').each(function(index) {
    //         var a = $(this).attr('style');
    //         var r = /block/;
    //         var id = $(this).attr('id');
    //         if(r.test(a) && id != "livesearch"){ 
    //             $(this).slideToggle();
    //         } 
    //     });
    //     $('#livesearch').slideToggle();

    //     var lastsearch = $.cookie('livesearch');
    //     if (lastsearch != null || lastsearch != '') {
    //         $('#s').val(lastsearch);
    //         $('#s').select();
    //     }
        
    //     $('#s').focus();
        
    //     e.preventDefault();
    // });
    
    // Responsive Videos
    var $allVideos = $("iframe[src^='http://player.vimeo.com']"),
    $fluidEl = $('.videowrapper');
    $allVideos.each(function() {
        $(this)
            .data('aspectRatio', this.height / this.width)
            .removeAttr('height')
            .removeAttr('width');
        });
    // Resize on window resize
    $(window).resize(function() {
    var newWidth = $fluidEl.width();
    $allVideos.each(function() {
        var $el = $(this);
        $el
          .width(newWidth)
          .height(newWidth * $el.data('aspectRatio'));
    });
    }).resize();
    
    $('.community_info .twitter').click(function(e){
        window.location = 'https://twitter.com/shebang';
        e.preventDefault();
    });

    $('.community_info .linode').click(function(e){
        window.location = 'https://www.linode.com/?r=d37cc8c4a3d1569564ed6520e4053df8b9da2388';
        e.preventDefault();
    });

    $('.community_info .dreamhost').click(function(e){
        window.location = 'https://www.dreamhost.com/r.cgi?366152';
        e.preventDefault();
    });
});
