var $ = require('jquery'),
    apikey = `dk9r97xvddrnrxx6epurwx4w`,
    search = (q, key) => `https://openapi.etsy.com/v2/listings/search.js?q=${q}&api_key=${key}`,
    listing = (id, key) => `https://openapi.etsy.com/v2/listings/${id}.js?callback=?&api_key=${key}&includes=Images`,
    trending = (key) => `https://openapi.etsy.com/v2/listings/active.js?includes=Images:1:0&callback=?&api_key=${key}`

console.log(trending(apikey))
export var getTrending = () => {
    return $.getJSON(trending(apikey))
}

export var getDetails = (id) => {
    return $.getJSON(listing(id, apikey))
}

export var getSearch = (q) => {
    return $.getJSON(search(q, apikey))
}

