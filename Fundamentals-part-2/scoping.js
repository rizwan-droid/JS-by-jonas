var a= 'hello';
first();

function first(){
    var b="hii";
    second();

    
    function second(){
        var c = "hey";
        console.log(a+b+c);
    }
}