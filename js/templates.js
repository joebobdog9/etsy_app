var toolbar = function() {
    return `<div class="toolbar">
                <a href="#" class="logo">getTRENDY</a>
                <form class='search'><input type="search"></form>
            </div>`
}


var grid_item = (url, title) => `<a href="#">
    <img src="${url}">
    <div>
        <span >${title}</span>
    </div>
    </a>`

export var details = (url, title) => `<div class="container details-screen">
    ${toolbar()}
    <div class="grid">
        <img src="${url}">

        <div>
            <div class="detail-title">${title}</div>
        </div>
    </div>
</div>`

export var home = (trendingListings) => `<div class="container home-screen">
    ${toolbar()}
    <div class="grid grid-2-400 grid-4-800 grid-6-1024 listing_link">

        ${ trendingListings.results.map((etsyListing,index) => {
            console.log(etsyListing)
            return `<a href="#listing/${etsyListing.listing_id}" class="single-listing">
                <img src="${etsyListing.Images[0].url_170x135}", 
                // <br>
                <p class="text-block">${etsyListing.title} </p>

            </a>`
        }).join('') }
    </div>

</div>`
