document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('#nav-tabs a');
    const bannerText = document.querySelector('#banner-text');
    const subText = document.querySelector('#sub-text');
    const headerText = document.querySelector('.header-text-section');
    const banner = document.querySelector('#banner');
    const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, a');

    // Add animation to navigation links
    navLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.classList.add('hovered');
        });
        link.addEventListener('mouseout', () => {
            link.classList.remove('hovered');
        });
    });

    // Fade-in effect for banner text and sub text
    window.addEventListener('load', () => {
        bannerText.classList.add('fade-in');
        subText.classList.add('fade-in');
    });

    // Slide-in effect for header text and background color change on scroll
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;

        if (scrollPosition > 50) {
            headerText.classList.add('slide-in');
        } else {
            headerText.classList.remove('slide-in');
        }

        // Change body background color based on scroll position
        document.body.style.backgroundColor = scrollPosition > 100 ? '#292929' : ''; // Example threshold
    });

    // Change #banner background on mouse hover
    banner.addEventListener('mouseover', function() {
        this.style.backgroundImage = 'linear-gradient(to right, #3e2b22, #191818)';
    });

    banner.addEventListener('mouseout', function() {
        this.style.backgroundImage = 'url(\'/images/1.png\')';
    });

    // Enlarge #banner-text font size on click
    bannerText.addEventListener('click', function() {
        this.style.fontSize = '5em'; // Increase font size
        // Ensure to reset to original size or toggle based on your preference
    });

    // Fade-in effect on text elements on mouseover
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

    // Attempt to add a fade-out effect when leaving the page
    // Note: This might not always work due to the quick unload process
    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent the link from navigating immediately
            const href = this.href;
            document.body.style.opacity = 0;
            setTimeout(() => {
                window.location.href = href;
            }, 2000); // Adjust the timeout to match the transition time
        });
    });
});