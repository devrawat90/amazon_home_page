// import array of todays deals


import { soundbarItems, todayDeal } from "./todaydeal.js";

// =============================image slider===============================================================================


let slidebtnleft = document.getElementById("slide-btn-left");
console.log(slidebtnleft);
let slidebtnright = document.getElementById("slide-btn-right");
let imageitem = document.querySelectorAll(".image-item");

let startSlider = 0;
let endSlider = (imageitem.length - 1) * 100;

// ==============leftbtn================================================================================================
slidebtnleft.addEventListener("click", handleleftBtn);

function handleleftBtn() {
    if (startSlider < 0) {
        startSlider = startSlider + 100;

    };

    imageitem.forEach(element => {
        element.style.transform = `translatex(${startSlider}%)`;

    });
}


// ======================right btn====================================================================
slidebtnright.addEventListener("click", handlerightBtn);

function handlerightBtn() {
    if (startSlider > -endSlider + 100) {
        startSlider = startSlider - 100;
    };

    imageitem.forEach(element => {
        element.style.transform = `translatex(${startSlider}%)`;

    });
};


// ============================render automatic=======================================================================

function slideAuto() {
    if (startSlider > -endSlider + 100) {
        handlerightBtn();
    } else
        startSlider = 0;

}

setInterval(slideAuto, 2000);

// ===============================slidebar-container-navigation===========================================================



const slidebarNavigationEl = document.getElementById("slidebar-container-navigation-id");
const sidebarOpenNavigationEl = document.getElementById("open-nav-slider");
sidebarOpenNavigationEl.addEventListener("click", () => {
    slidebarNavigationEl.classList.toggle("slidebar-show");
});


// sidebar close btn============
const sidebarCloseNavigationBtn = document.getElementById("sidebar-navigation-close");
sidebarCloseNavigationBtn.addEventListener("click", () => {
    slidebarNavigationEl.classList.toggle("slidebar-show");


});
// ==========================================



let show_account_section = document.getElementById("show-account-section");
console.log(show_account_section);
let accounts_navigation = document.getElementsByClassName("visibility")[0];
console.log(accounts_navigation);

show_account_section.addEventListener("click", () => {
    accounts_navigation.classList.toggle("visibility");
})


// =================================  today deals===========================================================================

// console.log(todayDeal);

const todayDealProductListEl = document.querySelectorAll(".today-deals-product-list")[0];
// console.log(todayDealProductListEl);
let todayDealProductHtml = "";
let todayDealLength = todayDeal.length;


for (let i = 0; i < todayDealLength; i++) {
    // console.log(todayDeal[i]);


    todayDealProductHtml += `
    <div class="today-deals-product-item">
    <img src="${todayDeal[i].img} " alt="">
    <div class="discount-container">
    <a href="#">Up to ${todayDeal[i].Discount}% Off</a>
    <a href="#">${todayDeal[i].DealofDay}</a>
    </div>
    <p>${todayDeal[i].Desc}</p>
    </div>
    `
};
todayDealProductListEl.innerHTML = todayDealProductHtml;
// console.log(todayDealProductHtml);





let todayDealPrevbtn = document.getElementById("today-deal-btn-prev");
// console.log(todayDealPrevbtn);
let todayDealNextBtn = document.getElementById("today-deal-btn-next");
// console.log(todayDealNextBtn);
let todaydealsproductitem = document.querySelectorAll(".today-deals-product-item");
let startproduct = 0;



todayDealNextBtn.addEventListener("click", () => {

    if (startproduct > -1020) {
        startproduct -= 220;
    }
    todaydealsproductitem.forEach(el => {
        el.style.transform = `translateX(${startproduct}%)`;
    })

})





todayDealPrevbtn.addEventListener("click", () => {

    if (startproduct < 0) {
        startproduct += 230;
    }
    // if (startproduct > -1090) {
    todaydealsproductitem.forEach(el => {
        el.style.transform = `translateX(${startproduct}%)`;
    });
})
// })


// =====================deal on accesories==================================================================================


import { DealonAccessories } from "./todaydeal.js";
// console.log(DealonAccessories);


