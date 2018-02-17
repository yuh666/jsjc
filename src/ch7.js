var mammal = function (spec) {
    var that = {};
    that.get_name = function () {
        return spec.name;
    };
    that.say = function () {
        return spec.saying || '';
    };
    return that;
};

//var mammal = mammal({name: "specify"});
//console.log(mammal.get_name());

var cat = function (spec) {
    spec.saying = spec.saying || 'meow';
    var that = mammal(spec);
    that.purr = function (n) {
        var s = '';
        for (var i = 0; i < n; i++) {
            if (s) {
                s += '-';
            }
            s += 'r';
        }
    };
    that.get_name = function () {
        return that.say() + spec.name + that.say();
    };
    return that;
};

Function.prototype.method = function (name, func) {
    if (!this.prototype[name]) {
        this.prototype[name] = func;
    }
};

Object.method('superior', function (name) {
    var that = this;
    var func = that[name];
    return function () {
        return func.apply(that, arguments);
    };
});

var coolcat = function (spec) {
    var that = cat(spec);
    var super_get_name = that.superior('get_name');
    that.get_name = function () {
        return 'like ' + super_get_name() + ' baby';
    };
    return that;
};

var cl = coolcat({name:'coolcat'});
console.log(cl.get_name());

//{}的构造函数就是Object 原型就是Object.prototype
//构造对象时传入一个{} 此时使用另一个对象字面量操作spec里面的属性 继承就是调用上一级函数 拿到上一级别的that 就可以调用上一级的方法
//一旦字段名称重复 就利用superior方法 调用上一级别里面的apply方法 在一个匿名函数中使用自己作用域调用的方式是 利用一个中间的that 然后利用
//apply指定作用域