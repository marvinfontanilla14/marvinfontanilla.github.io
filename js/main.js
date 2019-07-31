// $('.navbar-nav li').click(function(){
// 	$(this).siblings().removeClass('active');
// 	$(this).addClass('active');
// });




// Cache selectors
var lastId,
    topMenu = $(".navbar-nav"),
    topMenuHeight = topMenu.outerHeight() + 1,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function() {
        var item = $($(this).attr("href"));
        if (item.length) { return item; }
    });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e) {
    var href = $(this).attr("href"),
        offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1;
    $('html, body').stop().animate({
        scrollTop: offsetTop
    }, 800);
    e.preventDefault();
});

// Bind to scroll
$(window).scroll(function() {
    // Get container scroll position
    var fromTop = $(this).scrollTop() + topMenuHeight;

    // Get id of current scroll item
    var cur = scrollItems.map(function() {
        if ($(this).offset().top < fromTop)
            return this;
    });
    // Get the id of the current element
    cur = cur[cur.length - 1];
    var id = cur && cur.length ? cur[0].id : "";

    if (lastId !== id) {
        lastId = id;
        // Set/remove active class
        // console.log("test");
        // menuItems
        //   .parent().removeClass("active")
        //   .end().filter("[href=#"+id+"]").parent().addClass("active");

        menuItems.each(function() {
            $(this).parent().removeClass('active');
            if ($(this).attr('href') === '#' + lastId) {
                $(this).parent().addClass('active')
            }
        })
    }
});




$(function() {
   sendInquiry();
});

function sendInquiry () {

    var token = '55387ec9-5d27-4ac1-9d32-fdaf4b3c1005';
    var from = 'marvinfontanilla020715@gmail.com';
    var to = 'marvinfontanilla14@gmail.com';
    var subj = 'My Portfolio message :';
    // HOST: smtp.gmail.com


    $('#formInquiry').submit(function(evt) {

        evt.preventDefault();
        var name = $('#txtName').val();
        var email = $('#txtEmail').val();
        var message = $('#txtMessage').val();

        Email.send(from,
        to,
        subj+" "+name+" :",
        "Email: "+email+" Message: "+message,
        {token: token});


        alert("Message has been sent. Thank you!");
        $('.input').val('');
    });

}