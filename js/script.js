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
// FNZIONE CHE PERMETTE L'INSERIMENTO DEI NUMERI DELL'UTENTE
function getUserNumber(){
    let userNumber = [];
    while(userNumber.length < 5){
        let number = parseInt(prompt('Inserisci un numero'));
        if(!userNumber.includes(number)){
            userNumber.push(number);
        }
    }
    return userNumber;
}
// DEFINAMO UN ARRAY VUOTO CHE CONTIENE I NUMERI GENERATI ED UNO HE CONTERRA I NUMERI INSERITI DAL UTENTE

let randomNumber= [];

// ESEGUIRE UN CICLO FOR PER POPOLARE L'ARRAY DEI NUMERI CASUALI

for(let i=0; i<5; i++){
    let number = generateRandomNumber(1,50);

    if(uniqueRandomNumber(randomNumber,number)){
        randomNumber.push(number);

    }
   
}
console.log(randomNumber);
document.getElementById('random-number').innerHTML =randomNumber;
//TIMEOUT CHE NASCONDE I NUMERI
setTimeout(function(){
    document.getElementById('random-number').innerHTML = '';
    document.getElementById('message').innerHTML = ' Inserire i numeri che ti ricordi';
},5000)

setTimeout(function(){
    // RICHIAMO LA FUNZIONE CHE PERMETTE L'INSERIMENTO DEI NUMERI DA PARTE DEL UTENTE
    let userNumber = getUserNumber();
    let guessedNumber = [];
    let score = 0;
    console.log(userNumber);
    for(let i=0; i<randomNumber.length; i++){
        if(randomNumber.includes(userNumber[i])){
            guessedNumber.push(userNumber[i]);
            score++;
        }
    }
    document.getElementById('message').innerHTML =  `hai indovinato ${score} numeri . I numeri coretti soo ${guessedNumber}` ;
},6000);