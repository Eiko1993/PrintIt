const arrowleft = document.querySelector(".arrow_left");
const arrowright = document.querySelector(".arrow_right");
let banner = document.querySelector(".banner_img");
let tagline = document.querySelector(".banner p");
let i = 0;
const dots = document.querySelector(".dots");

const slides = [
	{
		image:"slide1.jpg",
		tagLine:"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		image:"slide2.jpg",
		tagLine:"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		image:"slide3.jpg",
		tagLine:"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		image:"slide4.png",
		tagLine:"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


arrowleft.onclick = move_left();
arrowright.onclick = move_right();



function move_left(i) {
	console.log("gauche");
	arrowleft.addEventListener("click", move_left);
	/**i--;
	if (slides[i=0]){
		banner.src = "./assets/images/slideshow/slide1.jpg"
		tagline.p = "Impressions tous formats <span>en boutique et en ligne</span>"
		}
	if (slides[i=1]){
		banner.src = "./assets/images/slideshow/slide2.jpg"
		tagline.p = "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
		}
	if (slides[i=2]){
		banner.src = "./assets/images/slideshow/slide3.jpg"
		tagline.p = "Grand choix de couleurs <span>de CMJN aux pantones</span>"
		}
	if (slides[i=3]){
		banner.src = "./assets/images/slideshow/slide4.jpg"
		tagline.p = "Autocollants <span>avec découpe laser sur mesure</span>"
		}
	}*/



}

function move_right(i) {
console.log("droite");
arrowright.addEventListener("click", move_right);
	/**i++;
	if (slides[i=0]){
		banner.src = "./assets/images/slideshow/slide1.jpg"
		tagline.p = "Impressions tous formats <span>en boutique et en ligne</span>"
		}
	if (slides[i=1]){
		banner.src = "./assets/images/slideshow/slide2.jpg"
		tagline.p = "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
		}
	if (slides[i=2]){
		banner.src = "./assets/images/slideshow/slide3.jpg"
		tagline.p = "Grand choix de couleurs <span>de CMJN aux pantones</span>"
		}
	if (slides[i=3]){
		banner.src = "./assets/images/slideshow/slide4.jpg"
		tagline.p = "Autocollants <span>avec découpe laser sur mesure</span>"
		}
	}*/
}


