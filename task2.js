const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

function names (heights2){
    const len = heights2.length;
    let he = heights2[0];
    for(heights of heights2){
        if(heights.length < he.length){
            he = heights;
        }
    }
    return he;
}

const result = names(heights2);
console.log(result);
