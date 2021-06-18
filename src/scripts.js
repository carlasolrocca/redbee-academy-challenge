let features = {
    sumTwoNumbers: function(numA, numB){
        return numA + numB;
    },
    sumArrayNumbers: function(arrayNumbers){
        let result = arrayNumbers.reduce(function(i, num){
            return i + num;
        })
        return result
    },
    compareNumbers: function(a, b, c){
        if(isNaN(a+b+c) == false){
            return Math.max(a, b, c);
        } else {
            console.log('You can only enter numbers in this function')
        }
    },
    compareArrayNumbers: function(listA, listB){
      let finalArray = []
      let minList = []
      let maxList = []

      if(listA.length < listB.length){
        minList = listA
        maxList = listB
      } else {
        minList = listB
        maxList = listA
      }

      for(let i = 0; i < minList.length; i++){
          if(listA[i] > listB[i]){
            finalArray.push(listA[i])
          } else {
            finalArray.push(listB[i])  
          }
      }

      for(let j = minList.length; j < maxList.length; j++){
        let lastNumbers = listB[j]
        finalArray.push(lastNumbers)
      }

      return finalArray
    }
}


/*
console.log(features.sumTwoNumbers(5,10));
console.log(features.sumArrayNumbers([80,10,10]));
console.log(features.compareNumbers(7,8,10));
console.log(features.compareArrayNumbers([1,2,5], [80,5,97,10,100]));
*/