document.querySelector('.header_logo').addEventListener('click', function (e){
    if(window.innerWidth <= 767){
        document.getElementById('burger').classList.toggle('sc');
        // document.body.style.overflowY = 'hidden';
        document.body.classList.toggle('b_hide');
    }
})