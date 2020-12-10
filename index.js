
    var i = 1;

    function start() {
      console.log("done");
      i++;
      if (i >= $(".slider").length + 1) {
        $(".container1").animate({ "margin-left": "0" })
        $(".dot1").css("color", "red");
        $(".dot2 , .dot3").css("color", "black");
        i = 1;
        console.log(i);
      }
      else if (i == 2) {
        $(".container1").animate({ "margin-left": "-=100%" }, 1000)
        $(".dot1 , .dot3").css("color", "black");
        $(".dot2").css("color", "red");

      }
      else {
        $(".container1").animate({ "margin-left": "-=100%" }, 1000)
        $(".dot1, .dot2").css("color", "black");
        $(".dot3").css("color", "red");
      }
    }

    function stop() {
      clearInterval(h);
    }

    var h = setInterval(start, 3000);

    function pre() {
      i--;
      if (i <= 0) {
        $(".container1").animate({ "margin-left": "-200%" })
        $(".dot1 , .dot2").css("color", "black");
        $(".dot3").css("color", "red");
        i = 3;
      }
      else {
        if (i == 1) {
          $(".dot1").css("color", "red");
          $(".dot2 , .dot3").css("color", "black");
        }
        else {
          $(".dot1 , .dot3").css("color", "black");
          $(".dot2").css("color", "red");
        }
        $(".container1").animate({ "margin-left": "+=100%" });
      }
    }

    function next() {
      i++;
      if (i >= 4) {
        $(".container1").animate({ "margin-left": "00%" });
        $(".dot3 , .dot2").css("color", "black");
        $(".dot1").css("color", "red");
        i = 1;
      }
      else {
        if (i == 2) {
          $(".dot2").css("color", "red");
          $(".dot1 , .dot3").css("color", "black");
        }
        else {
          $(".dot1 , .dot2").css("color", "black");
          $(".dot3").css("color", "red");
        }
        $(".container1").animate({ "margin-left": "-=100%" });
      }
    }

    function dot1() {
      $(".container1").css("margin-left", "00%");
      i = 1;
      $(".dot1").css("color", "red");
      $(".dot2 , .dot3").css("color", "black");
    }

    function dot2() {
      $(".container1").css("margin-left", "-100%");
      i = 2;
      $(".dot1 , .dot3").css("color", "black");
      $(".dot2").css("color", "red");
    }

    function dot3() {
      $(".container1").css("margin-left", "-200%");
      i = 3;
      $(".dot1 , .dot2").css("color", "black");
      $(".dot3").css("color", "red");
    }

  