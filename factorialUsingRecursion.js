function factUsngRcrsion(num) {
    if (num <= 0) {
        return 1
    }
    return num * factUsngRcrsion(num - 1)
}

console.log("factoral: ", factUsngRcrsion(-5));
