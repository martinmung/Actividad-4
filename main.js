var num = prompt("Introduce un número: ")

var index = 1

//while

while (index <= num){
    if (index % 5 == 0){
        console.log(index)
    }
    index++
}

//do-while

do{
    if (index % 5 == 0){
        console.log(index)
    }
    index++
}while(index <= num)


//for 


for (var index = 1; index <= 50; index++ ){
    if(index % 2 != 0){
        console.log(`${index} es impar`)
    }
}