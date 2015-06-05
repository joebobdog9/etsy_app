var toolbar = function() {
    return `<div class="toolbar">
                <a href="#" class="logo">SEARCH</a>
                <form><input type="search"></form>
            </div>`
}

var grid_item = (url, title) => `<a href="#">
    <img src="${url}">
    <div>
        <span>${title}</span>
    </div>
</a>`

export var details = (url, title) => `<div class="container details-screen">
    ${toolbar()}
    <div class="grid">
        <img src="${url}">

        <div>
            <span>${title}</span>
        </div>
    </div>
</div>`

export var home = (trending) => `<div class="container home-screen">
    ${toolbar()}
    <div class="grid grid-2-400 grid-4-800 grid-6-1024">
        ${ trending.results.map((v,i) => {
            return `<a href="#details/${v.id}">
                <img src="${v.url}"
                <div><span>${v.title} </span></div>
            </a>`
        }).join('') }
    </div>
</div>`
