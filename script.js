console.log('Hola');
const nextBtn = document.querySelector('#next');
const prevBtn = document.querySelector('#prev');
const slider = document.querySelector('.slider');
let firstSlide;
let lastSlide;

let projects = [
    {
        title: "Project 1",
        type: "Website",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
        image: './images/slide-1.jpg'
    },
    {
        title: "Project 2",
        type: "App",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
        image: './images/slide-2.jpg'
    },
    {
        title: "Project 3",
        type: "Game",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
        image: './images/slide-3.jpg'
    }
];

projects.forEach(({ title, type, description, image }, i) => {
    const slide = document.createElement('div');
    slide.classList.add('slider_slide');
    slide.style.backgroundImage = "url('" + image + "')";
    if (i == 0) {
        firstSlide = slide;

        slide.classList.add('active');
    } else if (i + 1 == projects.length) {
        lastSlide = slide;
    }

    const slideContent = document.createElement('div');
    slideContent.classList.add('slider_content');

    const contentTitle = document.createElement('h3');
    contentTitle.classList.add('slider_title');
    contentTitle.textContent = title;

    const contentType = document.createElement('span');
    contentType.textContent = type;

    const contentDescription = document.createElement('div');
    contentDescription.classList.add('slider_desc');
    contentDescription.textContent = description;


    contentTitle.appendChild(contentType);
    slideContent.appendChild(contentTitle);
    slideContent.appendChild(contentDescription);
    slide.appendChild(slideContent);

    
    slider.appendChild(slide);
});

nextBtn.addEventListener('click', () => {
    const activeSlide = document.querySelector('.slider_slide.active');
    let nextSibling = activeSlide.nextElementSibling;

    if (nextSibling == null) {
        nextSibling = firstSlide;
    }

    if (nextSibling.classList.contains('slider_slide')) {
        activeSlide.classList.remove('active');
        nextSibling.classList.add('active');
    }
});

prevBtn.addEventListener('click', () => {
    const activeSlide = document.querySelector('.slider_slide.active');
    let nextSibling = activeSlide.previousElementSibling;

    if (nextSibling == null || !nextSibling.classList.contains('slider_slide')) {
        nextSibling = lastSlide;
    }

    if (nextSibling.classList.contains('slider_slide')) {
        activeSlide.classList.remove('active');
        nextSibling.classList.add('active');
    }
})