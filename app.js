var splitWordsBySeparator = function (words, separator) {
    console.log(words.join(separator)+"\n",words.join(separator).split(separator));
    return words.join(separator).split(separator).filter(val=>val!='')
    

};
console.log(splitWordsBySeparator(["one.two.three","four.five","six"],"."));