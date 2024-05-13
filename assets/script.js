const arrowleft = document.querySelector(".arrow_left");
const arrowright = document.querySelector(".arrow_right");
const banner = document.querySelector(".banner-img");
const tagline = document.querySelector("#banner p");
let i = 0;
const dots = document.querySelector(".dots");

const slides = [
	{
		image:"assets/images/slideshow/slide1.jpg",
		tagLine:"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		image:"assets/images/slideshow/slide2.jpg",
		tagLine:"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		image:"assets/images/slideshow/slide3.jpg",
		tagLine:"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		image:"assets/images/slideshow/slide4.png",
		tagLine:"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

function changeImage(){
	changeDots();
	click_left();
	click_right();
}

changeImage();

function changeDots(){
	for (let n = 0; n < slides.length; n++){
		const dot = document.createElement("div");
		dot.classList.add("dot");
		dots.appendChild(dot);
		if (n == i) {
			dot.classList.add("dot_selected");
		}
	}
}

function click_left(){
arrowleft.addEventListener("click", () => {

	const slidesDots = document.querySelectorAll(".dots .dot");
	slidesDots[i].classList.remove("dot_selected");
	i--;
	if (i < 0)
		{
			i = slides.length - 1;
		}
		banner.src = slides[i].image;
		tagline.innerHTML = slides[i].tagLine;
		slidesDots[i].classList.add("dot_selected");

});
}


function click_right() {
	arrowright.addEventListener("click",() => {
		const slidesDots = document.querySelectorAll(".dots .dot");
		slidesDots[i].classList.remove("dot_selected");
		i++;
		if (i > slides.length - 1)
			{
				i = 0;
			}
			banner.src = slides[i].image;
			tagline.innerHTML = slides[i].tagLine;
			slidesDots[i].classList.add("dot_selected");
	});
}
