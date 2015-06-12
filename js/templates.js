var toolbar = function() {
    return `<div class="toolbar">
                <a href="#" class="logo">gETSY</a>
                <form class='search'><input type="search"></form>
            </div>`
}

var grid_item = (url, title) => `<a href="#">
    <img src="${url}">
    <div>
        <span >${title}</span>
    </div>
    </a>`

export var details = (objectListing, dataArray ) => { 
    console.log(objectListing);
    console.log(dataArray)

    var mappedImages = objectListing.Images.map((imageObj) => {
        return `<img src= "${imageObj.url_75x75}">`
    })

    var mainImage = mappedImages.shift(),
    secondaryImages = mappedImages.join('')
    
    return `<div class="container details-screen">
                ${toolbar()}
                <div class="grid">
                    <img src="${objectListing.Images[0].url_570xN}">
                    console.log()
                    <div>
                        <div class="detail-title">${dataArray[0].title, dataArray[0].description}</div>
                        <div class="secondary-images"> ${secondaryImages} </div>
                    </div>
                </div>
            </div>`
}

export var home = (trendingListings) => `<div class="container home-screen">
    ${toolbar()}
    <div class="grid grid-2-400 grid-4-800 grid-6-1024 listing_link">
        ${ trendingListings.results.map((etsyListing,index) => {
            console.log(etsyListing)
            return `<a href="#listing/${etsyListing.listing_id}/${etsyListing.Shop.shop_id}" class="single-listing">
                <img src="${etsyListing.Images[0].url_170x135}", 
                // <br>
                <p class="text-block">${etsyListing.title} </p>
            </a>`
        }).join('') }
    </div>
</div>`