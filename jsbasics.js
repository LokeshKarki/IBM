function test(foo)
{
    console.log("inside test...")
    foo()
}
function bar()
{
    console.log("inside bar...")
    return bar;
}
function zoo()
{
    console.log("inside test...")
}


// printMe(foo);

// printMe(bar);
//printMe(function (){console.log('inside test funtion')})
//printMe(()=>console.log('inside yet another function'))
