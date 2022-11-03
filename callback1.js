function one(x , second) {
    console.log(1);
    console.log(x)
    second();
}


let y = 10
let two = (name)=>{
    console.log(2);
    console.log(name)
}

one(y, ()=>{two("hello")} )

// x = 10 
// second = ()=>{two("hello")}




