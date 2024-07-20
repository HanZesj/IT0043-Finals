document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('#nav-tabs a');
    const bannerText = document.querySelector('#banner-text');
    const subText = document.querySelector('#sub-text');
    const headerText = document.querySelector('.header-text-section');
    const banner = document.querySelector('#banner');
    const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, a');

    navLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.classList.add('hovered');
        });
        link.addEventListener('mouseout', () => {
            link.classList.remove('hovered');
        });
    });

    window.addEventListener('load', () => {
        bannerText.classList.add('fade-in');
        subText.classList.add('fade-in');
    });

    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;

        if (scrollPosition > 50) {
            headerText.classList.add('slide-in');
        } else {
            headerText.classList.remove('slide-in');
        }

        document.body.style.backgroundColor = scrollPosition > 100 ? '#292929' : '';
    });

    banner.addEventListener('mouseover', function() {
        this.style.backgroundImage = 'linear-gradient(to right, #3e2b22, #191818)';
    });

    banner.addEventListener('mouseout', function() {
        this.style.backgroundImage = 'url(\'/images/1.png\')';
    });

    bannerText.addEventListener('click', function() {
        this.style.fontSize = '5em';
    });

    function addFadeInAnimation() {
        this.classList.add('fade-in');
    }

    textElements.forEach(element => {
        element.addEventListener('mouseover', addFadeInAnimation);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.body.style.opacity = 0;
    document.body.style.transition = 'opacity 2s';
    window.addEventListener('load', () => {
        document.body.style.opacity = 1;
    });

    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.href;
            document.body.style.opacity = 0;
            setTimeout(() => {
                window.location.href = href;
            }, 2000);
        });
    });
});

function toggleNav() {
    var sidebar = document.getElementById("nav-sidebar");
    if (sidebar.style.left === "-250px") {
        sidebar.style.left = "0";
    } else {
        sidebar.style.left = "-250px";
    }
}
