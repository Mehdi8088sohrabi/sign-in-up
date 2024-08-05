document.addEventListener('DOMContentLoaded', function() {
    let sup = document.getElementById('uppp');
    let sin = document.getElementById('innn');
    let div1 = document.querySelector('.div1');
    let div2 = document.querySelector('.div2');
    let div3 = document.querySelector('.div3');
    let div4 = document.querySelector('.div4');

    sup.addEventListener('click', function() {
        div1.classList.add('visible');
        div1.classList.remove('hidden');
        div2.classList.add('hidden');
        div2.classList.remove('visible');
        div3.classList.add('hidden');
        div3.classList.remove('visible');
        div4.classList.add('visible');
        div4.classList.remove('hidden');
    });

    sin.addEventListener('click', function() {
        div1.classList.add('hidden');
        div1.classList.remove('visible');
        div2.classList.add('visible');
        div2.classList.remove('hidden');
        div3.classList.add('visible');
        div3.classList.remove('hidden');
        div4.classList.add('hidden');
        div4.classList.remove('visible');
    });
});


