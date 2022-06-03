const menu = document.querySelector('.nav_menu');
const menuBtn = document.querySelector('#open-menu-btn');
const closeBtn = document.querySelector('#close-menu-btn');



const faqs = document.querySelectorAll('.faq');

// Change background Nav on scroll 
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 100)
})


//
faqs.forEach( faq =>{
    faq.addEventListener('click', () =>{
        faq.classList.toggle('open');

        const icon = faq.querySelector('.faq_icon i');
        console.log(icon);
        if(icon.className === 'uil uil-plus'){
            icon.className = 'uil uil-minus';
        }else{
            icon.className = 'uil uil-plus';
        }
    
    })
})


// show/hide nav menu 
menuBtn.addEventListener('click', () =>{
    menu.style.display = 'flex';
    menuBtn.style.display = 'none';
    closeBtn.style.display = 'inline-block';
})
closeBtn.addEventListener('click', () =>{
    menu.style.display = 'none';
    closeBtn.style.display = 'none';
    menuBtn.style.display = 'inline-block';
})


// ============= SWIPER JS ===============


// 