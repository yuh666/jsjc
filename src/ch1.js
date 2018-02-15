window.onload=function () {

    var obj1 = {};
    obj1['name'] = "ok";

    if(typeof Object.beget !== 'function'){
        Object.create = function (o) {
            var F = function () {}
            F.prototype = o;
            return new F();
        }
    }

    var another_obj = Object.create(obj1);
    console.log(another_obj.name);

    another_obj.name = "ok1";
    console.log(another_obj.name);
    console.log(obj1.name);

}