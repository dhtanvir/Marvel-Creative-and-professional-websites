/*===========slick slider=============*/
// $(function () {
//     $('.multiple-items').slick({
//         infinite: true,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         arrows: true,
//         autoplay: true,
//         autoplaySpeed: 5000,
//          centerMode: true,
//         centerPadding: '0',
//     });
// });     dots: true,

/*===========slick slider=============*/
/*========= protfolio_gallery =====*/
const filterContainer = document.querySelector('.gallery-filter'),
    galleryItems = document.querySelectorAll('.gallery-item');
// console.log(galleryItems);
filterContainer.addEventListener("click", (Event) => {
    // console.log(Event.target);
    // if (Event.target.classList.contains("filter-item")) {
    //     console.log("true");
    // }
    // else {
    //     console.log("false");
    // }
    // console.log("Event.targe");
    if (Event.target.classList.contains("filter-item")) {
        //deactivate existing active "filter-item"
        filterContainer.querySelector(".active").classList.remove("active");
        //activate new "filter-item"
        Event.target.classList.add("active");
        const filterValue = Event.target.getAttribute("data-filter");
        // console.log(filterValue);
        galleryItems.forEach((item) => {
            //console.log(item);
            if (item.classList.contains(filterValue) || filterValue === 'all') {
                item.classList.remove("hide");
                item.classList.add("show");
            } else {
                item.classList.remove("show");
                item.classList.add("hide");
            }

        })
    }
});






/*========= protfolio_gallery =====*/