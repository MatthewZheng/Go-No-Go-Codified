var math = require("mathjs");
const readline = require("readline");
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

var cosSim = (function Mange(){
  
    //returns number of times a str appears
    function countStr(someS){
        var counter = {};
        someS.split(" ").forEach(function(v) { counter[v] = (counter[v] || 0) +1; });
        return(counter);
    };
    
    function makeMatrix(str1, str2){

        //implements union: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
        Set.prototype.union = function(setB) {
            var union = new Set(this);
            for (var elem of setB) {
                union.add(elem);
            }
            return union;
        }

        var count1 = countStr(str1), count2 = countStr(str2);
        var join1 = new Set(count1.keys()), join2 = new Set(count2.keys());
    };

    return{
        countStr: countStr,
        makeMatrix: makeMatrix
    }

})();


//Setup interface for readline
rl.prompt();
rl.on('line', (line) =>{
    line === "exit" ? process.exit(0) : console.log(cosSim.countStr(line)), rl.prompt();
})
