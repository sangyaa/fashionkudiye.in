function hh(){
var count = document.querySelectorAll(".card");
document.querySelector('.prTl').innerText = count.length;
document.querySelector('.prTl2').innerText = count.length;
}
setTimeout(hh,100);


const products = document.querySelector('.productHolder');

function createCard([location,category,caption,rating,img,price]){
    let code = 
`<div class="card" onclick="function redirect(){window.location.href='${location}'}redirect();">
    <div class="cardText">
        <p class="categoryText">${category}</p>
        <aa>
        <h2 class = "caption">${caption}</h2>
        </aa>
        <h5>${rating}</h5>
        </div>
    <img src="${img}" alt="products">
    <p class="priceText">${price}</p>
    </div>`
    
    // += will add in innerHTML.. not replace
    products.innerHTML += code;
    localStorage.setItem('codee', caption);
}


suit1 = [
    "/fashionkudiye.in/images/Suit/pr10/s_10.html",
    "Suits Collection",
    "3 pc Suit Collection [Kurti + sharara + Dupatta]<tag style='display:none;'>green colour with</tag>",
    "⭐⭐⭐⭐⭐ <bb style='font-size:14px;background-color:#B12720;color:#fff;padding:3px 10px 3px 10px;'>Deal of the Day</bb>",
    "/fashionkudiye.in/images/suit/pr10/m.jpg",
    "₹879.00  <font color='red' size='2px'><s>₹1200</s></font> " // add 70
];
suit2 = [
    "/fashionkudiye.in/images/Suit/pr1/s_1.html",
    "Suits Collection",
    "Red kurti with with pant & cotton dupatta",
    "⭐⭐⭐⭐",
    "/fashionkudiye.in/images/suit/pr1/3pcsSuit2.jpeg",
    "₹820.00" // add 70
];
suit3 = [
    "/fashionkudiye.in/images/Suit/pr20/s_20.html",
    "Suits Collection",
    "Blue Procin Printed Cotton Fabric Kurti With Pant and Kotta doriya dupatta<tag style='display:none;'>3XL 4XL 5XL 6XL Beautiful Procin Printed Cotton Fabric Kurti Worked With Tubelight Hand Work On Yoke Paired With Printed Pant And Tai Dai Kotta Doriya Dupatta 2 colours eavy handwork</tag>",
    "⭐⭐⭐⭐ <bb style='font-size:14px;background-color:#CC5500;color:#fff;padding:3px 10px 3px 10px;'>Quality Assured</bb>",
    "/fashionkudiye.in/images/Suit/pr20/b1.jpeg",
    "₹920.00 <font color='red' size='2px'><s>₹1120</s></font>" // add 75
];
suit4 = [
    "/fashionkudiye.in/images/Suit/pr18/s_18.html",
    "Suits Collection",
    "Blue rayon heavy embroidery work kurti with pant & dupatta",
    "⭐⭐⭐⭐",
    "/fashionkudiye.in/images/Suit/pr18/m3.jpg",
    "₹854.00 <font color='red' size='2px'><s>₹999</s></font>"
];
suit5 = [
    "/fashionkudiye.in/images/Suit/pr2/s_2.html",
    "Suits Collection",
    "Red theme Rayon Kurti, pant with dupatta",
    "⭐⭐⭐⭐",
    "/fashionkudiye.in/images/Suit/pr2/3.jpg",
    "₹870.00"
];
suit6 = [
    "/fashionkudiye.in/images/Suit/pr11/s_11.html",
    "Suits Collection",
    " New kota Doriya 3 piece greyish suit",
    "⭐⭐⭐⭐",
    "/fashionkudiye.in/images/Suit/pr11/main.jpg",
    "₹744.00"
];
suit7 = [
    "/fashionkudiye.in/images/Suit/pr3/s_3.html",
    "Suits Collection",
    "Pure Cotton 3 pc blue color suit",
    "⭐⭐⭐⭐⭐ <bb style='font-size:14px;background-color:#CC5500;color:#fff;padding:3px 10px 3px 10px;'>Quality Assured</bb>",
    "/fashionkudiye.in/images/Suit/pr3/photo_2022-10-09_20-45-14.jpg",
    "₹1150.00"
];
suit8 = [
    "/fashionkudiye.in/images/Suit/pr7/s_7.html",
    "Suits Collection",
    "Skyish Blue fabric kurta with beautiful thread work with pant and dupatta",
    "⭐⭐⭐⭐",
    "/fashionkudiye.in/images/Suit/pr7/m.jpg",
    "₹744.00"
];
suit9 = [
    "/fashionkudiye.in/images/Suit/pr8/s_8.html",
    "Suits Collection",
    "Party look rayon kurti with gota work",
    "⭐⭐⭐",
    "/fashionkudiye.in/images/Suit/pr8/main.jpg",
    "₹874.00"
];
suit10 = [
    "/fashionkudiye.in/images/Suit/pr6/s_6.html",
    "Suits Collection",
    "Festive Season Red color Organza Suit",
    "⭐⭐⭐⭐⭐<bb style='font-size:14px;background-color:#B12720;color:#fff;padding:3px 10px 3px 10px;'>Trending Hot 🔥</bb>",
    "/fashionkudiye.in/images/Suit/pr6/1.jpg",
    "₹974.00  <font color='red' size='2px'><s>₹1204</s></font>"
];
suit11 = [
    "/fashionkudiye.in/images/Suit/pr17/s_17.html",
    "Suits Collection",
    "Jaipuri Special Floral Maroon colour Kurti Pant & Dupatta",
    "⭐⭐⭐⭐⭐",
    "/fashionkudiye.in/images/Suit/pr17/m2.jpg",
    "₹1074.00"
];
suit12 = [
    "/fashionkudiye.in/images/Suit/pr15/s_15.html",
    "Suits Collection",
    "Cool White Colour Kurti set",
    "⭐⭐⭐⭐",
    "/fashionkudiye.in/images/Suit/pr15/m.jpg",
    "₹1074.00"
];
suit13 = [
    "/fashionkudiye.in/images/Suit/pr16/s_16.html",
    "Suits Collection",
    "Pink Rayon Kurti pant & dupatta",
    "⭐⭐⭐⭐",
    "/fashionkudiye.in/images/Suit/pr16/m.jpg",
    "₹725.00"
];
suit14 = [
    "/fashionkudiye.in/images/Kaftan/pr6/k_6.html",
    "Suits Collection",
    "Dazzling wine kurta 3 piece suit crafted in Rayon",
    "⭐⭐⭐⭐⭐",
    "/fashionkudiye.in/images/Suit/pr19/m.jpg",
    "₹870.00"
];
suit15 = [
    "/fashionkudiye.in/images/Suit/pr20/s_20_.html",
    "Suits Collection",
    "Pink Beautiful Procin Printed Cotton Fabric Kurti With Pant and Kotta doriya dupatta",
    "⭐⭐⭐⭐⭐ <bb style='font-size:14px;background-color:#CC5500;color:#fff;padding:3px 10px 3px 10px;'>Quality Assured</bb>",
    "/fashionkudiye.in/images/Suit/pr20/p1.jpeg",
    "₹920.00 <font color='red' size='2px'><s>₹1120</s></font>"
];


createCard(suit3)
createCard(suit10)
createCard(suit4)
createCard(suit1)
createCard(suit14)
createCard(suit12)
createCard(suit6)
createCard(suit2)
createCard(suit15)
createCard(suit7)
createCard(suit13)
createCard(suit5)
createCard(suit11)
createCard(suit9)
createCard(suit8)