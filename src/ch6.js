//var fib = function (n) {
//    return n < 2 ? n : fib(n - 1) + fib(n - 2);
//};

var fib2 = (function () {
    var memo = [0, 1];
    var fib = function (n) {
        var result = memo[n];
        if (typeof result !== 'number') {
            result = fib(n - 1) + fib(n - 2);
            memo[n] = result;
        }
        return result;
    };
    return fib;
})();
//console.log(fib2(3));
/**
 * 记忆效应
 * @param memo
 * @param formula
 * @returns {recur}
 */
var memorizer = function (memo, formula) {
    var recur = function (n) {
        var result = memo[n];
        if (typeof result !== 'number') {
            //formula用来求具体的n 委托recur计算需要的值
            result = formula(recur, n);
            memo[n] = result;
        }
        return result;
    };
    return recur;
};

var fib3 = memorizer([0, 1], function (recur, n) {
    return recur(n - 1) + recur(n - 2);
});

var fac = memorizer([0, 1], function (recur, n) {
    return n * recur(n - 1);
});

console.log(fib3(100000));
console.log(fac(3));
