function main(size){
    var location = [size ,size];
    // var routes = [[1,1], [2,2], [3,3]];
    var routes = [[1],[2],[3],[4],[5]];
    // routes.push([size, size]);
    var i;
    // for(i = 0; i < 10; i++){
    //     var currentRoute = [];
    //     while (location[0] > 0 or location[1] > 0){
    //         currentRoute.push(location);

    //     }
    //     routes.push(currentRoute);
    // }
    // var regexp = new RegExp(/[1,1]/)
    // console.log()
    // checkIfLogged(routes, regexp);
    // if(routes.indexOf([1,1])>= 0){
    //     console.log('yup')
    // }
    // console.log(routes);
    // console.log(routes.indexOf([1]));
    var test = [1];

    var findOne = function(haystack, arr){
        return arr.some(function(v){
            return haystack.indexOf(v) >= 0;
        })
    }
    console.log(findOne(test, routes));
}

function checkIfLogged(whatArrayToCheck, routeToTest){
    console.log(routeToTest);
    // console.log(whatArrayToCheck.search(routeToTest))
}

main(1);

// start with a 1x1 and come up with all the solutions, then go to the next one up. each 