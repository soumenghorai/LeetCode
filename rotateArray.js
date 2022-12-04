function reverseArray(num, start, end){
    while(start<end){
        let temp = num[start];
        num[start] = num[end];
        num[end] = temp;

        start++;
        end--;
    }
    return num;
}

function rightRotate(num, k, n){
    k = k % n;
    reverseArray(num, 0, n - 1);
    reverseArray(num, 0 , k - 1);
    reverseArray(num, k, n - 1);
    return num;
}
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let n = num.length;
let k = 3;
console.log(rightRotate(num, k, n));