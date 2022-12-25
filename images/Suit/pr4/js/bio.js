// bio

document.getElementById("bioD").innerHTML = 
`<p>Launching New Outfit for Festival wear Chickenkari Embroidered Kurti pant with Beautiful sequence Zardori work & Dupatta  Cutwork Embroidery Border embellished with Beautiful Handwork</p>
<p><strong>FABRIC DETAIL</strong></p>
<p>Kurti & Pant - Rayon</p>
<p>Dupatta length - 2.3M </p>
<p>Replacement ✅&nbsp; Return ✅ &nbsp; Cancellation ✅</p>
<p>(Make sure to make a video while unpackaging)</p>
Select Size: <br><br>
<select name="Sizes" id="sss">
    <option value="haha1">Sizes</option>
    <option value="haha">38 M</option>
    <option value="haha">40 L</option>
    <option value="haha">42 XL</option>
    <option value="haha">44 XXL</option>
</select>`;

// price
document.getElementById('pp').innerHTML = '1674.00';

// images
let imgF1 = "Screenshot 2022-10-23 152049.jpg";
let imgF2 = "video_2022-10-23_15-16-03.mp4";
imgV = "vdo.jpg";
let imgF3 = "photo_2022-10-18_23-32-37 (2).jpg";
let imgF4 = "photo_2022-10-18_23-32-42.jpg";
let imgF5 = "photo_2022-10-18_23-32-44 (2).jpg";


let innerr = document.getElementById('viw').innerHTML = `<figure class="woocommerce-product-gallery__wrapper">
    <div data-thumb="${imgF1}" data-thumb-alt
        class="woocommerce-product-gallery__image"><a
            href="${imgF1}">
            <img width="600"
                height="883" src="${imgF1}"
                class="wp-post-image" alt loading="lazy" title="black-1"
                data-caption data-src="${imgF1}"
                data-large_image="${imgF1}"
                data-large_image_width="696"
                data-large_image_height="1024"
                srcset="${imgF1} 600w, ${imgF1} 204w, ${imgF1}"
                sizes="(max-width: 600px) 100vw, 600px"></a></div>

        <div data-thumb="${imgV}" data-thumb-alt class="woocommerce-product-gallery__image"><a>
        <video controls>
        <source src="${imgF2}" type="video/mp4">
      Your browser does not support the video tag.
      </video>
        </a></div>


    <div data-thumb="${imgF3}" data-thumb-alt
        class="woocommerce-product-gallery__image"><a
            href="${imgF3}"><img width="600"
                height="883" src="${imgF3}"
                class="wp-post-image" alt loading="lazy" title="black-1"
                data-caption data-src="${imgF3}"
                data-large_image="${imgF3}"
                data-large_image_width="696"
                data-large_image_height="1024"
                srcset="${imgF3} 600w, ${imgF3} 204w, ${imgF3} 696w"
                sizes="(max-width: 600px) 100vw, 600px"></a></div>
                
    <div data-thumb="${imgF4}" data-thumb-alt
        class="woocommerce-product-gallery__image"><a
            href="${imgF4}"><img width="600"
                height="883" src="${imgF4}"
                class="wp-post-image" alt loading="lazy" title="black-1"
                data-caption
                data-src="${imgF4}"
                data-large_image="${imgF4}"
                data-large_image_width="696"
                data-large_image_height="1024"
                srcset="${imgF4} 600w, ${imgF4} 204w, ${imgF4} 696w"
                sizes="(max-width: 600px) 100vw, 600px"></a></div>

    <div data-thumb="${imgF5}" data-thumb-alt
        class="woocommerce-product-gallery__image"><a
            href="${imgF5}"><img width="600"
                height="883" src="${imgF5}"
                class="wp-post-image" alt loading="lazy" title="black-1"
                data-caption data-src="${imgF5}"
                data-large_image="${imgF5}"
                data-large_image_width="696"
                data-large_image_height="1024"
                srcset="${imgF5} 600w, ${imgF5} 204w, ${imgF5} 696w"
                sizes="(max-width: 600px) 100vw, 600px"></a></div>


</figure>`