//trees


//max depth in a tree
var maxDepth = function (root) {
    if(root===null)return 0;
    
    return Math.max(maxDepth(root.left),maxDepth(root.right))+1;
};


//validate BST
const maxMin = (root, max, min) => {
    if(!root)return true;
    
    let left=maxMin(root.left,root.val,min);
    let right=maxMin(root.right,max,root.val);
    
    if(left&&right){
        if(min<root.val&&root.val<max)return true;
    }
    return false;
}

var isValidBST = function(root) {
    return maxMin(root,Number.MAX_SAFE_INTEGER,-Number.MAX_SAFE_INTEGER);
};


//level order
var levelOrder = function(root) {
    if(!root)return [];
    let queue = [root,null];
    let ans=[];
    let result=[];
    while (queue.length > 0) {
        let front = queue.shift();
        if(front===null){
            result.push(ans);
            ans=[];
            if(queue.length>0)queue.push(null);
        }else{
          ans.push(front.val);
            if (front.left) {
                queue.push(front.left);
            }
            if (front.right) {
                queue.push(front.right);
            }   
        }
    }
    return result;
}; 