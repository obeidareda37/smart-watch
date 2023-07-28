let darkmode = document.querySelector('#darkmode');

darkmode.onclick = () => {
    if(darkmode.classList.contains('bx-moon')){
        darkmode.classList.replace('bx-moon','bx-sun');
        document.body.classList.add('color');
    }else{
        darkmode.classList.replace('bx-sun','bx-moon');
        document.body.classList.remove('color');
    }
}

let meun = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

meun.onclick = () => {
    meun.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}

window.onscroll = () => {
    meun.classList.remove('bx-x');
    navlist.classList.remove('open');
}

const sr = ScrollReveal ({
    distance: '70px',
    duration:1500,
    reset:true
});

sr.reveal('.hero-text',{delay:200, origin:'bottom'});
sr.reveal('.hero-img',{delay:350, origin:'top'});
sr.reveal('.down-arrow',{delay:450, origin:'right'});


