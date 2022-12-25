// bio
document.getElementById("bioD").innerHTML = 
`<p>Beautiful outfit in three piece suit.. cool print </p>
<p><strong>FABRIC DETAIL</strong></p>
<p>Premium Quality of cotton</p>
<p>Pure cotton pant & full dupatta</p>
<p>Katha & sequence, gota work on yoke.</p>
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

document.getElementById('capId').innerHTML = 'Pure Cotton 3 pc blue color suit';
// price
document.getElementById('pp').innerHTML = '1150.00';

// images
let imgF1 = "photo_2022-10-09_20-45-14.jpg";
let imgF2 = "photo_2022-10-09_20-22-52.jpg";
let imgF3 = "photo_2022-10-09_21-02-42.jpg";
let imgF4 = "photo_2022-10-09_21-03-27.jpg";
let imgV = "video_2022-10-23_11-34-27.mp4";
let imgF6 = "photo_2022-10-09_21-07-37.jpg";

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

    <div data-thumb="${imgF2}" data-thumb-alt
        class="woocommerce-product-gallery__image"><a
            href="${imgF2}"><img width="600"
                height="883" src="${imgF2}"
                class="wp-post-image" alt loading="lazy" title="black-1"
                data-caption data-src="${imgF2}"
                data-large_image="${imgF2}"
                data-large_image_width="696"
                data-large_image_height="1024"
                srcset="${imgF2} 600w, ${imgF2} 204w, ${imgF2} 696w"
                sizes="(max-width: 600px) 100vw, 600px"></a></div>

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
	    
<div data-thumb="${imgF3}" data-thumb-alt
        class="woocommerce-product-gallery__image">
	<video controls>
	<source src=${imgV} type="video/mp4">
	</video>
	</div>

                <div data-thumb="${imgF6}" data-thumb-alt
        class="woocommerce-product-gallery__image"><a
            href="${imgF6}"><img width="600"
                height="883" src="${imgF6}"
                class="wp-post-image" alt loading="lazy" title="black-1"
                data-caption data-src="${imgF6}"
                data-large_image="${imgF6}"
                data-large_image_width="696"
                data-large_image_height="1024"
                srcset="${imgF6} 600w, ${imgF6} 204w, ${imgF6} 696w"
                sizes="(max-width: 600px) 100vw, 600px"></a></div>


</figure>`