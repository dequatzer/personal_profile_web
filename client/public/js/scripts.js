$(document).ready(function () {

    /* Sticky Navigation */
    var navbar = document.getElementById('header');

    window.onscroll = function () {
        //myFunction();
    }

    // function myFunction() {
    //     if (window.pageYOffset >= 700) {
    //         navbar.classList.add("sticky");
    //     } else {
    //         navbar.classList.remove("sticky");
    //     }
    // }

    /* Mobile Menu */
    var openButton = $(".mobile-nav-icon");
    var mobileNav = $(".mobile-nav");
    var closeButton = $(".mobile-nave-icon-close");

    openButton.on("click", function () {
        mobileNav.style.display = "block";
    });

    closeButton.on("click", function () {
        mobileNav.style.display = "none";
    });


    /* Smooth Scrolling effect */

    // Add smooth scrolling to all links
    $("a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1000, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });

});