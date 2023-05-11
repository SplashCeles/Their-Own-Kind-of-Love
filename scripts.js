const images = ['images/Their_Own_Kind_of_Love_p1.png','images/Their_Own_Kind_of_Love_p2.png',];
let index = 0;

window.addEventListener('load', () => {
    document.addEventListener('click', () => {
        next_img();
    }); 
    document.addEventListener('keyup', event => {
        if (event.code === 'Space') {
            next_img();
        }
    });
    images.forEach(preload_img);
});

function next_img(){
    if (index < images.length-1) index++;
    else index = 0;
    document.getElementById('img').src = images[index];
}

function preload_img(img_path){
    console.log(img_path);
    let img = new Image();
    img.src = img_path;
}
