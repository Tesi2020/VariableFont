$("button").on("click", function() {
  if(!$("body").hasClass("white")) {
    $("html, body").addClass("white");
    console.log("First");

    // inverti colore
    $(".buttonVariable").css({"background": "black", "color": "white"});
    $(".btn").css({"background": "black", "color": "white"});
    $(".btn .active").css({"background": "white", "color": "black"});
    $(".container").css({"background": "black", "color": "white"});
    $(".container-text").css({"background": "black", "color": "white"});
    $(".container-specimen").css({"background": "black", "color": "white"});
    $(".container-thanks").css({"background": "black", "color": "white"});
    $(".demo-text").css({"background": "black", "color": "white"});
    $(".About-text").css({"background": "black", "color": "white"});
    $(".Text-Neutral").css({"background": "black", "color": "white"});
    $(".Text-Joy").css({"background": "black", "color": "white"});
    $(".Text-Sadness").css({"background": "black", "color": "white"});
    $(".Text-Trust").css({"background": "black", "color": "white"});
    $(".Text-Disgust").css({"background": "black", "color": "white"});
    $(".Text-Fear").css({"background": "black", "color": "white"});
    $(".Text-Anger").css({"background": "black", "color": "white"});
    $(".Text-Anticipation").css({"background": "black", "color": "white"});
    $(".Text-Surprise").css({"background": "black", "color": "white"});
    $(".Style").css({"background": "black", "color": "white"});
    $(".Style-Neutral").css({"background": "black", "color": "white"});
    $(".Thanks-text").css({"background": "black", "color": "white"});
    $(".topnav").css({"background": "black", "color": "white"});
    $(".topnav a").css({"background": "black", "color": "white"});

    $(".attached").css({"background": "white", "color": "black"});
    $(".attached a").css({"background": "black", "color": "white"});
    $(".attached a.active").css({"background": "white", "color": "black"});

    $(".language").css({"background": "black", "color": "white"});
    $(".language a.active").css({"background": "white", "color": "black"});

    $(".topnav-right").css({"background": "black", "color": "white"});
    $(".attached-right").css({"background": "black", "color": "white"});
    $(".language-right").css({"background": "black", "color": "white"});

    $(".slider-label-right").css({"background": "black", "color": "white"});
    $(".slider-label-left").css({"background": "black", "color": "white"});

    $(".slidercontainer").addClass({"background":"black"});
    $(".slider-controls").addClass({"background":"black"});
    $(".slider").addClass({"background":"white"});
    $(".slider::-webkit-slider-thumb").addClass({"background":"white"});
    $(".slider::-moz-range-thumb").addClass({"background":"white"});

    $(".slidercontainer-disable").addClass({"background":"black"});
    $(".slider-controls-disable").addClass({"background":"black"});
    $(".slider-disable").addClass({"background":"white"});

    $(".button").addClass({"background": "white"});
    $(".button-invert").addClass({"background": "black"});
 
    $(".attivo").css({"background": "black", "color":"white"}); 

  } else {
    $("html, body").removeClass("white");
    console.log("Second");
    
    // inverti colore
    $(".buttonVariable").css({"background": "white", "color": "black"});
    $(".btn").css({"background": "white", "color": "black"});
    $(".btn .active").css({"background": "black", "color": "white"});
    $(".container").css({"background": "white", "color": "black"});
    $(".container-text").css({"background": "white", "color": "black"});
    $(".container-specimen").css({"background": "white", "color": "black"});
    $(".container-thanks").css({"background": "white", "color": "black"});
    $(".demo-text").css({"background": "white", "color": "black"});
    $(".About-text").css({"background": "white", "color": "black"});
    $(".Text-Neutral").css({"background": "white", "color": "black"});
    $(".Text-Joy").css({"background": "white", "color": "black"});
    $(".Text-Sadness").css({"background": "white", "color": "black"});
    $(".Text-Trust").css({"background": "white", "color": "black"});
    $(".Text-Disgust").css({"background": "white", "color": "black"});
    $(".Text-Fear").css({"background": "white", "color": "black"});
    $(".Text-Anger").css({"background": "white", "color": "black"});
    $(".Text-Anticipation").css({"background": "white", "color": "black"});
    $(".Text-Surprise").css({"background": "white", "color": "black"});
    $(".Style").css({"background": "white", "color": "black"});
    $(".Style-Neutral").css({"background": "white", "color": "black"});
    $(".Thanks-text").css({"background": "white", "color": "black"});
    $(".topnav").css({"background": "white", "color": "black"});
    $(".topnav a").css({"background": "white", "color": "black"});

    $(".attached").css({"background": "black", "color": "white"});
    $(".attached a").css({"background": "white", "color": "black"});
    $(".attached a.active").css({"background": "black", "color": "white"});

    $(".language").css({"background": "white", "color": "black"});
    $(".language a.active").css({"background": "black", "color": "white"});

    $(".topnav-right").css({"background": "white", "color": "black"});
    $(".attached-right").css({"background": "white", "color": "black"});
    $(".language-right").css({"background": "white", "color": "black"});

    $(".slider-label-right").css({"background": "white", "color": "black"});
    $(".slider-label-left").css({"background": "white", "color": "black"});

    $(".slidercontainer").addClass({"background":"white"});
    $(".slider-controls").addClass({"background":"white"});
    $(".slider").addClass({"background":"black"});
    $(".slider::-webkit-slider-thumb").addClass({"background":"black"});
    $(".slider::-moz-range-thumb").addClass({"background":"black"});

    $(".slidercontainer-disable").addClass({"background":"white"});
    $(".slider-controls-disable").addClass({"background":"white"});
    $(".slider-disable").addClass({"background":"black"});

    $(".button").addClass({"background": "black"});
    $(".button-invert").addClass({"background": "white"});
 
    $(".attivo").css({"background": "white", "color":"black"}); 
  }
})





