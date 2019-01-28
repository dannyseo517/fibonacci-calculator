const getFibonacciArr = (reducer: any) => {
    return reducer && reducer.get('fibonacciArr');
};

export {
    getFibonacciArr,
};