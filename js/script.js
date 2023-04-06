


    const tabs = document.querySelectorAll('.tab__item');
    const tabsContent = document.querySelectorAll('.flex-box');

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            tabs.forEach(tab => {tab.classList.remove('active')});
            tab.classList.add('active');

            tabsContent.forEach(content => {content.classList.remove('active')});
            tabsContent[index].classList.add('active');
        })
    });

    const links = document.querySelectorAll('.menu__link');
    
    links.forEach((link, index) => {
        link.addEventListener('click', () => {
            links.forEach(link => {link.classList.remove('active')});
            link.classList.add('active');
        })
    });

    const icons = document.querySelectorAll('.heart__img');
    
    icons.forEach((icon, index) => {
        icon.addEventListener('click', () => {
            icon.classList.toggle('active');
        })
    });

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

    var swiper = new Swiper(".slider", {
        slidesPerView: 2,
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },

        breakpoints:{
            0: {
                slidesPerView: 1,
            },
            767: {
                slidesPerView: 2,
            },
        }
    });