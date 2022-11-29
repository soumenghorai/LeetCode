function removeDuplicates(num, n){

    // To store index of next unique element
    let j = 0;

    for(let i = 0; i<n; i++){
        if(num[j] != num[i]){
            // ++j;
            num[++j] = num[i];
        }
    }
    return j+1
}
let num = [ 1, 2, 2, 3, 4, 4, 4, 5, 5 ];
let n = num.length;
console.log(removeDuplicates(num, n));