$(document).ready(function() {
  $(".owl-carousel").owlCarousel();
});

// init Masonry



/*------------Masonry JQuery ----------------- */
jQuery(function($) {
  $('.grid img').each(function(i) {
      var src = $(this).attr('src'),
          size = src.split('/').reverse(),
          h = parseInt(size[1]),
          w = parseInt(size[2]),
          flexGrow = (w * 200) / h,
          flexBasis = (w * 280) / h,
          paddingBottom = (h / w) * 100;
      $(this).attr('alt', 'kitten-' + (i + 1))
          .wrap('<figure>').before('<i>');

      var figure = $(this).parent('figure');
      figure.css({
              'flex-grow': flexGrow,
              'flex-basis': flexBasis + 'px'
          })
          .find('i').css({
              'padding-bottom': paddingBottom + '%'
          });

      var img = new Image();
      img.onload = function() {
          figure.addClass('loaded');
      };
      img.src = src;
  });
});


//-----------------------------------------Rough-Studied-items------------------------------------------------
$(document).ready(function() {
  $("#hide").click(function() {
      $(".hide-show").hide(1000);
  });
  $("#show").click(function() {
      $(".hide-show").show(1000);
      alert("The paragraph is now shown");
  });
}); // for hide and show


$(document).ready(function() {
  $(".toggle-btn").click(function() {
      $(".toggle-box").fadeToggle(3000);
  });
}); //for toggle-box


$(document).ready(function() {
  $(".flip").click(function() {
      $(".panel").slideUp(2000).slideDown(2000);
  });
}); //for-toggle-slider

$(document).ready(function() {
  $(".jQuery-get").click(function() {
      alert($("#w3s").attr("href"));
  });
});

$(document).ready(function() {
  $(".remove-element").click(function() {
      $(".remove").remove();
  });
}); //remove element

$(".target").scroll(function() {
  $("#log").append("<div>Handler for .scroll() called.</div>");
}); //event-browser

//keypree
var xTriggered = 0;
$("#target").keypress(function(event) {
  if (event.which == 13) {
      event.preventDefault();
  }
  xTriggered++;
  var msg = "Handler for .keypress() called " + xTriggered + " time(s).";
  alert(msg, "html");
});

$("#other").click(function() {
  $("#target").keypress();
});
$(".click-me").dblclick(function() {
  alert("Hello World!");
});