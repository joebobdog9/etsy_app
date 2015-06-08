"use strict";

// es5 polyfills, powered by es5-shim
require("es5-shim")
    // es6 polyfills, powered by babel
require("babel/register")

var Promise = require('es6-promise').Promise
var $ = require('jquery')
var backbone = require('backbone')
import * as templates from "./templates.js"
import * as api from "./etsy-api.js"



// create router constructor
var GiphyRouter = backbone.Router.extend({
    routes: {
        'listing/:id': 'detailsRouteHandler',
        '*default': 'home',
        'search/:keywords': 'search'
    },
    home: function() {
        api.getTrending().then((dataJsonObj) => {
            // var json = json
            // var displayImage = json.results[0].Images[0].url_570xN;
            document.body.innerHTML = templates.home(dataJsonObj)
        })
    },
    detailsRouteHandler: function(id) {
        api.getDetails(id).then((json) => {
            var json = json
            console.log(json);
            console.log(json.results[0].title)
            console.log(templates.details)


            var listingMainImage = json.results[0].Images[0].url_570xN;
            var listing_title = json.results[0].title;
            document.body.innerHTML = templates.details(listingMainImage, listing_title)
        })
    },

    search: function(keywords) {
        api.getItem(keyword).then((keywords_json) => {
            document.body.innerHTML=templates.home(keywords_json)
        })
    },

    initialize: function() {
        backbone.history.start()
    }
})

var router = new GiphyRouter()

$('body').on('submit', "form.search", (event) => {
    event.preventDefault();
    window.location.hash = `search/${document.querySelector("input[type=search]").value}`
})

