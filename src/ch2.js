window.onload = function () {

    //多个实例连接到一个原型对象
    var Quo = function (status) {
        this.status = status;
    }
    Quo.prototype.get_status = function () {
        return this.status;
    }
    var quo = new Quo("healthy");
    var quo1 = new Quo("weak");
    //document.writeln(quo.get_status());
    //document.writeln(quo1.get_status());
    //document.writeln(quo.constructor.prototype === quo1.constructor.prototype);

    var myObject = {"status":"sleepy"};

    function add(a, b) {
        return a + b;
    }

    var array = [1,2];
    var sum = add.apply(window,array);
    //console.log(sum);

    var status = Quo.prototype.get_status.apply(myObject);
    //console.log(status);


    function sum1() {
        var i,sum=0;
        for(i=0;i<arguments.length;i++){
            sum += arguments[i];
        }
        return sum;
    }

    console.log(sum1(1,2,3,4,5,65,4,5,65,6,7,444));

}