export function scrollToWord(el) {
    // altura del menu top nav
    const navH = document.querySelector("nav").getBoundingClientRect().height
    const posY0 = document.querySelector("body").getBoundingClientRect().top
    //obtenemos la posición Y de elemento el del DOM dentro de la página. Ejemplo, si estuviera arriba de todo la posición sería 0, si estuviera a 100 pixeles del comienzo de la página, la posición sería 100. Independiente del scroll de la página
    var posY = el.getBoundingClientRect().top; // sale negativo muchas veces por el scroll de página, no queremos eso
    // hemos de restarle el scroll de la página (tiene que quedar un numero positivo. el valor de posY )
    posY = posY - posY0 - navH * 2.1;
    console.log('posY', posY)
    // nos movemos a la posición posY
    window.scrollTo({
        top: posY,
        behavior: 'smooth'
    })
}


export function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }