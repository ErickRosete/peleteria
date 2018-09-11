//==============primer y tercer swiper banners=================//
function activateSwipers() {

    var swipers = document.querySelectorAll('.swiper-container');
    // var button=document.querySelectorAll(".swiper-button-next")[1];
    console.log("==========Swiper============")
    console.log(swipers)

    swipers.forEach((element, index) => {
        //console.log(element);
        element.className += " instance-" + index;
        //console.log("====soy un index")
        //console.log(index)
        if (document.querySelectorAll(".swiper-button-next")[index] != null) {
            var button = document.querySelectorAll(".swiper-button-next")[index];
            button.className += " btn-next-" + index;
            var button2 = document.querySelectorAll(".swiper-button-prev")[index];
            button2.className += " btn-prev-" + index;
        }

        var pagination = document.querySelectorAll(".swiper-pagination")[index];
        pagination.className += " pag-" + index;
        //=============================swiper de banners======//
        if (index == 0){
            console.log("si entre")
            var este = element;
            //console.log(button);
            var swiper = new Swiper(".instance-" + index, {
                spaceBetween: 0,
                effect: 'fade',
                loop: true,
                slidesPerView: 1,
                centeredSlides: true,
                // spaceBetween: 30,
                // autoplay: {
                //     enabled: true,
                //     delay: 2500,
                //     disableOnInteraction: false,
                // },
                pagination: {
                    el: '.swiper-pagination.pag-' + index,
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next.btn-next-' + index,
                    prevEl: '.swiper-button-prev.btn-prev-' + index,
                }
            });
            console.log("este es el swiper "+index)
            console.log(swiper);
        }
    })
}
activateSwipers();