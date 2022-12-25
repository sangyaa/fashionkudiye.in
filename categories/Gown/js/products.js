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


gown1 = [
    "/fashionkudiye.in/images/Gown/anarkali_/anarkali.html",
    "Gowns Collection",
    "Beautiful blue Heavy Reyon Anarkali Gown<tag style='display:none;'></tag>",
    "⭐⭐⭐⭐ <bb style='font-size:14px;background-color:#B12720;color:#fff;padding:3px 10px 3px 10px;'>Deal of the Day</bb>",
    "/fashionkudiye.in/images/Gown/anarkali_/photo_2022-10-20_20-08-35.jpg",
    "₹674.00  <font color='red' size='2px'><s>₹1200</s></font> " // add 70
];
gown2 = [
    "/fashionkudiye.in/images/Gown/gownn2/gn_2.html",
    "Gowns Collection",
    "Beautiful gown Kurti With pant Set<tag style='display:none;'></tag>",
    "⭐⭐",
    "/fashionkudiye.in/images/Gown/gownn2/1.jpg",
    "₹855.00" // add 70
];
gown3 = [
    "/fashionkudiye.in/images/Gown/blk_4/blk.html",
    "Gowns Collection",
    "Black color Middi gown [No pocket]<tag style='display:none;'>3XL 4XL 5XL 6XL Beautiful Procin Printed Cotton Fabric Kurti Worked With Tubelight Hand Work On Yoke Paired With Printed Pant And Tai Dai Kotta Doriya Dupatta 2 colours eavy handwork</tag>",
    "⭐⭐⭐⭐⭐ <bb style='font-size:14px;background-color:#CC5500;color:#fff;padding:3px 10px 3px 10px;'>Quality Assured</bb>",
    "/fashionkudiye.in/images/Gown/blk_4/m.jpg",
    "₹620.00 <font color='red' size='2px'><s>₹1120</s></font>" // add 75
];
gown4 = [
    "/fashionkudiye.in/images/Gown/coolcutRed5/rd_5.html",
    "Gowns Collection",
    "Red sleeveless gown with lining inside with real mirror look<tag style='display:none;'></tag>",
    "⭐⭐⭐⭐",
    "/fashionkudiye.in/images/Gown/coolcutRed5/m.jpg",
    "₹854.00 <font color='red' size='2px'><s>₹999</s></font>"
];
gown5 = [
    "/fashionkudiye.in/images/Gown/red_anarkali3/anarkali_3.html",
    "Gowns Collection",
    "Pure Rayon Anarkali Gown<tag style='display:none;'></tag>",
    "⭐⭐⭐",
    "/fashionkudiye.in/images/Gown/red_anarkali3/photo_2022-09-23_12-31-21.jpg",
    "₹870.00"
];
gown6 = [
    "/fashionkudiye.in/images/Suit/pr11/s_11.html",
    "Suits Collection",
    "New kota Doriya 3 piece greyish suit<tag style='display:none;'></tag>",
    "⭐⭐⭐⭐",
    "/fashionkudiye.in/images/Suit/pr11/main.jpg",
    "₹744.00"
];
gown7 = [
    "/fashionkudiye.in/images/Suit/pr3/s_3.html",
    "Suits Collection",
    "Pure Cotton 3 pc blue color suit<tag style='display:none;'></tag>",
    "⭐⭐⭐⭐⭐ <bb style='font-size:14px;background-color:#CC5500;color:#fff;padding:3px 10px 3px 10px;'>Quality Assured</bb>",
    "/fashionkudiye.in/images/Suit/pr3/photo_2022-10-09_20-45-14.jpg",
    "₹1150.00"
];
gown8 = [
    "/fashionkudiye.in/images/Suit/pr7/s_7.html",
    "Suits Collection",
    "Skyish Blue fabric kurta with beautiful thread work with pant and dupatta<tag style='display:none;'></tag>",
    "⭐⭐⭐⭐",
    "/fashionkudiye.in/images/Suit/pr7/m.jpg",
    "₹744.00"
];
gown9 = [
    "/fashionkudiye.in/images/Suit/pr8/s_8.html",
    "Suits Collection",
    "Party look rayon kurti with gota work<tag style='display:none;'></tag>",
    "⭐⭐⭐",
    "/fashionkudiye.in/images/Suit/pr8/main.jpg",
    "₹874.00"
];
gown10 = [
    "/fashionkudiye.in/images/Suit/pr6/s_6.html",
    "Suits Collection",
    "Festive Season Red color Organza Suit<tag style='display:none;'></tag>",
    "⭐⭐⭐⭐⭐<bb style='font-size:14px;background-color:#B12720;color:#fff;padding:3px 10px 3px 10px;'>Trending Hot 🔥</bb>",
    "/fashionkudiye.in/images/Suit/pr6/1.jpg",
    "₹974.00  <font color='red' size='2px'><s>₹1204</s></font>"
];
gown11 = [
    "/fashionkudiye.in/images/Suit/pr17/s_17.html",
    "Suits Collection",
    "Jaipuri Special Floral Maroon colour Kurti Pant & Dupatta<tag style='display:none;'></tag>",
    "⭐⭐⭐⭐⭐",
    "/fashionkudiye.in/images/Suit/pr17/m2.jpg",
    "₹1074.00"
];
gown12 = [
    "/fashionkudiye.in/images/Suit/pr15/s_15.html",
    "Suits Collection",
    "Cool White Colour Kurti set<tag style='display:none;'></tag>",
    "⭐⭐⭐⭐",
    "/fashionkudiye.in/images/Suit/pr15/m.jpg",
    "₹1074.00"
];
gown13 = [
    "/fashionkudiye.in/images/Suit/pr16/s_16.html",
    "Suits Collection",
    "Pink Rayon Kurti pant & dupatta<tag style='display:none;'></tag>",
    "⭐⭐⭐⭐",
    "/fashionkudiye.in/images/Suit/pr16/m.jpg",
    "₹725.00"
];
gown14 = [
    "/fashionkudiye.in/images/Kaftan/pr6/k_6.html",
    "Suits Collection",
    "Dazzling wine kurta 3 piece suit crafted in Rayon<tag style='display:none;'></tag>",
    "⭐⭐⭐⭐⭐",
    "/fashionkudiye.in/images/Suit/pr19/m.jpg",
    "₹870.00"
];
gown15 = [
    "/fashionkudiye.in/images/Suit/pr20/s_20_.html",
    "Suits Collection",
    "Pink Beautiful Procin Printed Cotton Fabric Kurti With Pant and Kotta doriya dupatta<tag style='display:none;'></tag>",
    "⭐⭐⭐⭐⭐ <bb style='font-size:14px;background-color:#CC5500;color:#fff;padding:3px 10px 3px 10px;'>Quality Assured</bb>",
    "/fashionkudiye.in/images/Suit/pr20/p1.jpeg",
    "₹920.00 <font color='red' size='2px'><s>₹1120</s></font>"
];


// createCard(suit10)
createCard(gown1)
createCard(gown3)
createCard(gown2)
createCard(gown4)
createCard(gown5)
// createCard(suit14)
// createCard(suit12)
// createCard(suit6)
// createCard(suit15)
// createCard(suit7)
// createCard(suit13)
// createCard(suit11)
// createCard(suit9)
// createCard(suit8)