let accesoriesbntPrev = document.getElementById("today-deal-accesories-btn-prev");
let accesoriesbtnNext = document.getElementById("today-deal-accesories-btn-next");



let accesoriesItems = document.querySelectorAll(".accessories-items")[0];
// console.log(accesoriesItems);

let accesoriesItemsLength = DealonAccessories.length;
// console.log(accesoriesItemsLength);
let accesoriesItemsHtml = "";


for (let i = 0; i < accesoriesItemsLength; i++) {
    accesoriesItemsHtml += `
                     <div class="today-deals-product-item accesorie-items">
                        <img src="${DealonAccessories[i].img}" alt="">
                     </div>
    `
}
accesoriesItems.innerHTML = accesoriesItemsHtml;
// console.log(accesoriesItemsHtml);

let accesorieitem = document.querySelectorAll(".accesorie-items");
// console.log(accesorieitem);
let startingAccesories = 0;


accesoriesbtnNext.addEventListener("click", () => {
    // alert("btnnext")

    if (startingAccesories > -2000) {
        startingAccesories -= 405;
    }
    accesorieitem.forEach(el => {
        el.style.transform = `translateX(${startingAccesories}%)`;
    })

})
accesoriesbntPrev.addEventListener("click", () => {
    // alert("btnprev")
    if (startingAccesories < 0) {
        startingAccesories += 405;
    }
    accesorieitem.forEach(el => {
        el.style.transform = `translateX(${startingAccesories}%)`;
    })

})


// daily essentials===============================================================================================

import { dailyEssentials } from "./todaydeal.js";
// console.log(dailyEssentials);

let essentialsbtnPrev = document.getElementById("today-deal-essentials-btn-prev");
let essentialsbtnNext = document.getElementById("today-deal-essentials-btn-next");

let essentialitemlist = document.querySelectorAll(".essentials-items")[0];
// console.log(essentialitemlist);
let essentialitemsLength = dailyEssentials.length;
// console.log(essentialitemsLength);
let essentialitemsHtml = "";




for (let i = 0; i < essentialitemsLength; i++) {
    essentialitemsHtml += `
    <div class="essentials-items-main">
                <div class="today-deals-product-item essential-items">
                        <img src="${dailyEssentials[i].img}" alt="">
                     </div>
                 </div>
                     `
}
essentialitemlist.innerHTML = essentialitemsHtml;




let essentialsitems = document.querySelectorAll(".essential-items");
// console.log(essentialsitems);
let startingessentials = 0;


essentialsbtnNext.addEventListener("click", () => {
    if (startingessentials > -1200) {
        startingessentials -= 400;
    }
    essentialsitems.forEach(el => {
        el.style.transform = `translateX(${startingessentials}%)`;
    })

})


essentialsbtnPrev.addEventListener("click", () => {

    if (startingessentials < 0) {
        startingessentials += 400;
    }
    essentialsitems.forEach(el => {
        el.style.transform = `translateX(${startingessentials}%)`;
    })

})
// ==========================star icons========================

let starIcons = document.querySelectorAll(".convert-color");
// console.log(starIcons);
starIcons.forEach((el, i) => {
    el.addEventListener("click", () => {
        if (i < starIcons.length) {
            // el.style.color = "red";
            starIcons[i].style.color = "red";
        }

    })
})
// =====================small slider inside =============================================================================


import { smallSlider } from "./todaydeal.js";


let chngbtnleft = document.getElementById("smallslider-btn-prev");
let chngbtnright = document.getElementById("smallslider-btn-next")


let getchngediv = document.querySelectorAll(".setslider-data")[0];
// console.log(getchngediv.innerHTML);
let getChange_Html = "";

let getchngedivLength = smallSlider.length;
// console.log(getchngedivLength);

