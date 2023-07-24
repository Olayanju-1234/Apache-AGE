const makeFunc = (type) => (arg1, arg2) => ({
    type: type,
    expr: [arg1, arg2]
});

const evaluate = (node) => {
    if (!node) {
        return 0;
    }

    switch (node.type) {
        case "ADD":
            return evaluate(node.expr[0]) + evaluate(node.expr[1]);
        case "MUL":
            return evaluate(node.expr[0]) * evaluate(node.expr[1]);
        case "SUB":
            return evaluate(node.expr[0]) - evaluate(node.expr[1]);
        case "FIBO":
            return evaluate(node.expr[0]) + evaluate(node.expr[1]);
        default:
            return node;
    }
};

const ADD = "ADD";
const MUL = "MUL";
const SUB = "SUB";
const FIBO = "FIBO";

const add = makeFunc(ADD)(10, 6);
const mul = makeFunc(MUL)(5, 4);
const sub = makeFunc(SUB)(mul, add);
const fibo = makeFunc(FIBO)(sub, null);

const result_add = evaluate(add);
const result_mul = evaluate(mul);
const result_sub = evaluate(sub);
const result_fibo = evaluate(fibo);

console.log(`add : ${result_add}`);
console.log(`mul : ${result_mul}`);
console.log(`sub : ${result_sub}`);
console.log(`fibo : ${result_fibo}`);
