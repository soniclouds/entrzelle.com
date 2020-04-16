// FULL SIZE

import promo_band_1 from '../../assets/img/photos/gallery/full/promo_band_1.jpg';
import promo_band_2 from '../../assets/img/photos/gallery/full/promo_band_2.jpg';


// THUMBNAILS (200px)

import _promo_band_1 from '../../assets/img/photos/gallery/thumbs/200/promo_band_1.jpg';
import _promo_band_2 from '../../assets/img/photos/gallery/thumbs/200/promo_band_2.jpg';



const galleryPhotos = [
        {   
            id: '_ph0',
            src: {
                thumb: _promo_band_1,
                full: promo_band_1
            },
            alt: "Entrzelle promo band photo",
            caption: "photo by Rico JC",
            
        },
        {
            id: '_ph1',
            src: {
                thumb: _promo_band_2,
                full: promo_band_2
            },
            alt: "Entrzelle promo band photo",
            caption: "photo by Rico JC",
        },
    ]
export default galleryPhotos;