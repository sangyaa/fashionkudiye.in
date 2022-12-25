// bio
document.getElementById("bioD").innerHTML = 
`<p>Premium Rayon sleeveless gown with lining inside in tier pattern with flair paired up with beautiful printed shrug..
With real mirror work and fancy tussels</p>
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
document.getElementById('pp').innerHTML = '725.00';
document.getElementById('capId').innerHTML = 'Red sleeveless gown with lining inside with real mirror look';

// images
let imgF1 = "m.jpg";
let imgF2 = "2.jpg";
let imgF3 = "3.jpg";
let imgF4 = "4.jpg";

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

</figure>`