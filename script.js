// updated javascript

const css = document.querySelector('h3');
const [color1, color2] = document.querySelectorAll('.color1, .color2')
const body = document.querySelector('#Gradient');

setGradient = () => {
	body.style.background = _linearGradient();
	css.textContent = `${body.style.background};`;
}


_linearGradient = () => {
	return `linear-gradient(to right, ${color1.value}, ${color2.value})`;
}

color1.addEventListener('input', setGradient);

color2.addEventListener('input', setGradient);

// old javascript

// var css = document.querySelector("h3");
// var color1 = document.querySelector(".color1");
// var color2 = document.querySelector(".color2");
// var body = document.getElementById("Gradient");
// 
// function setGradient() {
//    body.style.background = "linear-gradient(to right, "
//      + color1.value
//      + ", "
//      + color2.value 
//      + ")";
// 
//      css.textContent = body.style.background + ";";
// }
// 
// color1.addEventListener("input", setGradient);
// 
// color2.addEventListener("input", setGradient);



