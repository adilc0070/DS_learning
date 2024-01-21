function revrese(s){
    if(s.length===0){
        return ""
    }
    return s[s.length-1]+revrese(s.slice(0,s.length-1))
}
console.log(revrese("hello"));

function reverse(s){
    if(s.length<=1){
        return s
    }
    return reverse(s.slice(1))+s[0]
}
console.log(reverse("helloH"));