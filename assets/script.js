console.log('script chargé');

const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');

arrowLeft.addEventListener('click', function() {
	console.log('Flèche gauche cliquée');
});

arrowRight.addEventListener('click', function() {
	console.log('Flèche droite cliquée');
});

console.log(arrowLeft);
console.log(arrowRight);

const pBanner = document.querySelector('#banner p');
const imgBanner = document.querySelector('#banner img');
const imgBannerSrc = imgBanner.getAttribute('src');
const parentDot = document.querySelector("#banner div");
const spans = [];

for (let i = 0; i < slides.length; i++) {
	spans.push(document.createElement("span"));
	spans[i].classList.add("dot");
	parentDot.appendChild(spans[i]);
}
spans[0].classList.add("dot_selected");
