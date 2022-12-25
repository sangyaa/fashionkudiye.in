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
    "3 pc Suit Collection [Kurti + sharara + Dupatta]<tag style='display:none;'>suit set green colou setr with Gotta Patti Work quality high</tag>",
    "⭐⭐⭐⭐⭐ <bb style='font-size:14px;background-color:#B12720;color:#fff;padding:3px 10px 3px 10px;'>Deal of the Day</bb>",
    "/fashionkudiye.in/images/Suit/pr10/m.jpg",
    "₹879.00  <font color='red' size='2px'><s>₹1200</s></font> " // add 70
];
suit2 = [
    "/fashionkudiye.in/images/Suit/pr1/s_1.html",
    "Suits Collection",
    "Red kurti with with pant & cotton dupatta<tag style='display:none;'>Thre sete pcs suit</ settag>",
    "⭐⭐⭐⭐",
    "/fashionkudiye.in/images/Suit/pr1/3pcsSuit2.jpeg",
    "₹820.00" // add 70
];
kaftan3 = [
    "/fashionkudiye.in/images/Kaftan/bluepr2/pr_2.html",
    "Kaftan Collection",
    "Blue & Purple Colors Kaftan with a premium look <tag style='display:none;'>kaftan kaftans set Wedding special Premium quality. Special launching for parties rayon</tag>",
    "⭐⭐⭐⭐ <bb style='font-size:14px;background-color:#B12720;color:#fff;padding:3px 10px 3px 10px;'>Price drop alert</bb>",
    "/fashionkudiye.in/images/Kaftan/bluepr2/main.jpg",
    "₹459.00 <font color='red' size='2px'><s>₹870</s></font>" // add 60
];
gown4 = [
    "/fashionkudiye.in/images/Gown/blk_4/blk.html",
    "Gowns Collection",
    "Black Colour Middi Gown [No pocket] <tag style='display:none;'>Coolest Middi Gown,No pocket</tag>",
    "⭐⭐⭐⭐",
    "/fashionkudiye.in/images/Gown/blk_4/m.jpg",
    "₹620.00 <font color='red' size='2px'><s>₹990</s></font>"
];
suit5 = [
    "/fashionkudiye.in/images/Suit/pr2/s_2.html",
    "Suits Collection",
    "Red theme Rayon Kurti, pant with dupatta <tag style='display:none;'>suit set suits kurti set kurtis dupatta duptta duppatta duppata salwar Outfit that bring the best version of you and your personality are loved by all.. just like our gorgeous shade of Red colour bhandhani suit set with embroidered work on the neck with dyed sequin work duppta with gotta lace work.</tag>",
    "⭐⭐⭐⭐",
    "/fashionkudiye.in/images/Suit/pr2/3.jpg",
    "₹870.00"
];
kaftan6 = [
    "/fashionkudiye.in/images/Kaftan/pinkpr1/k_1.html",
    "Kaftan Collection",
    "Pink Cotton kaftan with pant & latkan <tag style='display:none;'>kaftan kaftans set Premium cotton 60'60 kaftan with latkan And cotton pant</tag>",
    "⭐⭐⭐",
    "/fashionkudiye.in/images/Kaftan/pinkpr1/photo_2022-09-06_20-59-36.jpg",
    "₹755.00"
];
suit7 = [
    "/fashionkudiye.in/images/Suit/pr3/s_3.html",
    "Suits Collection",
    "Pure Cotton 3 pc blue color suit <tag style='display:none;'>suit set suits kurti set kurtis dupatta duptta duppatta duppata salwar Beautiful outfit in three piece suit. Cool print</tag>",
    "⭐⭐⭐⭐⭐ <bb style='font-size:14px;background-color:#CC5500;color:#fff;padding:3px 10px 3px 10px;'>Quality Assured</bb>",
    "/fashionkudiye.in/images/Suit/pr3/photo_2022-10-09_20-45-14.jpg",
    "₹1150.00"
];
gown8 = [
    "/fashionkudiye.in/images/Gown/anarkali_/anarkali.html",
    "Gowns Collection",
    "Beautiful blue Heavy Reyon Anarkali Gown <tag style='display:none;'>BEAUTIFUL Heavy Reyon Anarkali Gown with bottom pant</tag>",
    "⭐⭐⭐⭐⭐",
    "/fashionkudiye.in/images/Gown/anarkali_/photo_2022-10-20_20-08-35.jpg",
    "₹674.00"
];
suit9 = [
    "/fashionkudiye.in/images/Suit/pr8/s_8.html",
    "Suits Collection",
    "Party look rayon kurti with gota work <tag style='display:none;'>suit set suits kurti set kurtis dupatta duptta duppatta duppata salwar This wedding session wear the party look Kurtis [kurti + pant + dupatta]</tag>",
    "⭐⭐⭐",
    "/fashionkudiye.in/images/Suit/pr8/main.jpg",
    "₹874.00"
];
suit10 = [
    "/fashionkudiye.in/images/Suit/pr6/s_6.html",
    "Suits Collection",
    "Festive Season Red color Organza Suit <tag style='display:none;'>suit suits kurti kurtis dupatta duptta duppatta duppata Fabric, cotton silk and digital print organza dupatta</tag>",
    "⭐⭐⭐⭐⭐<bb style='font-size:14px;background-color:#B12720;color:#fff;padding:3px 10px 3px 10px;'>Trending Hot 🔥</bb>",
    "/fashionkudiye.in/images/Suit/pr6/1.jpg",
    "₹974.00  <font color='red' size='2px'><s>₹1204</s></font>"
];
suit11 = [
    "/fashionkudiye.in/images/Suit/pr17/s_17.html",
    "Suits Collection",
    "Jaipuri Special Floral Maroon colour Kurti Pant & Dupatta <tag style='display:none;'>suit set suits kurti set kurtis dupatta duptta duppatta duppata salwar Beautiful Jaipur Special Floral print Anarkali Style Kurti in red and black colour Gota detailing on the yolk</tag>",
    "⭐⭐⭐⭐⭐",
    "/fashionkudiye.in/images/Suit/pr17/m2.jpg",
    "₹1074.00"
];
suit12 = [
    "/fashionkudiye.in/images/Suit/pr15/s_15.html",
    "Suits Collection",
    "Cool White Colour Kurti set <tag style='display:none;'>suit set suits kurti set kurtis dupatta duptta duppatta duppata salwar This wedding session wear the party look full flair kurti pant dupatta</tag>",
    "⭐⭐⭐⭐",
    "/fashionkudiye.in/images/Suit/pr15/m.jpg",
    "₹1074.00"
];
suit13 = [
    "/fashionkudiye.in/images/Suit/pr16/s_16.html",
    "Suits Collection",
    "Pink Rayon Kurti pant & dupatta <tag style='display:none;'>suit set suits kurti set kurtis dupatta duptta duppatta duppata salwar Fabric Rayon kurti with pant with cotton dupatta</tag>",
    "⭐⭐⭐⭐",
    "/fashionkudiye.in/images/Suit/pr16/m.jpg",
    "₹725.00"
];
kaftan14 = [
    "/fashionkudiye.in/images/Kaftan/pr6/k_6.html",
    "Kaftan Collection",
    "New Premium Badhani kaftan set (Handwork) <tag style='display:none;'>kaftan kaftans set Premium quality Georgette Bandhni kaftan with handwork (Cotton lining attached)</tag>",
    "⭐⭐⭐⭐⭐",
    "/fashionkudiye.in/images/Kaftan/pr6/m3.jpg",
    "₹1140.00"
];
kaftan15 = [
    "/fashionkudiye.in/images/Kaftan/pr5/k_5.html",
    "Kaftan Collection",
    "Green & White combination Beautiful Kaftan + Pant <tag style='display:none;'>kaftan kaftans set Green & White combination Beautiful Kaftan + Pant With Tie dye print with dori</tag>",
    "⭐⭐⭐⭐",
    "/fashionkudiye.in/images/Kaftan/pr5/m.jpg",
    "₹734.00"
];
suit16 = [
    "/fashionkudiye.in/images/Suit/pr4/s_4.html",
    "Suits Collection",
    "Red color Kurti with Pant - beautiful work <tag style='display:none;'>Launching New Outfit for Festival wear Chickenkari Embroidered Kurti pant with Beautiful sequence Zardori work & Dupatta Cutwork Embroidery Border embellished with Beautiful Handwork kurti set kurtis suit set suits suit</tag>",
    "⭐⭐⭐",
    "/fashionkudiye.in/images/Suit/pr4/Screenshot 2022-10-23 152049.jpg",
    "₹1674.00"
];
suit17 = [
    "/fashionkudiye.in/images/Suit/pr5/s_5.html",
    "Suits Collection",
    "Premium Black Colour Hand block cotton kurti pant & duppata<tag style='display:none;'> Get perfect casual yet classy look Premium  hand block cotton kurti pant and duppata kurti set suit set </tag>",
    "⭐⭐⭐⭐",
    "/fashionkudiye.in/images/Suit/pr5/photo_2022-08-29_20-11-43.jpg",
    "₹874.00"
];
suit18 = [
    "/fashionkudiye.in/images/Suit/pr9/s_9.html",
    "Suits Collection",
    "Pink Rayon Kurti pant & dupatta <tag style='display:none;'>Get classy look in festivals with our beautiful outfit. Beautiful kurta sharara & duppata set in classy look kurti set suit set</tag>",
    "⭐⭐⭐⭐",
    "/fashionkudiye.in/images/Suit/pr9/photo_2022-10-20_12-08-49 (3).jpg",
    "₹920.00"
];
suit19 = [
    "/fashionkudiye.in/images/Suit/pr11/s_11.html",
    "Suits Collection",
    "New kota Doriya 3 piece greyish suit <tag style='display:none;'>This Special We are Launching New Kota doriya print 3 piece Suit kurti set suit set</tag>",
    "⭐⭐⭐⭐",
    "/fashionkudiye.in/images/Suit/pr11/m2.jpg",
    "₹744.00"
];
suit20 = [
    "/fashionkudiye.in/images/Suit/pr12/s_12.html",
    "Suits Collection",
    "Kurta three piece suit with cotton hand block <tag style='display:none;'>Make a dazzling statement with this Bondage Print! kurta three piece suit crafted in Rayon fabric. It features beautiful off white chicken lace pattern. on sleeves. 3/4th sleeves and with pure cotton hand block duppata kurti set suit set</tag>",
    "⭐⭐⭐⭐",
    "/fashionkudiye.in/images/Suit/pr12/photo_2022-10-13_10-26-52.jpg",
    "₹874.00"
];
suit21 = [
    "/fashionkudiye.in/images/Suit/pr13/s_13.html",
    "Suits Collection",
    "New special Maroon colour cotton lurex kurta with organza dupatta <tag style='display:none;'>Special Supar Collar necked cobalt Maroon cotton lurex kurta is definitely a must collection to try for everyone! Straight pants and organza dupatta aligns perfectly to the kurta by giving a rich look overall kurti set suit set</tag>",
    "⭐⭐⭐⭐⭐ <bb style='font-size:14px;background-color:#B12720;color:#fff;padding:3px 10px 3px 10px;'>Trending Hot🔥</bb>",
    "/fashionkudiye.in/images/Suit/pr13/photo_2022-10-14_23-34-59.jpg",
    "₹1070.00"
];
suit22 = [
    "/fashionkudiye.in/images/Suit/pr14/s_14.html",
    "Suits Collection",
    "Hand work lurex Kurti, Rayon pant with kota doria dupatta <tag style='display:none;'>This wedding session wear the party look kurti pant duppta kurti set suit set</tag>",
    "⭐⭐⭐",
    "/fashionkudiye.in/images/Suit/pr14/m.jpg",
    "₹874.00"
];
maxi23 = [
    "/fashionkudiye.in/images/Maxi/maxi.html",
    "Unique Collection",
    "Beautiful Yellow Maxi Dress [Rare] <tag style='display:none;'>A summer respite... lukhnawi chikankari cotton silhouette dress with Swarovski sequin handwork and cotton lining attached inside *puffed classy sleeves with elastic and frill</tag>",
    "⭐⭐⭐⭐",
    "/fashionkudiye.in/images/Maxi/photo_2022-08-29_20-17-26_2.jpg",
    "₹915.00"
];
gown24 = [
    "/fashionkudiye.in/images/Gown/coolcutRed5/rd_5.html",
    "Gowns Collection",
    "Red sleeveless gown with lining inside with real mirror look<tag style='display:none;'></tag>",
    "⭐⭐⭐⭐",
    "/fashionkudiye.in/images/Gown/coolcutRed5/m.jpg",
    "₹854.00 <font color='red' size='2px'><s>₹999</s></font>"
];
gown25 = [
    "/fashionkudiye.in/images/Gown/gownn2/gn_2.html",
    "Gowns Collection",
    "Beautiful gown Kurti With pant Set<tag style='display:none;'></tag>",
    "⭐⭐",
    "/fashionkudiye.in/images/Gown/gownn2/1.jpg",
    "₹855.00" // add 70
];
gown26 = [
    "/fashionkudiye.in/images/Gown/red_anarkali3/anarkali_3.html",
    "Gowns Collection",
    "Pure Rayon Anarkali Gown<tag style='display:none;'></tag>",
    "⭐⭐⭐",
    "/fashionkudiye.in/images/Gown/red_anarkali3/photo_2022-09-23_12-31-21.jpg",
    "₹870.00"
];
kaftan27 = [
    "/fashionkudiye.in/images/Kaftan/pr3/pr__3.html",
    "Kaftan Collection",
    "Digital print kaftan lining attached inside work detailing on yoke<tag style='display:none;'>Premium Reyon slub digital print* special print kaftan linning attached inside work detailing on yoke full embroidery</tag>",
    "⭐⭐⭐⭐",
    "/fashionkudiye.in/images/Kaftan/pr3/photo_2022-07-14_16-02-12.jpg",
    "₹600.00 <font color='red' size='2px'><s>₹890</s></font>" // add 75
];
kaftan28 = [
    "/fashionkudiye.in/images/Kaftan/pr4/k_4.html",
    "Gowns Collection",
    "New Whitish Chikan work design cotton kaftan<tag style='display:none;'></tag>",
    "⭐⭐⭐⭐",
    "/fashionkudiye.in/images/Kaftan/pr4/m.jpg",
    "₹874.00"
];
kaftan29 = [
    "/fashionkudiye.in/images/Kaftan/pr5/k_5.html",
    "Kaftan Collection",
    "Green & White combination Beautiful Kaftan + Pant<tag style='display:none;'>premium qulaity fully stiched</tag>",
    "⭐⭐⭐⭐⭐",
    "/fashionkudiye.in/images/Kaftan/pr5/m.jpg",
    "₹734.00"
];
kaftan30 = [
    "/fashionkudiye.in/images/Kaftan/pr6/k_6.html",
    "Kaftan Collection",
    "New Premium Badhani kaftan set (Handwork)<tag style='display:none;'>All new bandhani kaftaan set Premium quality Georgette Bandhni kaftan with handwork (Cotton lining attached)</tag>",
    "⭐⭐⭐⭐",
    "/fashionkudiye.in/images/Kaftan/pr6/m.jpg",
    "₹1140.00"
];


createCard(suit1)
createCard(suit10)
createCard(suit12)
createCard(kaftan3)
createCard(suit2)
createCard(kaftan15)
createCard(gown4)
createCard(kaftan14)
createCard(kaftan6)
createCard(suit7)
createCard(suit13)
createCard(suit5)
createCard(suit11)
createCard(suit9)
createCard(gown8)
createCard(suit16)
createCard(suit17)
createCard(suit18)
createCard(suit19)
createCard(suit20)
createCard(suit21)
createCard(suit22)
createCard(maxi23)
createCard(gown24)
createCard(gown25)
createCard(gown26)
createCard(kaftan27)
createCard(kaftan28)
createCard(kaftan30)
