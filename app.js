// const questions = document.getElementsByClassName('question');
// console.log(questions);
// const questions = document.getElementsByTagName('li');
// console.log(questions);
// const question = document.querySelectorAll('ul li');
// console.log(questions);
// const arrow = document.selectElementById('arrowDown');
// console.log(arrow);

// const question1 = document.querySelector('question1')
// question1.style.backgroundColor='red';
// question1.style.color='#6dff00';

const slides = document.querySelectorAll('.slide');
        let currentSlide = 0;

        const prevButton = document.getElementById('prevButton');
        const nextButton = document.getElementById('nextButton');
        function updateSlide() {
            slides.forEach((slide, index) => {
                slide.classList.toggle('active', index === currentSlide);
            });
        }
        prevButton.addEventListener('click', () => {
            if (currentSlide > 0) {
                currentSlide--;
                updateSlide();
            }
        });
        nextButton.addEventListener('click', () => {
            if (currentSlide < slides.length - 1) {
                currentSlide++;
                updateSlide();
            }
        });

         // Initial update
         updateSlide();