document.addEventListener('mousemove', function(event) {const footer = document.getElementById('footer');const yOffset = window.innerHeight - event.clientY;if(yOffset < 20){footer.classList.add('show');}else{footer.classList.remove('show');}});let lastScrollTop = 0;const topBar = document.getElementById('topdiv');window.addEventListener('scroll', function() {const scrollTop = window.pageYOffset || document.documentElement.scrollTop;if (scrollTop > lastScrollTop) {topBar.style.transform = 'translateY(-100%)';topBar.style.opacity = '0';}else{if (scrollTop === 0) {topBar.style.transform = 'translateY(0)';topBar.style.opacity = '1';}else{topBar.style.transform = 'translateY(0)';topBar.style.opacity = '1';}}lastScrollTop = scrollTop;});document.getElementById('hamburger').addEventListener('click', function() {var navMenu = document.getElementById('navMenu');navMenu.classList.toggle('show');});