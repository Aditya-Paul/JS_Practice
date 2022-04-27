 
function brickCalculator(floor){

      if(floor<=10){
          var one_ten = 15 * 10;
          var brick = one_ten * floor; 
          return brick;
      }
      else if(floor <= 20){
          var a = 10*15*10;
          var b = floor - 10;
          var eleven_twenty = 10 * 10;
          var bricks = eleven_twenty * b + a ;
          return bricks;
      }
      else {
        var x = 10*15*10;
        var y = 10*10*10;
        var b = floor - 20;
        var twentyone_hundred = 8 * 10;
        var bricks = twentyone_hundred * b + x + y ;
        return bricks;
    }
      
  }

  console.log(brickCalculator(22))
  