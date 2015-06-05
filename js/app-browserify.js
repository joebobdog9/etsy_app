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
        'details/:id': 'details',
        '*default': 'home'
    },
    home: function(){
        api.getTrending().then((data) => {
            document.body.innerHTML = templates.home(data)
        })
    },
    details: function(id){
        api.getDetails(id).then((json) => {
            var v = json.data
            document.body.innerHTML = templates.details(v.images.original.url, v.source)
        })
    },
    initialize: function(){
        backbone.history.start()
    }
})

var router = new GiphyRouter()

















