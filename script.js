function toggleMenu(){
    const hamMenu = document.querySelector('.ham-menu');
    const offscreenMenu = document.querySelector('.off-screen-menu');
    hamMenu.classList.toggle("active");
    offscreenMenu.classList.toggle("active");
}

// let sections = document.querySelector('section');
// window.onscroll = () => {
//     sections.forEach(sec => {
//         let top = window.scrollY;
//         let offset = sec.offsetTop -150 ;
//         let height = sec.offsetHeight;

//         if(top >= offset && top < offset + height){
//             sec.classList.add('show-animate');
//         }
//         else {
//             sec.classList.remove('show-animate');
//         }
//     })
// }