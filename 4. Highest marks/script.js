let arr = [
    [81,29,41,53,54],  //Marks of Student 1
    [52,43,44,65,66],  //Marks of Student 2
    [38,46,54,86,17],  //Marks of Student 3
    [55,38,78,47,66],  //Marks of Student 4
    [38,78,45,46,88]  //Marks of Student 5
  ];
  let arr2 = new Array(3);
  let highScore = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < 5; j++) {
      if (arr[i][j] > highScore) {
        highScore = arr[i][j];
      }
  
    }
    arr2[i] = highScore;
  }
  
  let Student1 = arr2[0];
  let Student2 = arr2[1];
  let Student3 = arr2[2];
  
  
  for (let i = 1; i <= 3; i++) {
    document.write("Highest mark score by Student" + i + " is: " + arr2[i - 1]+"<br>");
    
  }
  