$(document).ready(function() {
    const cursors = $("[data-cursor]");
    const hoveredElements = $("button, a");

    $(window).on("mousemove", function(event) {
        const posX = event.clientX;
        const posY = event.clientY;

        /** cursor dot position */
        cursors.eq(0).css({
            left: posX + "px",
            top: posY + "px"
        });

        /** cursor outline position */
        setTimeout(function() {
            cursors.eq(1).css({
                left: posX + "px",
                top: posY + "px"
            });
        }, 80);
    });

    const cursorOutline = $(".cursor-outline");
    const navbarListItems = $(".navbarr ul li");

    navbarListItems.on("mouseover", function() {
        cursorOutline.css({
            transition: "width 0.7s ease, height 0.7s ease",
            width: "80px",
            height: "80px"
        });
        $(this).css({
            color: "white",
            transition: "font-size 0.7s ease",
            fontSize: "40px"
        });
    });

    navbarListItems.on("mouseout", function() {
        cursorOutline.css({
            transition: "width 0.7s ease, height 0.7s ease",
            width: "40px",
            height: "40px",
            backgroundColor: "transparent"
        });
        $(this).css({
            color: "",
            backgroundColor: "",
            transition: "font-size 0.7s ease",
            fontSize: "25px",
            border: "none"
        });
    });



    $(document).ready(function() {
        const navbtn = $(".navbtnn");
        const fastbtn = $(".fastbtn"); // Select the button with class "fastbtn"
    
        // Functionality for navbtn
        navbtn.on("mouseover", function() {
            cursorOutline.css({
                transition: "width 0.7s ease, height 0.7s ease",
                color: "white"
            });
    
            $(this).css({
                color: "white", // Change text color to white
                transition: "color 0.5s ease" // Apply transition to color change
            });
        }).on("mouseout", function() {
            cursorOutline.css({
                color: "gray" // Revert cursor color to gray
            });
    
            $(this).css({
                color: "gray", // Revert text color to gray
                transition: "color 0.5s ease" // Apply transition to color change
            });
        });
    
        // Functionality for fastbtn
        fastbtn.on("mouseover", function() {
            cursorOutline.css({
                transition: "width 0.7s ease, height 0.7s ease",
                color: "white"
            });
    
            $(this).css({
                color: "white", // Change text color to white
                transition: "color 0.5s ease" // Apply transition to color change
            });
        }).on("mouseout", function() {
            cursorOutline.css({
                color: "gray" // Revert cursor color to gray
            });
    
            $(this).css({
                color: "gray", // Revert text color to gray
                transition: "color 0.5s ease" // Apply transition to color change
            });
        });
    });
    


  
    
});
