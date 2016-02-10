function cats(catname) {
    
    return function(color, age) {
        
        if (catname === 'carrie') {
            console.log("it's Penny" + color + age);
        }
        
        if (catname === 'charlotte') {
            console.log("it's charlotte" + color + age);
        }
    }
}

var createcat1 = cats('carrie');
var createcat2 = cats('charlotte');

createcat1('grey', '5');
createcat2('tabby', '10'); 