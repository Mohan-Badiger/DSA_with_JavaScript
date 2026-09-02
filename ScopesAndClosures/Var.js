//var is function scoped variable 
// if i initialize inside funcion and call inside only
//if i initialize outside of function it call inside and outside both 


function print() {

    var name = "Mohan" //initialized inside function and called inside so it will run 
    console.log(name);
    console.log(sirname);


    function c() {
        console.log("C function :", name);
    }

    c()

}

//console.log(name); //name will only call inside the function because var is function scoped variable

var sirname = "Badiger" //outside fuction it was initialized so it run inside function.

print()