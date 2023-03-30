function x() {
    for (var i = 1; i <=5; i++) {
        setTimeout(()=>{
            console.log(i);
        },1000);
    }
    console.log("helloooo");
}
x()
