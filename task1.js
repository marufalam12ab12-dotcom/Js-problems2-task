function smallest (heights2){
    console.log(heights2);
    let s = heights2[0];
    for(heights of heights2){
        if(heights < s){
            s = heights;
        }
    }
    return s;
}
const heights2 = smallest([167, 190, 120, 165, 137]);
console.log(heights2);