for (let i = 0; i < getchngedivLength; i++) {
    getChange_Html += `
                            <div class="today-deals-product-item change-Image">
                                            <a href="">
                                                <img src="${smallSlider[i].img}"
                                                    alt="">

                                            </a>
                                            <div class="live-data">
                                                <p>Pedigree Wet Food for Adult Dogs, Chicken & Liver Chunks in Gravy
                                                    Flav…</p>
                                                <h2><span>675 <sup>00</sup></span>
                                                    <span> <sub> M.R.P: </sub><sub>750.00</sub></span>
                                                </h2>
                                            </div>

                                        </div>
                            
                       
    `
}
var a = getchngediv.innerHTML = getChange_Html;
// console.log(a);

let changeImages = document.querySelectorAll(".change-Image");
// console.log(changeImages);

let changeimgStartAT = 0;
chngbtnright.addEventListener("click", () => {
    // alert("btnright")
    if (changeimgStartAT > -500) {
        changeimgStartAT -= 110;
    }
    changeImages.forEach(el => {
        el.style.transform = `translateX(${changeimgStartAT}%)`;
    })

})
chngbtnleft.addEventListener("click", () => {
    // alert("btnleft")
    if (changeimgStartAT < 0) {
        changeimgStartAT += 110;
    }
    changeImages.forEach(el => {
        el.style.transform = `translateX(${changeimgStartAT}%)`;
    })

})


// ===================================================================small sliders1================================

import { smallSlider1 } from "./todaydeal.js";


let chngbtnLeft = document.getElementById("smallslider1-btn-prev");
let chngbtnRight = document.getElementById("smallslider1-btn-next")


let getchngediv1 = document.querySelectorAll(".setslider1-data")[0];
// console.log(getchngediv.innerHTML);
let getChange_Html1 = "";

let getchngedivLength1 = smallSlider1.length;
console.log(getchngedivLength1);

for (let i = 0; i < getchngedivLength1; i++) {
    getChange_Html1 += `
                            <div class="today-deals-product-item change-Image1">
                                            <a href="">
                                                <img src="${smallSlider1[i].img}"
                                                    alt="">

                                            </a>

                                        </div>


    `
}
var a = getchngediv1.innerHTML = getChange_Html1;
// console.log(a);

let changeImages1 = document.querySelectorAll(".change-Image1");
// console.log(changeImages1);

let changeimgStartAT1 = 0;
chngbtnRight.addEventListener("click", () => {
    // alert("btnright")
    if (changeimgStartAT1 > -500) {
        changeimgStartAT1 -= 110;
    }
    changeImages1.forEach(el => {
        el.style.transform = `translateX(${changeimgStartAT1}%)`;
    })

})
chngbtnLeft.addEventListener("click", () => {
    // alert("btnleft")
    if (changeimgStartAT1 < 0) {
        changeimgStartAT1 += 110;
    }
    changeImages1.forEach(el => {
        el.style.transform = `translateX(${changeimgStartAT1}%)`;
    })

})



// ====soundbarItems==================================================================================================

export { soundbarItems } from "./todaydeal.js";
// console.log(soundbarItems);

let sounudbarbtnprev = document.getElementById("today-deal-sounudbar-btn-prev");
let sounudbarbtnnext = document.getElementById("today-deal-soundbar-btn-next");
let soundbar_items = document.querySelectorAll(".soundbar-items")[0];
// console.log(soundbar_items);

let soundbaritemsHTML = "";
let soundbaritemsLength = soundbarItems.length;
// console.log(soundbaritemsLength);

for (let i = 0; i < soundbaritemsLength; i++) {
    soundbaritemsHTML += `<div class="today-deals-product-item soundbar-item">
                        <img src="${soundbarItems[i].img}" alt="">
                     </div>`
}
// console.log(soundbaritemsHTML);
soundbar_items.innerHTML = soundbaritemsHTML;

let getSoundbarItem = document.querySelectorAll(".soundbar-item");
// console.log(getSoundbarItem);

let startingSoundbarAt = 0;


sounudbarbtnnext.addEventListener("click", () => {
    if (startingSoundbarAt > -500) {
        startingSoundbarAt -= 180;
    }
    getSoundbarItem.forEach(el => {
        el.style.transform = `translateX(${startingSoundbarAt}%)`;
    })

})

