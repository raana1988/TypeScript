//// [overloadOnConstConstraintChecks4.ts]
class Z { }
class A extends Z { private x = 1 }
class B extends A {}
class C extends A {
    public foo() { }
}
function foo(name: 'hi'): B;
function foo(name: 'bye'): C;
function foo(name: string): A;
function foo(name: any): Z {
    return null;
}


//// [overloadOnConstConstraintChecks4.js]
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Z = (function () {
    function Z() {
    }
    return Z;
}());
var A = (function (_super) {
    __extends(A, _super);
    function A() {
        var _this;
        _this = _super.apply(this, arguments) || this;
        _this.x = 1;
    }
    return A;
}(Z));
var B = (function (_super) {
    __extends(B, _super);
    function B() {
        var _this = _super.apply(this, arguments) || this;
        return _this;
    }
    return B;
}(A));
var C = (function (_super) {
    __extends(C, _super);
    function C() {
        var _this = _super.apply(this, arguments) || this;
        return _this;
    }
    C.prototype.foo = function () { };
    return C;
}(A));
function foo(name) {
    return null;
}
