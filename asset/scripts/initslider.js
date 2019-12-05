window.jssor_1_slider_init = function() {

    var jssor_1_SlideoTransitions = [
      [{b:500,d:1000,x:0,e:{x:6}}],
      [{b:-1,d:1,x:100,p:{x:{d:1,dO:9}}},{b:0,d:2000,x:0,e:{x:6},p:{x:{dl:0.1}}}],
      [{b:-1,d:1,x:200,p:{x:{d:1,dO:9}}},{b:0,d:2000,x:0,e:{x:6},p:{x:{dl:0.1}}}],
      [{b:-1,d:1,rX:20,rY:90},{b:0,d:4000,rX:0,e:{rX:1}}],
      [{b:-1,d:1,rY:-20},{b:0,d:4000,rY:-90,e:{rY:7}}],
      [{b:-1,d:1,sX:2,sY:2},{b:1000,d:3000,sX:1,sY:1,e:{sX:1,sY:1}}],
      [{b:-1,d:1,sX:2,sY:2},{b:1000,d:5000,sX:1,sY:1,e:{sX:3,sY:3}}],
      [{b:-1,d:1,tZ:300},{b:0,d:2000,o:1},{b:3500,d:3500,tZ:0,e:{tZ:1}}],
      [{b:-1,d:1,x:20,p:{x:{o:33,r:0.5}}},{b:0,d:1000,x:0,o:0.5,e:{x:3,o:1},p:{x:{dl:0.05,o:33},o:{dl:0.02,o:68,rd:2}}},{b:1000,d:1000,o:1,e:{o:1},p:{o:{dl:0.05,o:68,rd:2}}}],
      [{b:-1,d:1,rY:-720},{b:0,d:4000,rY:60,e:{rY:10}}],
      [{b:-1,d:1,x:400,y:200,rX:720,rY:720,p:{x:{d:1,dO:4,c:4},y:{d:1,dO:4,c:4},rX:{d:1,dO:68,c:4},rY:{d:1,dO:4,c:68}}},{b:0,d:4000,x:0,y:0,o:1,rX:0,rY:0,e:{x:13,y:13,o:13,rX:13,rY:13},p:{x:{dl:0.02,o:4},y:{dl:0.02,o:4},o:{dl:0.05,o:4},rX:{dl:0.02,o:4},rY:{dl:0.02,o:4}}}],
      [{b:0,d:1000,o:1,p:{o:{o:4}}}],
      [{b:1000,d:1000,o:1,p:{o:{o:4}}}]
    ];

    var jssor_1_options = {
      $AutoPlay: 1,
      $CaptionSliderOptions: {
        $Class: $JssorCaptionSlideo$,
        $Transitions: jssor_1_SlideoTransitions
      },
      $ArrowNavigatorOptions: {
        $Class: $JssorArrowNavigator$
      },
      $BulletNavigatorOptions: {
        $Class: $JssorBulletNavigator$
      }
    };

    var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);

    /*#region responsive code begin*/

    var MAX_WIDTH = 1080;

    function ScaleSlider() {
        var containerElement = jssor_1_slider.$Elmt.parentNode;
        var containerWidth = containerElement.clientWidth;

        if (containerWidth) {

            var expectedWidth = Math.min(MAX_WIDTH || containerWidth, containerWidth);

            jssor_1_slider.$ScaleWidth(expectedWidth);
        }
        else {
            window.setTimeout(ScaleSlider, 30);
        }
    }

    ScaleSlider();

    $Jssor$.$AddEvent(window, "load", ScaleSlider);
    $Jssor$.$AddEvent(window, "resize", ScaleSlider);
    $Jssor$.$AddEvent(window, "orientationchange", ScaleSlider);
    /*#endregion responsive code end*/
};

jssor_1_slider_init();