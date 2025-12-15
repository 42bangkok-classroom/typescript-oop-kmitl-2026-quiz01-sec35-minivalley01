const input1 = process.argv[2];
const input2 = process.argv[2];
const a = Number(input1);
const b = Number(input2);
if (Number.isNaN(a)|| point < 0){
    process.exit()
}else{
    if(point >= 80){
        console.log('A');
    } else if (point>= 70){
        console.log('B');
    } else if (point>= 60){
        console.log('C');
    } else if (point>= 50){
        console.log('D'); 
    }else {
        console.log('F');
    }  
}