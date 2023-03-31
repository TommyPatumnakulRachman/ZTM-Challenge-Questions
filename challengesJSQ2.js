
var arr = [1,2,7];
var target = 8;

function twoNums(array , target){

    var answerArr = [];
    for(let i = 0 ; i < array.length ; i++){

        let difference = target - array[i];

        for(let j = 0 ; j < array.length ; j++){
            if(array[j] === difference){
                answerArr.push(array[i]);
                answerArr.push(array[j]);
            }
        }
        if(answerArr.length === 2){
            return answerArr;
        }
    }
}

console.log(twoNums(arr,target));