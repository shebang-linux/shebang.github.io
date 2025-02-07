$(window).load(function() {
    $("#collapse").collapse({
      open: function() {
        // The context of 'this' is applied to
        // the collapsed details in a jQuery wrapper 
        this.slideDown(100);
      },
      close: function() {
        this.slideUp(100);
      },
      accordion: false
    });
    $('.carousel').carousel('pause');
    $(".fancybox").fancybox();
});
