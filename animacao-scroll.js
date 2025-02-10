const observerH1 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const observerCard = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-dois');
        } else {
            entry.target.classList.remove('show-dois');
        }
    });
});

const observerImg = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-tres');
        } else {
            entry.target.classList.remove('show-tres');
        }
    });
});

const h1 = document.querySelectorAll('h1');
const card = document.querySelectorAll('.card');
const img = document.querySelectorAll('img')

h1.forEach((element) => observerH1.observe(element));
card.forEach((element) => observerCard.observe(element));
img.forEach( (element) => observerImg.observe(element) )