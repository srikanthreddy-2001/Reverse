//1 Reverse of a number program

let rev = 0;
let num = 123456;
let rem;
while(num != 0){
 	rem = num % 10;
    rev = rev * 10 + rem;
    num = Math.floor(num/10);
}

 console.log("Reverse number : "+rev);
