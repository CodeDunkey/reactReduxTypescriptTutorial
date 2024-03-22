
export const func = () => {
    function makeAdder(x: number) {
        return function (y: number) {
            return y;
        };
    }

    console.log("makeAdder(5)", makeAdder(5))
    // const add5 = makeAdder(5);
    // const add10 = makeAdder(10);
    // console.log(add5(2)); // 7
    // console.log(add10(2)); // 12
}
