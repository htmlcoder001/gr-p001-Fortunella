const myswiper = new Swiper(".swiper2", {
  // Optional parameters
  loop: true,
  autoHeight: true,
  effect: "cube",

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

$(".blur").on("click", function () {
  $(this).children(".blur-p").css("display", "none");
  $(this).children("img").css("filter", "none");
});

// javascript native
document.querySelectorAll('a[href^="#"').forEach(link => {

    link.addEventListener('click', function(e) {
        e.preventDefault();

        let href = this.getAttribute('href').substring(1);

        const scrollTarget = document.getElementById(href);

        const topOffset = document.querySelector('#order_block').offsetHeight;
        console.log(href)
        // const topOffset = 0; // если не нужен отступ сверху
        const elementPosition = scrollTarget.getBoundingClientRect().top;

        const offsetPosition = elementPosition - topOffset;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});



	
