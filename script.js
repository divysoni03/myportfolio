function toggleMenu(){
    const hamMenu = document.querySelector('.ham-menu');
    const offscreenMenu = document.querySelector('.off-screen-menu');
    hamMenu.classList.toggle("active");
    offscreenMenu.classList.toggle("active");
}

// function toggleBoxShadow(event) {
//     const element = event.target;
//     element.classList.add('box-shadow-change');

//     // Remove the class after a specified duration (e.g., 1 second)
//     setTimeout(() => {
//         element.classList.remove('box-shadow-change');
//     }, 1000); // 1000 milliseconds = 1 second
// }

// Add click event listener to the element
document.querySelector('.element').addEventListener('click', toggleBoxShadow);
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