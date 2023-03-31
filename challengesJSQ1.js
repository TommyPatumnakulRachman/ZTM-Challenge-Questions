var arr = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];


function sortArray(array){

    let length = array.length;

    for(let i = 0; i < length; i++){
       
        for(let j = 0; j < length-1; j++){
        
            if(array[j] > array[j+1]){
                let temp = array[j+1];
                array[j+1] = array[j];
                array[j] = temp;
            }

        }

    }

    return array;

}

for(item of sortArray(arr)){
    console.log(item);
}






function findDuplicates(arr) {
    let duplicates = [];
    let counts = {};
    // creates an object of each element and counts how  any elements are shown for each number.
    
    // count occurrences of each element in the array
    for (let i = 0; i < arr.length; i++) {
      let element = arr[i];
      if (counts[element] === undefined) {
        counts[element] = [element];
      } else {
        counts[element].push(element);
      }
      console.log(element+ ": " + counts[element]);

    }
    
    // add subarrays with duplicates to the duplicates array
    for (let element in counts) {
      
        if (counts[element].length > 1) {
        duplicates.push(counts[element]);
        }
        else{
            duplicates.push(element);
        }

        console.log('subArray: ' , counts[element])

      
    }
    
     // print out the properties of counts
  console.log("Properties of counts:");
  for (let prop in counts) {
    console.log(prop + ": " + counts[prop]);
  }

    return duplicates;
  }




  let duplicates = findDuplicates(arr);
console.log(duplicates);