sounudbarbtnprev.addEventListener("click", () => {

    if (startingSoundbarAt < 0) {
        startingSoundbarAt += 180;
    }
    getSoundbarItem.forEach(el => {
        el.style.transform = `translateX(${startingSoundbarAt}%)`;
    })

})


//  shoping trends====================================================================================================


import { trandShopping } from "./todaydeal.js";
// console.log(trandShopping);
let trendsPrevBtn = document.getElementById("today-deal-trendShopping-btn-prev");
let trendsNextBtn = document.getElementById("today-deal-trendShopping-btn-next");

let trendShoppingitems = document.querySelectorAll(".trendShopping-items")[0];
let trendsShoppingHtml = "";

const trendShoppingLength = trandShopping.length;
// console.log(trendShoppingLength);

for (let i = 0; i < trendShoppingLength; i++) {
    trendsShoppingHtml += `<div class="today-deals-product-item Trending-Items">
                        <img src="${trandShopping[i].img}" alt="">
                     </div>`
}
trendShoppingitems.innerHTML = trendsShoppingHtml;
// console.log(trendsShoppingHtml);

let trandingItems = document.querySelectorAll(".Trending-Items");
// console.log(trandingItems);


let trandsStartAt = 0;

trendsNextBtn.addEventListener("click", () => {
    if (trandsStartAt > -900) {
        trandsStartAt -= 300;
    }
    trandingItems.forEach(el => {
        el.style.transform = `translateX(${trandsStartAt}%)`;


    })

})

trendsPrevBtn.addEventListener("click", () => {
    if (trandsStartAt < 0) {
        trandsStartAt += 300;
    }
    trandingItems.forEach(el => {
        el.style.transform = `translateX(${trandsStartAt}%)`;
    })

})
// ======================================================================================================================


import { computerAccesories } from "./todaydeal.js";

let computer_accesorieBtnPrev = document.getElementById("today-deal-computer-Accesories-btn-prev");
let computer_accesorieBtnNext = document.getElementById("today-deal-computer-Accesories-btn-next");
// console.log(computer_accesorieBtnNext);


let computer_accesories = document.querySelectorAll(".Accesories-items")[0];
// console.log(computer_accesories);


let computer_accesories_Html = "";
let computer_accesories_Length = computerAccesories.length;
// console.log(computer_accesories_Length);
for (let i = 0; i < computer_accesories_Length; i++) {
    computer_accesories_Html += `<div class="today-deals-product-item Accesorie_item">
      <a href="${computerAccesories[i].id}">      
      <img src="${computerAccesories[i].img}" alt=""> 
       </a>
        </div>`
}


computer_accesories.innerHTML = computer_accesories_Html;

let Accesorie_item = document.querySelectorAll(".Accesorie_item");
// console.log(Accesorie_item);
let Accesorie_item_startAt = 0;

computer_accesorieBtnNext.addEventListener("click", () => {

    if (Accesorie_item_startAt > -2150) {
        Accesorie_item_startAt -= 300;
    }
    Accesorie_item.forEach(el => {
        el.style.transform = `translateX(${Accesorie_item_startAt}%)`;
    })
});

computer_accesorieBtnPrev.addEventListener("click", () => {
    if (Accesorie_item_startAt < 0) {
        Accesorie_item_startAt += 300;
    }
    Accesorie_item.forEach(el => {
        el.style.transform = `translateX(${Accesorie_item_startAt}%)`;
    })
})



// additonal items to explore==================================================================================================



import { additional_items } from "./todaydeal.js";
let additionalBtnPrev = document.getElementById("additioanl-btn-prev");
// console.log(additionalBtnPrev);
let additionalBtnNext = document.getElementById("additioanl-btn-next");
// console.log(additionalBtnNext);
let additional_container_data = document.querySelectorAll(".additional-items")[0];
// console.log(additional_container_data);

let additional_container_Html = "";
let additional_container_Length = additional_items.length;
// console.log(live_container_data_Length);

for (let i = 0; i < additional_container_Length; i++) {
    additional_container_Html += `
    <div class="today-deals-product-item additional-item-swiper">
                                        <img src="${additional_items[i].img}"alt="">
                                    </div>

        `

};
additional_container_data.innerHTML = additional_container_Html;

