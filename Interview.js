function sample(input) {
    input()
    console.log("sample");  
}

function hello() {
    console.log('hello');
}

sample(hello)

function newP() {
    return new Promise ((resolve,reject)=>{
        setTimeout(() => {
            let access = false
            if(access){
resolve('true')
            }else{
                reject('false')
            }
        }, 1000);
    })
}

newP().then((response)=>{
    console.log('res', response);
}).catch((err)=>{
    console.log('errr',err);
})