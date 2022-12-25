// bio
document.getElementById("bioD").innerHTML = 
`<p>This wedding  session wear the party look full flair kurti pant dupatta</p>
<p><strong>FABRIC DETAIL</strong></p>
<p>Fabric- cotton anarkali Kurti printed pant with gotta work dupatta</p>
<p>lengtt of kurti - 47</p>
<p>Full gota work</p>
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
document.getElementById('capId').innerHTML = 'Cool White Colour Kurti set';
// price
document.getElementById('pp').innerHTML = '1075.00';

// images
let imgF1 = "m.jpg";
let imgF2 = "photo_2022-11-27_15-43-39.jpg";

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
</figure>`