// linear implementation
const fibonacci = (numb: number): number[] => {
    const arr = [0, 1];
    if (numb === 0 || numb === 1) {
        return [0];
    }
    for (let i = 2; i < numb; i++){
        arr.push(arr[i - 2] + arr[i -1])
    }
    return arr;
};

// recursion implementation
const fibonacciRecursion = (n: number):number[] => {
    if (n === 1 || n === 0) {
        return [0];
    } else if (n === 2) {
        return [0, 1];
    } else {
        const s = fibonacciRecursion(n - 1);
        s.push(s[s.length - 1] + s[s.length - 2]);
        return s;
    }
};

export {
    fibonacci,
    fibonacciRecursion,
}