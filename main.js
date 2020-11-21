const container = document.querySelector('.container');
const prekesKortele = document.querySelector('.prekes-kortele');
const fotoImgPriekis = document.querySelector('.foto-img-priekis');
const fotoImgSonu = document.querySelector('.foto-img-sonu');



//prekes korteles vartymas
container.addEventListener('mousemove', e =>{
    xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    yAxis = (window.innerHeight / 2 - e.pageY) / 25;

    prekesKortele.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

//korteles elementu grazinimas i pradine padeti
container.addEventListener('mouseleave', ()=>{
    prekesKortele.style.transition = 'all 0.2s ease';
    prekesKortele.style.transform = `rotateY(0deg) rotateX(0deg)`;
    fotoImgPriekis.style.transform = 'translateZ(0px)';
    fotoImgPriekis.style.opacity = '100';
    fotoImgSonu.style.opacity = '0';
    fotoImgSonu.style.transform = 'translateZ(0px)';

});


//animacija uzvedus pele ant .container
container.addEventListener('mouseenter', ()=>{
    fotoImgPriekis.style.transform = 'translateZ(160px) rotateZ(20deg)';
    fotoImgPriekis.style.opacity = '0';
    fotoImgPriekis.style.width = '260px'
    fotoImgSonu.style.transform = 'translateZ(160px)';
    fotoImgSonu.style.opacity = '100';
});