function toggleMenu(){
    const hamMenu = document.querySelector('.ham-menu');
    const offscreenMenu = document.querySelector('.off-screen-menu');
    hamMenu.classList.toggle("active");
    offscreenMenu.classList.toggle("active");
}