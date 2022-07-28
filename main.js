
/*const time = 3500;
const step = 21;

function outNum(num, elem) {
    let l = document.querySelector('#' + elem);
    n = 0;
    let t = Math.round(time / (num / step));
    let interval = setInterval(() => {
        n = n + step;
        if (n >= num) {
            clearInterval(interval);
        }
        l.innerHTML = n;
    },
         t);
}

outNum(4648, 'out');
outNum(5761, 'out-2');
outNum(741, 'out-3');
outNum(3648, 'out-4');
outNum(2648, 'out-5');
outNum(511, 'out-6');
outNum(2918, 'out-7');
outNum(5319, 'out-8');
*/

const burger = document.querySelector('.burger');
const navMenu = document.querySelector('.nav-menu');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    navMenu.classList.toggle('active');
    document.querySelector("body").classList.toggle("scroll-hide");
    document.querySelector("html").classList.toggle("scroll-hide");

})


document.querySelectorAll(".nav-link").forEach((link) =>
  link.addEventListener("click", () => {
    burger.classList.remove("active");
    navMenu.classList.remove("active");
    document.querySelector("body").classList.remove("scroll-hide");
    document.querySelector("html").classList.remove("scroll-hide");

  })
 
);



let time = 2, cc = 1;

$(window).scroll(function(){
    $('#infoBlock').each(function(){
        let
        cPos = $(this).offset().top,
        topWindow = $(window).scrollTop();
        if (cPos < topWindow + 700) {
            if (cc < 2) {
                $('.out').addClass('viz');
                $('div').each(function(){
                    let
                    i = 500,
                    num = $(this).data('num'),
                    step = 1000 * time / num,
                    that = $(this),
                    int = setInterval(function() {
                        if (i <= num) {
                            that.html(i);
                        }
                        else {
                            cc = cc + 2;
                            clearInterval(int);
                        }
                        i++
                    },step);
                });
            }
        }

    });
});





function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('element-show');
      }
    });
  }
  
  let options = {
    threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('#block, #block-item');
  
  
  for (let elm of elements) {
    observer.observe(elm);
  }



  /*$(function () {
    var element = $("#header-nav-container"), display;
    $(window).scroll(function () {
    display = $(this).scrollTop() <= 250;
    display != element.css('opacity') && element.stop().animate({ 'opacity': display }, 200);
    });
    });*/

$(window).scroll(function(){
if ($(this).scrollTop() > 80) {
    $('.header-nav-container').addClass('fixed');
} else {
    $('.header-nav-container').removeClass('fixed');
}
});