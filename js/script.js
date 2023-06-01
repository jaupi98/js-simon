// FUNZIONE CHE GENERA NUMERI CASUALI
function generateRandomNumber(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}
// FUNZIONE CHE VERIFICA SE IL NUMERO E GIA PRESENTE NEL ARRAY SE NON E RESENTE LO AGGIUNGE
function uniqueRandomNumber(array, number){
    let check = false
    while(check=== false){
        if(!array.includes(number)){
            check =true
        }
        
    }
    return true;
}
// DEFINAMO UN ARRAY VUOTO CHE CONTIENE I NUMERI GENERATI ED UNO HE CONTERRA I NUMERI INSERITI DAL UTENTE

let randomNumber= [];
let userNumber = [];

// ESEGUIRE UN CICLO FOR PER POPOLARE L'ARRAY DEI NUMERI CASUALI

for(let i=0; i<5; i++){
    let number = generateRandomNumber(1,50);

    if(uniqueRandomNumber(randomNumber,number)){
        randomNumber.push(number);

    }
   
}
console.log(randomNumber);
document.getElementById('random-number').innerHTML =randomNumber;