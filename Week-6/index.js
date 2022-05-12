const maxSumContiguousSubarray = (arr) => {
    let maxTillHere = 0;
    let max = 0;
    for (let el of arr) {
        
        maxTillHere = maxTillHere + el;

        if (maxTillHere < 0) {
            maxTillHere = 0;
        }
        
        max = Math.max(maxTillHere, max);
    }
    return max;
}

const example = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

// console.log(maxSumContiguousSubarray(example));


const spiralOrderMatrix = (matrix) => {

    let a=0, b = 0;
    let c = 0, d = matrix[0].length-1;
    let e = matrix.length-1, f = 0;
    let g = matrix.length-1, h = matrix[0].length-1;
    let count = 0;
    let ans=[]
   
    let size=matrix.length*matrix[0].length
        
    while (true) {
        a === 0 && b === 0 ? null : (b++&d--&g--&f++);
      
        for (let i = a; i <= c; i++){
            for (let j = b; j <= d; j++){
                ans.push(matrix[i][j])
                count++
                if(count>=size)return ans
            }
            
        }
        
        c++;
        for (let i = c; i <= g; i++){
            for (let j = d; j <= h; j++){
                ans.push(matrix[i][j])
                count++
                if(count>=size)return ans
            }
        }
        h--;
        for (let i = g; i >= e; i--){
            for (let j = h; j >= f; j--){
                ans.push(matrix[i][j])
                count++
                if(count>=size)return ans
            }
        }
        e--;
        a++;
        for (let i = e; i >= a; i--){
            for (let j = f; j >= b; j--){
                ans.push(matrix[i][j])
                count++
                if(count>=size)return ans
            }
        }
    }
    
}

// console.log(spiralOrderMatrix( [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]] ))


const sort = (arr) => {
    let low = 0, mid = 0;
    let high = arr.length - 1;
    
    while (mid<high){
        switch (arr[mid]) {
            case 0: {
                let temp = arr[low];
                arr[low] = arr[mid];
                arr[mid] = temp;
                low++;
                mid++;
                break;
            }
            case 1: {
                mid++;
                break;
            }
            case 2: {
                let temp = arr[mid];
                arr[mid] = arr[high];
                arr[high] = temp;
                high--;
                break;
            }
        }
    }
    console.log(low,mid,high)
    return arr
}

// console.log(sort([0,2,1,2,0]))

const buySell = (arr) => {
    let min = Number.MAX_VALUE;
    let ans = 0;
    let max = 0;
    for (el of arr) {
        min = Math.min(el, min);
        if (el > min) {
            ans = el - min;
            max = Math.max(max, ans);
        }
    }
    return max
}

// console.log(buySell( [7,1,5,3,6,4]));

const diffExists = (arr,diff) => {
    const freq = new Map();
    for (let el of arr) {
        let prev = freq.get(el)
        freq.set(el, !prev?1:prev+1);
    }
    for (let el of arr) {
        let reqd = el - diff;
        if (freq.has(reqd)) return true;
    }
    return false;
}

// console.log( diffExists([5, 10, 3, 2, 50, 80],78))

const threeSum = (arr, sum) => {
    arr.sort((a, b) => a - b);
    let curr
    for (let i = 0; i < arr.length; i++){
        let low = i+1;
        let high = arr.length - 1;
        while (low < high) {
            curr = arr[low] + arr[high] + arr[i];
            
            if (curr === sum) return curr;
            else if (curr > sum) high--;
            else if (curr < sum) low++;
        }
    }
    return curr;
}

// console.log(threeSum([-1,2 ,1 ,-4],1))