let chngeonadditionalbtn = document.querySelectorAll(".additional-item-swiper");
// console.log(chngeonlivebtn);
let additional_index_startAT = 0;

additionalBtnNext.addEventListener("click", () => {
    // alert("btn next")
    if (additional_index_startAT > -470) {
        additional_index_startAT -= 290;
    }
    chngeonadditionalbtn.forEach(el => {
        el.style.transform = `translateX(${additional_index_startAT}%)`;

    })

});

additionalBtnPrev.addEventListener("click", () => {
    // alert("btn prev");
    if (additional_index_startAT < 0) {
        additional_index_startAT += 290;
    }
    chngeonadditionalbtn.forEach(el => {
        el.style.transform = `translateX(${additional_index_startAT}%)`;

    })
});










// amazon live products container================================================================================

import { amazon_live_items } from "./todaydeal.js";


let liveBtnPrev = document.getElementById("live-btn-prev");
let liveBtnNext = document.getElementById("live-btn-next");

let live_container_data = document.querySelectorAll(".product-data")[0];
// console.log(live_container_data);

let live_container_data_Html = "";
let live_container_data_Length = amazon_live_items.length;
// console.log(live_container_data_Length);

for (let i = 0; i < live_container_data_Length; i++) {
    live_container_data_Html += `
    <div class="today-deals-product-item product-item-swiper">
                                        <img src="${amazon_live_items[i].img}"alt="">
                                        <div class="live-data">
                                    <h3>${amazon_live_items[i].feature}</h3>
                                            <p>${amazon_live_items[i].desc}</p>
                                            <h2>features of this</h2>
                                            <h3>13,999.00</h3>
                                        </div>
                                    </div>

        `

};
live_container_data.innerHTML = live_container_data_Html;

let chngeonlivebtn = document.querySelectorAll(".product-item-swiper");
// console.log(chngeonlivebtn);
let live_startAT = 0;

liveBtnNext.addEventListener("click", () => {
    // alert("btn next")
    if (live_startAT > -800) {
        live_startAT -= 130;
    }
    chngeonlivebtn.forEach(el => {
        el.style.transform = `translateX(${live_startAT}%)`;

    })

});

liveBtnPrev.addEventListener("click", () => {
    // alert("btn prev");
    if (live_startAT < 0) {
        live_startAT += 130;
    }
    chngeonlivebtn.forEach(el => {
        el.style.transform = `translateX(${live_startAT}%)`;

    })
});

// ===========================suppliments==============================================================================


import { supplimentItems } from "./todaydeal.js";
let supplimentBtnPrev = document.getElementById("suppliment-btn-prev");
// console.log(supplimentBtnPrev);
let supplimentBtnNext = document.getElementById("suppliment-btn-next");
// console.log(supplimentBtnNext);
let suppliment_container_data = document.querySelectorAll(".suppliment-items")[0];
// console.log(suppliment_container_data);

let suppliment_container_Html = "";
let suppliment_container_Length = supplimentItems.length;
// console.log(suppliment_container_Length);

for (let i = 0; i < suppliment_container_Length; i++) {
    suppliment_container_Html += `
    <div class="today-deals-product-item suppliment-item-swiper">
                                        <img src="${supplimentItems[i].img}"alt="">
                                    </div>

        `

};
suppliment_container_data.innerHTML = suppliment_container_Html;
// console.log(suppliment_container_Html);

let chngeonsupplimentbtn = document.querySelectorAll(".suppliment-item-swiper");
// console.log(chngeonsupplimentbtn);
let suppliment_index_startAT = 0;

supplimentBtnNext.addEventListener("click", () => {
    // alert("btn next")
    if (suppliment_index_startAT > -1600) {
        suppliment_index_startAT -= 200;
    }
    chngeonsupplimentbtn.forEach(el => {
        el.style.transform = `translateX(${suppliment_index_startAT}%)`;

    })

});

