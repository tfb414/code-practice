var menu = {
    menuItem1: {
        href: "#",
        title: "Thing 1"
    },
    menuItem2: {
        href: "#",
        title: "Thing 2"
    },
    menuItem3: {
        href: "#",
        title: "Thing 3"
    },
    menuItem4: {
        href: "#",
        title: "Thing 4"
    }
    
}

var $menuPlacement = $("[data-target='menu-placement']");

function getKeysFrom(object){
    keys = Object.keys(object);
    return keys;
}

// function get(prop, key, object){
//     console.log(Object.prop);
//     return Object.prop;
// }

function injectAnArray(whatToInject, whereToInject){
    whereToInject.each(function (i){
        this.textContent = whatToInject[i]
   })
}

function createMenu(){
    var keys = getKeysFrom(menu);
    var navTitles = thingy(menu, keys, "title");
    injectAnArray(navTitles, $menuPlacement);
}

function initialize(){
    createMenu();
    $(document).ready(function() {
        $("button").click(function(){
            console.log("derp");
            $('[data-target="nav-bar-hidden"]').toggleClass("nav-bar-hidden");
        })
    })
        
    
}
initialize();



function thingy(object, keys, prop){
    return keys.map(function(key){
        return object[key][prop];
    })
}

