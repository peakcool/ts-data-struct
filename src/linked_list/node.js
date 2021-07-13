"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DS = void 0;
var DS;
(function (DS) {
    class Node {
        // init data struct node
        constructor(item = null) {
            this.item = item;
            this.next = null;
        }
    }
    DS.Node = Node;
})(DS = exports.DS || (exports.DS = {}));
