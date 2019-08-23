function findClosestValueInBst(tree, target) {
   return findClosestValueinBstHelper(tree, target, Infinity)
}


function findClosestValueinBstHelper(tree, target, closest) {
    let currentNode = tree;

    while (currentNode) {
        if (Math.abs(target - closest) > Math.abs(target - currentNode.value)) {
            closest = currentNode.value
        } 

        if (target < currentNode.value) {
            currentNode = currentNode.left
        } else if (target > currentNode.value) {
            currentNode = currentNode.right
        } else {
            break;
        }

    }
    return closest;
}