/**
 * 606. Construct String from Binary Tree
 * @param {*} root 
 * @returns 
 */
var tree2str = function(root) {
    let result = '';
    function preorder(node) {
        if (!node) {
            return;
        }

        result += '(' + node.val;
        if (!node.left && node.right) {
            result += '()';
        }
        preorder(node.left);
        preorder(node.right);
        result += ')';
    }
    preorder(root);
    return result.substring(1,result.length-1);
};