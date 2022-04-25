//find smallest string in an array//
var names = ["apples", "mott", "mght", "apfsgfhsdyhp","or", "mangdg", "mangoogjdths"];
var c =[];
 function tinyNames(names){
    for (i=0; i<names.length; i++){
            var a = names[i].length;
            c.push(a)
            var min = Math.min(...c)
            if(a==min){
                var x = names[i]
               }
   }
    return x
    
  }

console.log(tinyNames(names));

//another way to find smallest string in an array//
var arr = ["aaaa", "aa", "aa", "aaaaa", "a", "aaaaaaaa"];
function tinynames(){

  var a = arr.reduce((a, b) => a.length <= b.length ? a : b)
    return a
}

console.log(tinynames(arr))


// smallest length of a string in an array//
var brr = ['cats', 'giants', 'daughters', 'ice'];
function tinyname(){

  var b = Math.min(...brr.map(({ length }) => length));
    return b
}

console.log(tinyname(brr))

