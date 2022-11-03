

function one(x , second) {
    console.log(1);
    console.log(x)
    second();
}

let two = () => {
    console.log(2);
}
let y = 10;


one(10 , ()=>{console.log(2)}  )

// second =  ()=>{console.log(2)}
