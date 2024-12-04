
// Cambio de cantidad de articulos ingresado por el usuario.
let minusBtn = document.querySelector('.input__minus');
let plusBtn = document.querySelector('.input__plus');
let userInput = document.querySelector('.input__number');

let userInputNumber=0;

plusBtn.addEventListener("click", ()=> {
    userInputNumber++;
    userInput.value = userInputNumber;
    console.log(userInputNumber)
});

minusBtn.addEventListener('click', ()=> {
    userInputNumber--;
    if(userInputNumber <= 0) {
        userInputNumber = 0;
    }
    userInput.value = userInputNumber;
    console.log(userInputNumber)
});
// Agregar el total de productos al carrito cuando se preciona el boron ADD TO CART

const addToCartBtn=document.querySelector('.details__button');
let cartNotification=document.querySelector('.header__cart--notification');
let lastValue = parseInt(cartNotification.innerText)

addToCartBtn.addEventListener('click', ()=> {

    
    lastValue = lastValue+userInputNumber;

    cartNotification.innerText=lastValue;
    cartNotification.style.display='block';
    drawProductInModal();
    

});

// Mostrar el modal con el detalle del carrito
const cartIconBtn=document.querySelector(".header__cart");
const cartModal=document.querySelector(".cart-modal");
//let priceModal = document.querySelector(".cart-modal__price");
const productContainer=document.querySelector(".cart-modal__chekout-container");

cartIconBtn.addEventListener("click", ()=> {
    //cartModal.style.display="block";
    cartModal.classList.toggle('show');
    // priceModal.innerHTML=`$125.00 x ${lastValue} <span>$${lastValue*125}</span>`;
   if(lastValue == 0) {
    productContainer.innerHTML='<p class="cart-empty">Your cart is Empty </p>';
   }else{
     drawProductInModal();
   }
})

//Borrar el contenido del carrito
function deleteProduct() {
    const deleteproductBtn=document.querySelector(".cart-modal__delete");

    deleteproductBtn.addEventListener("click", ()=> {
        productContainer.innerHTML='<p class="cart-empty">Your cart is Empty </p>';
        lastValue=0;
        cartNotification.innerText=lastValue;
});
    
}
//cambiar imagenes cuando se preciones botones flecha.
let imageContainer=document.querySelector(".gallery__image-container");
const previusGalleryBtn=document.querySelector(".gallery__previus");
const nextGalleryBtn=document.querySelector(".gallery__next");
let imgIndex=1;

nextGalleryBtn.addEventListener('click', ()=> {
    changeNextImage(imageContainer);
});

previusGalleryBtn.addEventListener('click', ()=> {
    changepreviusImage(imageContainer);
});

//mostar el modal de imagenes cuando hago click en la imagen principal


// Cambiar imagen desktop

const modalGalleryDesk=document.querySelector ('.modal-gallery__backgound ');
const modalGalleryImgDesk=document.querySelector ('.modal-gallery__image-container');

///Destop cambiar de imagenes
let thumbnailImg1Float=document.getElementById('m1');
let thumbnailImg2Float=document.getElementById('m2');
let thumbnailImg3Float=document.getElementById('m3');
let thumbnailImg4Float=document.getElementById('m4');

thumbnailImg1Float.addEventListener("click",()=> {
    console.log("Nueva imagen");
    modalGalleryImgDesk.style.backgroundImage="url('./images/image-product-1.jpg') ";
})
thumbnailImg2Float.addEventListener("click",()=> {
    console.log("Nueva imagen");
    modalGalleryImgDesk.style.backgroundImage="url('./images/image-product-2.jpg') ";
    
})
thumbnailImg3Float.addEventListener("click",()=> {
    console.log("Nueva imagen");
    modalGalleryImgDesk.style.backgroundImage="url('./images/image-product-3.jpg') ";
    
})
thumbnailImg4Float.addEventListener("click",()=> {
    console.log("Nueva imagen");
    modalGalleryImgDesk.style.backgroundImage="url('./images/image-product-4.jpg') ";
    
})
//--final destop
// galleryImageContainer.addEventListener("click", ()=> {
//     modalGalleryDesk.style.display="none";
// })


const desktopBtnPrevius=document.querySelector('.modal-gallery__previus');
const desktopBtnNext=document.querySelector('.modal-gallery__next');
const desktopBtnClose=document.querySelector('.modal-gallery__close');


desktopBtnClose.addEventListener("click", ()=> {
    modalGalleryDesk.style.display="none";
})

imageContainer.addEventListener("click",()=> {
    modalGalleryDesk.style.display="block";
});

desktopBtnNext.addEventListener("click",()=> {
    changeNextImage(modalGalleryImgDesk);
});
desktopBtnPrevius.addEventListener("click",()=> {
    changeNextImage(modalGalleryImgDesk);
});

// Cambiar imagen desktop backGound

const galleryImageContainer=document.querySelector('.gallery__image-container');
 let thumbnailImg1=document.getElementById('1');
 let thumbnailImg2=document.getElementById('2');
 let thumbnailImg3=document.getElementById('3');
 let thumbnailImg4=document.getElementById('4');

 thumbnailImg1.addEventListener("click",()=> {
    console.log("Nueva imagen");
  galleryImageContainer.style.backgroundImage="url('./images/image-product-1.jpg') ";
})
thumbnailImg2.addEventListener("click",()=> {
    console.log("Nueva imagen");
    galleryImageContainer.style.backgroundImage="url('./images/image-product-2.jpg') ";
    
})
thumbnailImg3.addEventListener("click",()=> {
    console.log("Nueva imagen");
    galleryImageContainer.style.backgroundImage="url('./images/image-product-3.jpg') ";
    
})
thumbnailImg4.addEventListener("click",()=> {
    console.log("Nueva imagen");
    galleryImageContainer.style.backgroundImage="url('./images/image-product-4.jpg') ";
    
})


//Menu Hamburgesa.

const menuHamburguer = document.querySelector(".header__menu");
const menuDisplay=document.querySelector(".modal-navbar__background");
const menuCancel= document.querySelector(".modal-navbar__close-icon");

menuHamburguer.addEventListener('click', ()=> {
    menuDisplay.style.display="block";
})

menuCancel.addEventListener("click", ()=> {
    menuDisplay.style.display="none";
})

//----------Funciones----------
function drawProductInModal() {
    productContainer.innerHTML=`
    <div class="cart-modal__details-container">
        <img class="cart-modal__image" src="./images/image-product-1-thumbnail.jpg" alt="">
        <div>
        <p class="cart-modal__product">Autumn Limited Edition...</p>
        <p class="cart-modal__price">$125.00 x 3 <span>$375.00</span></p>
        </div>
        <img class="cart-modal__delete" src="./images/icon-delete.svg" alt="">
    </div>
    <button class="cart-modal__chekount">Checkout</button>`
    deleteProduct()
    let priceModal = document.querySelector(".cart-modal__price");
    priceModal.innerHTML=`$125.00 x ${lastValue} <span>$${lastValue*125}</span>`;
  
}

// function  disanbleImg() {
//     return
//         modalGalleryDesk.style.display="block";
// }



function changeNextImage(imgContainer){
    if(imgIndex===4){
        imgIndex=1;
    }
    else{
        imgIndex++;
    }
    
    imgContainer.style.backgroundImage=`url('../images/image-product-${imgIndex}.jpg')`
}

function changepreviusImage(imgContainer){
    if(imgIndex===1){
        imgIndex=4;
    }
    else{
        imgIndex--;
    }
    
    imgContainer.style.backgroundImage=`url('../images/image-product-${imgIndex}.jpg')`
}





