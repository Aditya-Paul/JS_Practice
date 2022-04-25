
function brickCalculator(floor){
    for(i=0; i<floor; i++){
      if(i<=10){
          var oneToten = 15 * 10;
          var brick = oneToten * floor; 
          return brick;
      }
      else if((i >= 11) && (i <= 20)){
          var ten_twenty = 10 * 10;
          var bricks = ten_twenty * floor ;
          // var tbricks = brick + bricks;
      }
      var tbricks = brick + bricks;
       return tbricks;
  }
  }
  console.log(brickCalculator(12))
  