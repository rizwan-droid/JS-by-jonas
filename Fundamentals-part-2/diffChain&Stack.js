var a= 'hello';
first();

function first(){
    var b="hii";
    second();

    
    function second(){
        var c = "hey";
        console.log(a+b+c);
        third();
    }
}
function third(){
    var d="john";
    console.log(d)
}

// global=a--first=a,b--second=a,b,c---third=a,d .... according to the scopes
// stacks is created acc to the function.