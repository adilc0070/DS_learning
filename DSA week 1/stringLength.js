function lastWordLength(s){
    let words=s.split(' ').filter(words=>words.length>0)
    
    if(words.length==0){
        return 0
    }

    return words.at(-1).length
}


console.log(lastWordLength("adil have a car"))