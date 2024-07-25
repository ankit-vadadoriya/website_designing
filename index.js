$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 100) {
        $('header').addClass("fullwidth");
    } else {
        $('header').removeClass("fullwidth");
    }
});

$('.center').slick({
    centerMode: true,
    centerPadding: '350px',
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    dots: true,
    pauseOnHover: false,
    responsive: [
        {
            breakpoint: 1025,
            settings: {
              arrows: true,
              centerMode: true,
              centerPadding: '150px',
              slidesToShow: 1
            }
          },
      {
        breakpoint: 769,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '150px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '80px',
          slidesToShow: 1
        }
      }
    ]
  });

// *********************************scrollBtn************************************
let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


  // **********************************background*************************************
  // var colors = [
  //   [37, 223, 136],
  //   [0, 151, 255],
  //   [255, 188, 102],
  //   [55, 62, 74]
  // ];
  
  // /*
  //  * Render a circle for each color, and activate pulser.
  //  *
  //  */
  // colors.forEach(function(color, index) {
  //   var colorString = color.join(',');
  //   var div = document.createElement('div');
  //   div.id = 'pulser-' + index;
  //   div.className = 'pulser';
  //   div.innerHTML = '<div class="product" style="background: rgb(' + colorString + ')"></div>';
  //   div.style.position = 'absolute';
  //   // Inefficiently generate some pseudo-random values
  //   var x = 40 * Math.sin(1.2 * index) + 50;
  //   var y = 40 * Math.sin(4.3 * index) + 50;
  //   var r = 200 * Math.sin(2.8 * index) + 300;
  //   div.style.top = y + '%';
  //   div.style.left = x + '%';
  //   div.style.transform = 'translate3d(-50%, -50%, 0)';
  //   div.style.width = r + 'px';
  //   div.style.height = r + 'px';
  //   document.getElementById('main').appendChild(div);
  //   pulse(div, color);
  // });
  
  // /*
  //  * Add a canvas-based pulsing animation to an element.
  //  * @param {object} container - Dom node. Square proportions and non-static positioninng required.
  //  */
  // function pulse(container, color) {
  //   // Container dimensions
  //   var d = container.offsetWidth;
  
  //   function getColor(opacity) {
  //     return 'rgba(' + color.join(',') + ', ' + opacity + ')';
  //   }
  
  //   var ticks = 0;
  //   var canvas = document.createElement('canvas');
  //   canvas.width = d;
  //   canvas.height = d;
  //   container.insertBefore(canvas, container.firstChild);
  //   var context = canvas.getContext('2d');
  //   context.lineWidth = 2;
  
  //   /*
  //    * Draw a circle at normalized coordinates.
  //    * Opacity is inverse proportional to 
  //    */
  //   function draw(r) {
  //     context.strokeStyle = getColor(1 - r);
  //     context.beginPath();
  //     context.arc(d / 2, d / 2, r * d / 2, 0, 2 * Math.PI, false);
  //     context.stroke();
  //   }
  
  //   function animate() {
  //     context.clearRect(0, 0, d, d);
  //     [0, 1, 2].map(function(i) {
  //       draw(
  //         ((ticks + i * (d / 18)) % ((d / 2 - (d / 12))) + (d / 12)) /
  //         (d / 2)
  //       );
  //     });
  //     ticks += 1 * d / 300;
  //     requestAnimationFrame(animate);
  //   }
  
  //   animate();
  // }
  
  // /*
  //  * Add background wave animation
  //  *
  //  */
  // var wave = (function() {
  //   var length = 200;
  //   var height = 20;
  //   var steepness = length * .2;
  //   var offset = 14;
  //   var animSpeedParam = .005;
  
  //   return function (domElement, options) {
  //     var timeStep = 0;
  
  //     var canvasWidth;
  //     var canvasHeight;
  
  //     var canvas = document.createElement('canvas');
  //     domElement.appendChild(canvas);
  //     var ctx = canvas.getContext('2d');
  //     ctx.translate(0.5, 0.5);
  //     canvas.style.position = 'absolute';
  //     canvas.style.top = '0';
  
  //     function resize() {
  //       canvasWidth = domElement.offsetWidth;
  //       canvasHeight = domElement.offsetHeight;
  //       canvas.width = canvasWidth;
  //       canvas.height = canvasHeight;
  //       draw(ctx, canvasWidth, canvasHeight, timeStep, options || {});
  //     }
  
  //     function main() {
  //       timeStep++;
  //       requestAnimationFrame(main);
  //       draw(ctx, canvasWidth, canvasHeight, timeStep, options || {});
  //     }
  
  //     resize();
  //     window.addEventListener('resize', resize);
  
  //     main();
  //   };
  
  //   function draw(ctx, canvasWidth, canvasHeight, timeStep, options) {
  //     ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  //     var nx = Math.floor((canvasWidth + 2 * height) / offset) + 2;
  //     var ny = Math.floor(canvasHeight / length) + 2;
  //     var x0 = (canvasWidth - nx * offset) / 2;
  //     var y0 = (canvasHeight - ny * length) / 2;
  //     var k = Math.abs(Math.sin(timeStep * animSpeedParam)) * 0.3 + 0.7;
  //     var offsetCoefficient;
  //     for (var ix = 0; ix < nx; ix++) {
  //       for (var iy = 0; iy < ny; iy++) {
  //         offsetCoefficient = Math.sin(10 * ix / nx + timeStep * animSpeedParam) * .1;
  //         wave({
  //           x: x0 + (ix + 0) * offset,
  //           y: y0 + (iy + offsetCoefficient) * length
  //         }, height * k, ctx, options);
  //       }
  //     }
  //   }
  
  //   function wave(start, height, ctx, options) {
  //     var startX = start.x;
  //     var startY = start.y;
  //     ctx.beginPath();
  //     ctx.strokeStyle = options.color || 'rgba(0, 151, 255, .1)';
  //     ctx.lineWidth = 1;
  //     ctx.moveTo(startX - .5, startY);
  //     ctx.bezierCurveTo(
  //       startX,
  //       startY + steepness,
  //       startX + height,
  //       startY + length / 2 - steepness,
  //       startX + height,
  //       startY + length / 2 + .5
  //     );
  //     ctx.moveTo(startX + height, startY + length / 2 - .5);
  //     ctx.bezierCurveTo(
  //       startX + height,
  //       startY + length / 2 + steepness,
  //       startX,
  //       startY + length - steepness,
  //       startX,
  //       startY + length + .5
  //     );
  //     ctx.stroke();
  //   }
  // }());
  
  // wave(document.querySelector('.main'));

 // **********************************background*************************************