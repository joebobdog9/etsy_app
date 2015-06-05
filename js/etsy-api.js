var $ = require('jquery'),
    apikey = `dk9r97xvddrnrxx6epurwx4w`,
    search = (q, key) => `https://openapi.etsy.com/v2/listings/search.js?q=${q}&api_key=${key}`,
    details = (id, key) => `https://openapi.etsy.com/v2/listings/${id}.js?api_key=${key}`,
    trending = (key) => `https://openapi.etsy.com/v2/listings/active.js?callback=?&api_key=${key}`

export var getTrending = () => {
    return $.getJSON(trending(apikey))
}

export var getDetails = (id) => {
    return $.getJSON(details(id, apikey))
}

export var getSearch = (q) => {
    return $.getJSON(search(q, apikey))
}