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
        'listing/:id/:shop_id': 'detailsRouteHandler',
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
    detailsRouteHandler: function(id, shop_id) {

        $.when(
            api.getDetails(id),
            api.getShop(shop_id)
        ).then((etsyListing_json, etsyShop_json) => {

            console.log(etsyListing_json)
            console.log(etsyShop_json)


            var listingObject = etsyListing_json[0].results[0]

            var shopListingsArray = etsyShop_json.results
            document.body.innerHTML = templates.details(listingObject, shopListingsArray) //querySelector ('.container')?

        }.bind(this))
    },

    search: function(keywords) {
        api.getItem(keyword).then((keywords_json) => {
            document.body.innerHTML = templates.home(keywords_json)
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
