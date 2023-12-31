// DOM
const swiper = document.querySelector('#swiper');
const like = document.querySelector('#like');
const dislike = document.querySelector('#dislike');

// constants
// const urls = [
//     'https://i.imgur.com/oPj4A8u.jpg',
//     'https://i.imgur.com/OckVkRo.jpg',
//     'https://i.imgur.com/Al4nSX8.jpg',
//     'https://i.imgur.com/Q9WPlWA.jpg',
//     'https://i.imgur.com/MWAcQRM.jpg',
//     'https://i.imgur.com/H07Fxdh.jpg'
// ];
const urls = [
    '../img/profile2.jpg',
    '../img/profile3.jpg',
    '../img/profile4.jpg',
    '../img/profile5.jpg',
    '../img/profile6.jpg',
];

// variables
let cardCount = 0;

// functions
function appendNewCard() {
    const card = new Card({
        imageUrl: urls[cardCount % 5],
        onDismiss: appendNewCard,
        onLike: () => {
            like.style.animationPlayState = 'running';
            like.classList.toggle('trigger');
        },
        onDislike: () => {
            dislike.style.animationPlayState = 'running';
            dislike.classList.toggle('trigger');
        }
    });
    swiper.append(card.element);
    cardCount++;

    const cards = swiper.querySelectorAll('.card:not(.dismissing)');
    cards.forEach((card, index) => {
        card.style.setProperty('--i', index);
    });
}

// first 5 cards
for (let i = 0; i < 5; i++) {
    appendNewCard();
}

