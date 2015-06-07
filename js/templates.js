var toolbar = function() {
    return `<div class="toolbar">
                <a href="#" class="logo">SEARCH</a>
                <form><input type="search"></form>
            </div>`
}

// var grid_item = (url, title) => `<a href="#">
//     <img src="${url}">
//     <div>
//         <span>${title}cccfff</span>
//     </div>
//     </a>`

export var details = (url, title) => `<div class="container details-screen">
    ${toolbar()}
    <div class="grid">
        <img src="${url}">

        <div>
            <span>${title}</span>
        </div>
    </div>
</div>`

export var home = (trendingListings) => `<div class="container home-screen">
    ${toolbar()}
    <div class="grid grid-2-400 grid-4-800 grid-6-1024">
        ${ trendingListings.results.map((etsyListing,index) => {
            console.log(etsyListing)
            return `<a href="#listing/${etsyListing.listing_id}">
                <img src="${etsyListing.Images[0].url_75x75}", 
                <div><span>${etsyListing.title} </span></div>
            </a>`
        }).join('') }
    </div>
</div>`
