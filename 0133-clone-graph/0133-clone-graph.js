/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
    if(!node){
        return null;
    }

    const map = new Map();
    
    function traverse(root){
        if(!map.has(root.val)){
            map.set(root.val, new Node(root.val));
            
            map.get(root.val).neighbors = root.neighbors.map(traverse);
        }

        return map.get(root.val);
    }

    return traverse(node);
};