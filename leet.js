let array = []
var lengthOfLongestSubstring = function() {
    //let s = "abcabcbb"
   let s = "pwwkew"
    
    
    
    for(let i=0; i<s.length; i++){
        let count = 0
        for(let j=0; j<array.length; j++){
            if(s.charAt(i)==array[j]){
                  count++
                  break
            }
        }
        if(count==0){
            array.push(s.charAt(i))
        }
    }
    return array
    
}



console.log(lengthOfLongestSubstring());

console.log(array.length);
