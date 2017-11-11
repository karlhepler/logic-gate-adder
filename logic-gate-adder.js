/**
 * GOAL 1: Without running this, determine the output from the entry point.
 * GOAL 2: Refactor the function, ensuring that the entry point returns the same output.
 */

//----- FUNCTION DEFINITION ------------------------//
function refactor(x, y) {
    var a = [1,0,0,1,0];
    var b = [1,1,0,0,0];
    var c = [];
    var carry = 0;
    a.unshift(x);
    b.unshift(y);

    for (var i = a.length - 1; i >= 0; i--) {
        c.unshift(xor(xor(a[i],b[i]),carry));
        carry = or(and(a[i],b[i]),and(carry,xor(a[i],b[i])));
    }

    return btd(c);

    function xor(a, b) { return and(or(a,b),not(and(a,b))); }
    function and(a, b) { return a && b ? 1 : 0; }
    function not(a) { return a ? 0 : 1; }
    function or(a, b) { return a || b ? 1 : 0; }
    function btd(b) {
        return b.reverse().reduce(function (c, v, i) {
            return c+(v*Math.pow(2,i));
        }, 0);
    }
};

//----- ENTRY POINT --------------------------------//
console.log(refactor(0, 0));
