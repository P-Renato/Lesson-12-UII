const input = document.querySelector('input')
input.addEventListener("input", (e)=> {
    document.documentElement.style.setProperty( '--lightness', `${e.target.value}%`);
    document.documentElement.style.setProperty( '--text-lightness', `${100 - e.target.value}%`);
})