$(document).ready(function(){
    $('.slider').slick({
        arrows: false,
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        pauseOnDotsHover: true,
        responsive:[
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    const tabs = document.querySelectorAll('.tab__item');
    const tabsContent = document.querySelectorAll('.content-tab');

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            tabs.forEach(tab => {tab.classList.remove('active')});
            tab.classList.add('active');

            tabsContent.forEach(content => {content.classList.remove('active')});
            tabsContent[index].classList.add('active');
        })
    });

    // const multiSelect = () => {
    //     const element = document.querySelectorAll('.tab-select');
    //     const choices = new Choices(element, {
    //         searchEnabled: false,
    //     })
    // }

    // multiSelect();

    // const multiSelect = () => {
    //     const elements = document.querySelectorAll('.tab-select');
    //     elements.forEach(el => {
    //         const choices = new Choices(el, {
    //             searchEnabled: false,
    //             itemSelectText: "",
    //         });
    //     });
    // }
    
    // multiSelect();

    const multiSelect = () => {
        const elements = document.querySelectorAll('.item-box__select');
        elements.forEach(el => {
            const choices = new Choices(el, {
                searchEnabled: false,
                itemSelectText: "",
            });
        });
    }
    
    multiSelect();


});