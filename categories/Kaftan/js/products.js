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


kaftan1 = [
    "/fashionkudiye.in/images/Kaftan/bluepr2/pr_2.html",
    "Kaftan Collection",
    "Blue & Purple 2 Colors Kaftan with a premium look<tag style='display:none;'>Wedding special Premium quality. Special launching for parties</tag>",
    "⭐⭐⭐⭐ <bb style='font-size:14px;background-color:#B12720;color:#fff;padding:3px 10px 3px 10px;'>Price drop alert</bb>",
    "/fashionkudiye.in/images/Kaftan/bluepr2/main.jpg",
    "₹459.00  <font color='red' size='2px'><s>₹870</s></font> " // add 70
];
kaftan2 = [
    "/fashionkudiye.in/images/Kaftan/pinkpr1/k_1.html",
    "Kaftan Collection",
    "Pink Cotton kaftan with pant & latkan<tag style='display:none;'>Premium cotton 60'60 kaftan with latkan And cotton pant</tag>",
    "⭐⭐⭐",
    "/fashionkudiye.in/images/Kaftan/pinkpr1/photo_2022-09-06_20-59-39.jpg",
    "₹755.00" // add 70
];
kaftan3 = [
    "/fashionkudiye.in/images/Kaftan/pr3/pr__3.html",
    "Kaftan Collection",
    "Digital print kaftan lining attached inside work detailing on yoke<tag style='display:none;'>Premium Reyon slub digital print* special print kaftan linning attached inside work detailing on yoke full embroidery</tag>",
    "⭐⭐⭐⭐",
    "/fashionkudiye.in/images/Kaftan/pr3/photo_2022-07-14_16-02-12.jpg",
    "₹600.00 <font color='red' size='2px'><s>₹890</s></font>" // add 75
];
kaftan4 = [
    "/fashionkudiye.in/images/Kaftan/pr4/k_4.html",
    "Gowns Collection",
    "New Whitish Chikan work design cotton kaftan<tag style='display:none;'></tag>",
    "⭐⭐⭐⭐",
    "/fashionkudiye.in/images/Kaftan/pr4/m.jpg",
    "₹874.00"
];
kaftan5 = [
    "/fashionkudiye.in/images/Kaftan/pr5/k_5.html",
    "Kaftan Collection",
    "Green & White combination Beautiful Kaftan + Pant<tag style='display:none;'>premium qulaity fully stiched</tag>",
    "⭐⭐⭐⭐⭐",
    "/fashionkudiye.in/images/Kaftan/pr5/m.jpg",
    "₹734.00"
];
kaftan6 = [
    "/fashionkudiye.in/images/Kaftan/pr6/k_6.html",
    "Kaftan Collection",
    "New Premium Badhani kaftan set (Handwork)<tag style='display:none;'>All new bandhani kaftaan set Premium quality Georgette Bandhni kaftan with handwork (Cotton lining attached)</tag>",
    "⭐⭐⭐⭐",
    "/fashionkudiye.in/images/Kaftan/pr6/m.jpg",
    "₹1140.00"
];
kaftan7 = [
    "/fashionkudiye.in/images/Suit/pr3/s_3.html",
    "Suits Collection",
    "Pure Cotton 3 pc blue color suit<tag style='display:none;'></tag>",
    "⭐⭐⭐⭐⭐ <bb style='font-size:14px;background-color:#CC5500;color:#fff;padding:3px 10px 3px 10px;'>Quality Assured</bb>",
    "/fashionkudiye.in/images/Suit/pr3/photo_2022-10-09_20-45-14.jpg",
    "₹1150.00"
];
kaftan8 = [
    "/fashionkudiye.in/images/Suit/pr7/s_7.html",
    "Suits Collection",
    "Skyish Blue fabric kurta with beautiful thread work with pant and dupatta<tag style='display:none;'></tag>",
    "⭐⭐⭐⭐",
    "/fashionkudiye.in/images/Suit/pr7/m.jpg",
    "₹744.00"
];
kaftan9 = [
    "/fashionkudiye.in/images/Suit/pr8/s_8.html",
    "Suits Collection",
    "Party look rayon kurti with gota work<tag style='display:none;'></tag>",
    "⭐⭐⭐",
    "/fashionkudiye.in/images/Suit/pr8/main.jpg",
    "₹874.00"
];
kaftan10 = [
    "/fashionkudiye.in/images/Suit/pr6/s_6.html",
    "Suits Collection",
    "Festive Season Red color Organza Suit<tag style='display:none;'></tag>",
    "⭐⭐⭐⭐⭐<bb style='font-size:14px;background-color:#B12720;color:#fff;padding:3px 10px 3px 10px;'>Trending Hot 🔥</bb>",
    "/fashionkudiye.in/images/Suit/pr6/1.jpg",
    "₹974.00  <font color='red' size='2px'><s>₹1204</s></font>"
];
kaftan11 = [
    "/fashionkudiye.in/images/Suit/pr17/s_17.html",
    "Suits Collection",
    "Jaipuri Special Floral Maroon colour Kurti Pant & Dupatta<tag style='display:none;'></tag>",
    "⭐⭐⭐⭐⭐",
    "/fashionkudiye.in/images/Suit/pr17/m2.jpg",
    "₹1074.00"
];
kaftan12 = [
    "/fashionkudiye.in/images/Suit/pr15/s_15.html",
    "Suits Collection",
    "Cool White Colour Kurti set<tag style='display:none;'></tag>",
    "⭐⭐⭐⭐",
    "/fashionkudiye.in/images/Suit/pr15/m.jpg",
    "₹1074.00"
];
kaftan13 = [
    "/fashionkudiye.in/images/Suit/pr16/s_16.html",
    "Suits Collection",
    "Pink Rayon Kurti pant & dupatta<tag style='display:none;'></tag>",
    "⭐⭐⭐⭐",
    "/fashionkudiye.in/images/Suit/pr16/m.jpg",
    "₹725.00"
];
kaftan14 = [
    "/fashionkudiye.in/images/Kaftan/pr6/k_6.html",
    "Suits Collection",
    "Dazzling wine kurta 3 piece suit crafted in Rayon<tag style='display:none;'></tag>",
    "⭐⭐⭐⭐⭐",
    "/fashionkudiye.in/images/Suit/pr19/m.jpg",
    "₹870.00"
];
kaftan15 = [
    "/fashionkudiye.in/images/Suit/pr20/s_20_.html",
    "Suits Collection",
    "Pink Beautiful Procin Printed Cotton Fabric Kurti With Pant and Kotta doriya dupatta<tag style='display:none;'></tag>",
    "⭐⭐⭐⭐⭐ <bb style='font-size:14px;background-color:#CC5500;color:#fff;padding:3px 10px 3px 10px;'>Quality Assured</bb>",
    "/fashionkudiye.in/images/Suit/pr20/p1.jpeg",
    "₹920.00 <font color='red' size='2px'><s>₹1120</s></font>"
];


// createCard(suit10)
createCard(kaftan1)
createCard(kaftan3)
createCard(kaftan2)
createCard(kaftan4)
createCard(kaftan5)
createCard(kaftan6)
// createCard(suit14)
// createCard(suit12)
// createCard(suit15)
// createCard(suit7)
// createCard(suit13)
// createCard(suit11)
// createCard(suit9)
// createCard(suit8)