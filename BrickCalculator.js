 
function brickCalculator(floor){

      if(floor<=10){
          var one_ten = 15 * 10;//per floor = 15 feet for 1 to 10 floor & per feet needed 10 bricks 
          var brick = one_ten * floor; 
          return brick;
      }
      else if(floor <= 20){
          var a = 10*15*10;//per floor = 15 feet for 1 to 10 floor & per feet needed 10 bricks 
          var b = floor - 10;
          var eleven_twenty = 10 * 10; //per floor = 10 feet for 11 to 20 floor & per feet needed 10 bricks 
          var bricks = eleven_twenty * b + a ;
          return bricks;
      }
      else {
        var x = 10*15*10;//per floor = 15 feet for 1 to 10 floor & per feet needed 10 bricks 
        var y = 10*10*10;//per floor = 10 feet for 11 to 20 floor & per feet needed 10 bricks
        var b = floor - 20;
        var twentyone_hundred = 8 * 10;//per floor = 8 feet for 21 to 100 floor & per feet needed 10 bricks
        var bricks = twentyone_hundred * b + x + y ;
        return bricks;
    }
      
  }

  console.log(brickCalculator(22))
  