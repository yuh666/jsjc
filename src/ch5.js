window.onload = function (ev) {
    var myObject = (function () {
        var value = 0;
        return {
            increment: function (incr) {
                value += typeof incr === 'number' ? incr : 1;
            },
            get_value: function () {
                return value;
            }
        };
    })();

//console.log(myObject.get_value());
//myObject.increment(10);
//console.log(myObject.get_value());

    var fade = function (node) {
        var level = 1;
        var step = function () {
            var hex = level.toString(16);
            node.style.backgroundColor = '#FF00' + hex + hex;
            if (level < 15) {
                level += 1;
                setTimeout(step, 100);
            }
        }
        setTimeout(step, 100);
    };
    //fade(document.body);


    //闭包不会复制函数引用
    var binding = function (nodes) {
        for (var i = 0; i < nodes.length; i++) {
            nodes[i].onclick = helper(i);
        }
    }

    var helper = function (i) {
        return function () {
            alert(i);
        }
    };

    binding(document.getElementsByTagName("button"));

}