supplimentBtnPrev.addEventListener("click", () => {
    // alert("btn prev");
    if (suppliment_index_startAT < 0) {
        suppliment_index_startAT += 200;
    }
    chngeonsupplimentbtn.forEach(el => {
        el.style.transform = `translateX(${suppliment_index_startAT}%)`;

    })
});


// ======================================================================================================================


let img1 = document.getElementById("item-1");
let img2 = document.getElementById("item-2");
let img3 = document.getElementById("item-3");
let img4 = document.getElementById("item-4");

var image = document.querySelector('#image');

img1.addEventListener('click', function () {
    image.src = 'https://m.media-amazon.com/images/I/71YXa2+AyNL._AC_SY175_.jpg';
});
img2.addEventListener('click', function () {
    image.src = 'https://m.media-amazon.com/images/I/81zQ0CFKpEL._AC_SY175_.jpg';
})
img3.addEventListener('click', function () {
    image.src = 'https://m.media-amazon.com/images/I/61RakxX+HRL._AC_SY175_.jpg';
})
img4.addEventListener('click', function () {
    image.src = 'https://m.media-amazon.com/images/I/71RWq2CjD-L._AC_SY175_.jpg';
})
// =============================================================================================================






let img5 = document.getElementById("item-5");
let img6 = document.getElementById("item-6");
let img7 = document.getElementById("item-7");
let img8 = document.getElementById("item-8");


var image1 = document.querySelector('#image1');
img5.addEventListener('click', function () {
    image1.src = 'https://m.media-amazon.com/images/I/61hkOo+c12L._AC_SY175_.jpg';
});
img6.addEventListener('click', function () {
    image1.src = 'https://m.media-amazon.com/images/I/71-4-8SMk8L._AC_SY175_.jpg';
})
img7.addEventListener('click', function () {
    image1.src = 'https://m.media-amazon.com/images/I/71BNjrPolHL._AC_SY175_.jpg';
})
img8.addEventListener('click', function () {
    image1.src = 'https://m.media-amazon.com/images/I/51J3vRCQMqL._AC_SY175_.jpg';
})
// =====================================
let img9 = document.getElementById("item-9");
let img10 = document.getElementById("item-10");
let img11 = document.getElementById("item-11");
let img12 = document.getElementById("item-12");


var image2 = document.querySelector('#image2');
img9.addEventListener('click', function () {
    image2.src = 'https://m.media-amazon.com/images/I/819W3OSCM+L._AC_SY175_.jpg';
});
img10.addEventListener('click', function () {
    image2.src = 'https://m.media-amazon.com/images/I/71RJ85Paf8L._AC_SY175_.jpg';
})
img11.addEventListener('click', function () {
    image2.src = 'https://m.media-amazon.com/images/I/61+52tSJG5L._AC_SY175_.jpg';
})
img12.addEventListener('click', function () {
    image2.src = 'https://m.media-amazon.com/images/I/51dzxMd-izL._AC_SY200_.jpg';
})





// =====================================================================================================================




let img13 = document.getElementById("item-13");
let img14 = document.getElementById("item-14");
let img15 = document.getElementById("item-15");
let img16 = document.getElementById("item-16");


var image3 = document.querySelector('#image3');
img13.addEventListener('click', function () {
    image3.src = 'https://m.media-amazon.com/images/I/61xNG4wjOuL._AC_SY175_.jpg';
});
img14.addEventListener('click', function () {
    image3.src = 'https://m.media-amazon.com/images/I/61lfthIflfL._AC_SY175_.jpg';
})
img15.addEventListener('click', function () {
    image3.src = 'https://m.media-amazon.com/images/I/61I2bY5VYpL._AC_SY175_.jpg';
})
img16.addEventListener('click', function () {
    image3.src = 'https://m.media-amazon.com/images/I/61etF1ILcfL._AC_SY175_.jpg';
})

// let grid_section_images = document.querySelectorAll(".grid-section-images");
// console.log(grid_section_images);

// let grid_section_images_html = document.getElementsByClassName("grid-section-images")[0];
// console.log(grid_section_images_html.innerHTML);

// import { todayDealdata } from "./todaydeal";
// console.log(todayDealdata);