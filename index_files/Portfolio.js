// Scroll animations
const sections = document.querySelectorAll('.project, .skills li, .about');

function checkVisibility() {
    const triggerBottom = window.innerHeight * 0.85;
    sections.forEach(section => {
        const top = section.getBoundingClientRect().top;
        if(top < triggerBottom) {
            section.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', checkVisibility);
checkVisibility();

// Auto-scroll project sliders
const sliders = document.querySelectorAll('.project-slider');

sliders.forEach(slider => {
    let scrollAmount = 0;
    setInterval(() => {
        if(scrollAmount >= slider.scrollWidth - slider.clientWidth) {
            scrollAmount = 0;
        } else {
            scrollAmount += 1;
        }
        slider.scrollLeft = scrollAmount;
    }, 20);
});

// Arrow click functionality
const arrows = document.querySelectorAll('.arrow');
arrows.forEach(arrow => {
    arrow.addEventListener('click', function() {
        const slider = arrow.parentElement.querySelector('.project-slider');
        if(arrow.classList.contains('left')) slider.scrollLeft -= 300;
        else slider.scrollLeft += 300;
    });
});
