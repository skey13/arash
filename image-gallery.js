var indevalue = 0;

const slideer = () => {
   var x;
   setTimeout(slideer , 2500);
   const img = document.querySelectorAll(".img-gallery");

   for(x = 0; x < img.length; x++) {
    img[x].style.display = 'none';
   };
   indevalue++;

   if(indevalue > img.length) {indevalue = 1};
   img[indevalue - 1].style.display = 'block';
}

slideer();