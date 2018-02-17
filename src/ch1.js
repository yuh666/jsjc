window.onload = function () {

    var obj1 = {};
    obj1['name'] = "ok";

    if (typeof Object.beget !== 'function') {
        Object.create = function (o) {
            var F = function () {
            }
            F.prototype = o;
            return new F();
        }
    }

    var another_obj = Object.create(obj1);
    //console.log(another_obj.name);

    //another_obj.name = "ok1";
    //console.log(another_obj.name);
    //console.log(obj1.name);
    //console.log(Object.prototype);

    var myObject = {
        num: 1,
        increment: function (incr) {
            return this.num += typeof incr === 'number' ? incr : 1;
        }
    };

    function add(a, b) {
        return a + b;
    }

    var num = 2;

    myObject.double1 = function () {
        var helper = function () {
            this.num = add(this.num, this.num);
        };
        helper();
    }



    myObject.double = function () {
        var that = this;
        var helper = function () {
            that.num = add(that.num, that.num);
        };
        helper();
    };
    console.log(myObject.num);
    myObject.double1();
    console.log(myObject.num);
    console.log(window.num);


}