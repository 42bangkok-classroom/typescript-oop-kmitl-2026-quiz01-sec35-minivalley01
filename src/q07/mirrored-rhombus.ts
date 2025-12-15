const input5 = +process.argv[2];
if (Number.isNaN(input5)|| input5 <= 0){
    process.exit()
}
for (let i = 0; i < input5; i++){
    let result = '';
    for (let k = input5+1 ; k>0; k++){
        result += ' '
    }
    for (let j = 0; j < input5; j++){
        result += '*'
    }
    console.log(result)
}