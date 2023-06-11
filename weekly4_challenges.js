function LongestWord(sen) {

return sen.match(/[a-zA-Z]+/g)
               .reduce(function(a,b){
                    return a.length>=b.length?a:b;
               })

}


console.log(LongestWord(readline()));