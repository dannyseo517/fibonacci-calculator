const fibonacci = (numb: number): number[] => {
    const arr = [0, 1];
    for (let i = 2; i < numb + 1; i++){
        arr.push(arr[i - 2] + arr[i -1])
    }
    return arr;
};

export {
    fibonacci,
}