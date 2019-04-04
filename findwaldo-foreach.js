// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  arr.forEach(function(element, index) {
   if(element === "Waldo")
    actionWhenFound(index);
  });
  }  
  
  function actionWhenFound(idx) {
    console.log("Found Waldo at index " + idx + "!");
  }
  
  findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);