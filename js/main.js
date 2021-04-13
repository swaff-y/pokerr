console.log("Test")
// $(document).ready(function(){
// });

const arr = ["2C","2C","2H","9C","TC","3S","3D","5H","9H","8H"];

const game = (arr) => {
  const player1 = arr.slice(0,5);
  const player2 = arr.slice(5,10);

  const iffr = (value) => {
    let first = value;
    if(value === 'T'){
      first = "10";
    }else if(value === 'J'){
      first = "11";
    }else if(value === 'Q'){
      first = "12";
    }else if(value === 'K'){
      first = "13";
    }else if(value === 'A'){
      first = "14";
    }
    return first;
  }

  const play1 = player1.map((value,index)=>{
    let first = value.split('')[0];

    first = iffr(first);

    return first;
  })
  const play2 = player2.map((value,index)=>{
    let first = value.split('')[0];

    first = iffr(first);

    return first;
  })
  const play1Suit = player1.map((value,index)=>{
    let first = value.split('')[1];

    return first;
  })
  const play2Suit = player2.map((value,index)=>{
    let first = value.split('')[1];

    return first;
  })

  const first = play1.sort((a,b)=>a-b);
  const second = play2.sort((a,b)=>a-b);

  const arr1 = [];
  for( let i = 0; i < arr1.length; i++ ){
    arr1[i] = arr1
  }



  // console.log(first, play1Suit, second, play2Suit);


  const numberComp = (arr,arr2) => {
    let value = 1;
    let highCard = arr[4];
    let suit = false;
    let straight = false;

    // console.log(arr);

    if(arr2[0] === arr2[1] && arr2[0] === arr2[2] && arr2[0] === arr2[3] && arr2[0] === arr2[4]){
      suit = true;
    }
    let count = 0;
    for( let i = 0; i < 4; i++ ){
      if(parseInt(arr[i]) === (parseInt(arr[i + 1]) - 1)){
        count++;
      }
    }
    if(count === 4) straight = true;

    // console.log("straight: ",straight, count, arr[4], highCard);

    let pairCounter = 0;
    for( let i = 0; i < 4; i++ ){
      if(arr[i] === arr[i + 1] ){
        pairCounter++;
        highCard = arr[i];
      }
    }
    let threeCounter = 0;
    for( let i = 0; i < 3; i++ ){
      if(arr[i] === arr[i + 1] && arr[i] === arr[i + 2]){
        threeCounter++;
        highCard = arr[i];
      }
    }
    let fourCounter = 0;
    for( let i = 0; i < 2; i++ ){
      if(arr[i] === arr[i + 1] && arr[i] === arr[i + 2] && arr[i] === arr[i + 3]){
        fourCounter++;
        highCard = arr[i];
      }
    }

    // console.log(arr[0],arr[4],suit);
    if(arr[0] === '10' && arr[1] === '11' && arr[2] === '12' && arr[3] === '13' && arr[4] === '14' && suit === true){
      value = 10;
    }else if(suit === true && straight === true){
      value = 9;
    }else if(fourCounter === 1){
      value = 8;
    }else if(pairCounter === 3 && threeCounter === 1){
      value = 7;
    }else if(suit === true){
      value = 6;
    }else if(straight === true){
      value = 5;
    }else if(pairCounter === 2 && threeCounter === 1){
      value = 4;
    }else if(pairCounter === 2 && threeCounter === 0){
      value = 3;
    }else if(pairCounter === 1 && threeCounter === 0){
      value = 2;
    }else if(pairCounter === 0){
      value = 1;
      highCard = arr[4];
    }
    // console.log(pairCounter);
    return [value, parseInt(highCard)];
  }


  if(numberComp(first, play1Suit)[0] > numberComp(second, play2Suit)[0]){
    return 1;
  }else if(numberComp(first, play1Suit)[0] === numberComp(second, play2Suit)[0]){
    if(numberComp(first, play1Suit)[1] > numberComp(second, play2Suit)[1]){
      return 1;
    }else if(numberComp(first, play1Suit)[1] === numberComp(second, play2Suit)[1]){
      if(play1[4] > play2[4]){
        return 1;
      }else{
        return 2;
      }
    }else{
      return 2;
    }
  }else{
    return 2;
  }
}

console.log(game(arr));
