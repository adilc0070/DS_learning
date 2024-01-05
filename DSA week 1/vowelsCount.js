function countVowels(s){
    let count=0
    let vowels="AaEeIiOoUu"
    for(i=0;i<s.length;i++){
        if(vowels.includes(s[i])){
            count++
        }
    }
    return count
}

console.log(countVowels(""))

