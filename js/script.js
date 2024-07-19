document.addEventListener('mousemove', function(event) {const footer = document.getElementById('footer');const yOffset = window.innerHeight - event.clientY;if(yOffset < 20){footer.classList.add('show');}else{footer.classList.remove('show');}});let lastScrollTop = 0;const topBar = document.getElementById('topdiv');window.addEventListener('scroll', function() {const scrollTop = window.pageYOffset || document.documentElement.scrollTop;if (scrollTop > lastScrollTop) {topBar.style.transform = 'translateY(-100%)';topBar.style.opacity = '0';}else{if (scrollTop === 0) {topBar.style.transform = 'translateY(0)';topBar.style.opacity = '1';}else{topBar.style.transform = 'translateY(0)';topBar.style.opacity = '1';}}lastScrollTop = scrollTop;});document.getElementById('hamburger').addEventListener('click', function() {var navMenu = document.getElementById('navMenu');navMenu.classList.toggle('show');});

// JavaScript to handle the lightbox effect

// Get elements
const thumbnail = document.getElementById('thumbnail');
const thumbnail2 = document.getElementById('thumbnail2');
const thumbnail3 = document.getElementById('thumbnail3');
const thumbnail4 = document.getElementById('thumbnail4');
const thumbnail5 = document.getElementById('thumbnail5');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const close = document.getElementById('close');

// Show the lightbox when the thumbnail is clicked
thumbnail.addEventListener('click', function() {
    lightbox.style.display = 'block';
    lightboxImg.src = this.src;
     // Add animation for the transition
     lightboxImg.style.transform = 'scale(0.1)';
     setTimeout(() => {
         lightboxImg.style.transform = 'scale(1)';
     })}, 10);
thumbnail2.addEventListener('click', function() {
    lightbox.style.display = 'block';
    lightboxImg.src = this.src;
    lightboxImg.style.transform = 'scale(0.1)';
    setTimeout(() => {
        lightboxImg.style.transform = 'scale(1)';
    })}, 10);
thumbnail3.addEventListener('click', function() {
    lightbox.style.display = 'block';
    lightboxImg.src = this.src;
    lightboxImg.style.transform = 'scale(0.1)';
    setTimeout(() => {
        lightboxImg.style.transform = 'scale(1)';
    })}, 10);
thumbnail4.addEventListener('click', function() {
    lightbox.style.display = 'block';
    lightboxImg.src = this.src;
    lightboxImg.style.transform = 'scale(0.1)';
    setTimeout(() => {
        lightboxImg.style.transform = 'scale(1)';
    })}, 10);
thumbnail5.addEventListener('click', function() {
    lightbox.style.display = 'block';
    lightboxImg.src = this.src;
    lightboxImg.style.transform = 'scale(0.1)';
    setTimeout(() => {
        lightboxImg.style.transform = 'scale(1)';
    })}, 10);
// Hide the lightbox when the close button is clicked
close.addEventListener('click', function() {
    lightbox.style.display = 'none';
});

// Hide the lightbox when clicking outside the image
lightbox.addEventListener('click', function(event) {
    if (event.target === lightbox) {
        lightbox.style.display = 'none';
    }
});
