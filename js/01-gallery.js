import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector('.gallery') 

const makeGallery = galleryItems => {
   
    return galleryItems.map(item => {
        const galleryItem = document.createElement('div');
        galleryItem.classList.add('gallery__item')

        const galleryLink = document.createElement('a');
        galleryLink.href = (item.original);
        galleryLink.classList.add = ('.gallery__link');
        galleryItem.appendChild(galleryLink);
        
        const galleryImg = document.createElement('img');
        galleryImg.classList.add('gallery__image');
        galleryImg.src = (item.preview);
        galleryImg.alt = (item.description);
        galleryImg.setAttribute ('data-source', item.original);
        galleryLink.appendChild(galleryImg);
        
        
        
        galleryRef.append(galleryItem);
        return galleryItem;
        
    });
}
console.log(basicLightbox);
makeGallery(galleryItems);

galleryRef.addEventListener('click', onGalleryClick);

function onGalleryClick(event) {
    event.preventDefault();
    if (event.target.classList.contains('gallery__image')) {
        const imgLarge = event.target.dataset.source;
        console.log(imgLarge);

        let modalWindow = basicLightbox.create(`
       
        <img
        src=${imgLarge} 
        />
      `);

        modalWindow.show();

//       const instance = basicLightbox.create(`
//     <div class="modal">
//         <p>
//             Your first lightbox with just a few lines of code.
//             Yes, it's really that simple.
//         </p>
//     </div>
// `)

// instance.show()  
        
        
        
       
    }

}


