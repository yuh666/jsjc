window.onload = function (ev) {
    var walk_DOM = function walk(node, func) {
        func(node);
        node = node.firstChild;
        while (node) {
            walk(node, func);
            node = node.nextSibling;
        }
    };

    var findELementByAttribute = function (attr, value) {
        var results = [];
        walk_DOM(document.body, function (node) {
            //满足前面的条件就是后面的值 否则就是前面的判断结果
            var actual = node.nodeType === 1 && node.getAttribute(attr);
            if (typeof actual === 'string' && (typeof value !== 'string' || value === actual)) {
                results.push(node);
            }
        });
        return results;
    };

    var results = findELementByAttribute("alt","sss");
    //console.log(results);


    var factorial = function (i,a) {
        a = a || 1;
        if(i < 2){
            return a;
        }else{
            return factorial(i-1,a*i);
        }
    }

    console.log(factorial(10,1));
};