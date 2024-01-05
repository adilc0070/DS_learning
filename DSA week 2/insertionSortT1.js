function insertion(a){
    for(i=1;i<a.length;i++){
        let checking=a[i] ,j =i-1
        while(j>=0&& a[j]>checking){
            a[j+1] =a[j]
            j-=1
        }
        a[j+1]=checking
    }

    console.log(a);
}

insertion([ 3, 2, 1, 4, 5 ])