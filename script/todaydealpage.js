
// let sideopenartodaysdealpage = document.getElementsByClassName("sideopenar-todays-deal-page");
// console.log(sideopenartodaysdealpage);

// let slidebar_container_navigation_today = document.getElementsByClassName("slidebar-container-navigation-today");
// console.log(slidebar_container_navigation_today);

// sideopenartodaysdealpage.

const colorstar = document.querySelectorAll(".color-star");
// console.log(colorstar);
colorstar.forEach(el => {
    el.addEventListener("click", function () {
        // el.style.color = "orange";
        el.classList.toggle("fa-solid");
    })
})




setInterval(function () {
    const d = new Date();
    document.getElementById("deal-time").innerHTML = d.toLocaleTimeString();
}, 1000)

