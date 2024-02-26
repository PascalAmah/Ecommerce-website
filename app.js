// Floating NavBar
function floatBar() {
    const headerBar = document.querySelector('#header');
    
    document.addEventListener('scroll', () => {
        // Check if the screen width is greater than a specific value (e.g., 798 pixels)
        if (window.innerWidth > 824) {
            if (window.top.scrollY > 19) {
                headerBar.style.backgroundColor = 'transparent';
                headerBar.classList.add('header-scroll');
            } else {
                headerBar.style.backgroundColor = '#fff';
                headerBar.classList.remove('header-scroll');
                headerBar.style.transition = '.5s ease';
            }
        }
    });
}
    
floatBar();

// Navbar toggle
function navbarToggle() {
    const bar = document.querySelector('#bar');
    const close = document.querySelector('#close');
    const nav = document.querySelector('#navbar');

    if (bar) {
        bar.addEventListener('click', () => {
            nav.classList.add('active');
        })
    }

    if (close) {
        close.addEventListener('click', () => {
            nav.classList.remove('active');
        })
    }
}

navbarToggle();