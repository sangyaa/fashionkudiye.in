// bio
document.getElementById("bioD").innerHTML =

`
<p>Heavy embroidery Work kurti with pant and dupatta -In very fine quality Rayon</p>
<p><strong>FABRIC DETAIL</strong></p>
<p>Fabric: *Rayon*</p>
<p>Product: *Kurti + Pant +cotton Dupatta* </p>
<p>length *Kurti "46" Pant "38"*</p>
<p>Work: *Mirror  Work*</p>
<p>Type: *Fully stitched*</p>
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

// caption
document.getElementById('capId').innerHTML = 'Blue rayon heavy embroidery work kurti with pant & dupatta';
// price
document.getElementById('pp').innerHTML = '854.00';

// images
let imgF1 = "/fashionkudiye.in/images/Suit/pr18/m.jpg";
let imgF2 = "/fashionkudiye.in/images/Suit/pr18/m2.jpg";
let imgF3 = "/fashionkudiye.in/images/Suit/pr18/m3.jpg";
let imgF4 = "/fashionkudiye.in/images/Suit/pr18/m4.jpg";
let imgF5 = "/fashionkudiye.in/images/Suit/pr18/m5.jpg";
let imgF6 = "/fashionkudiye.in/images/Suit/pr18/m6.jpg";

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