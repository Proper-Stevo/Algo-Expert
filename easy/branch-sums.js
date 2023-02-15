// This is the class of the input root.
// Do not edit it.
class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function branchSums(root, runningSum = 0, sums = []) {
    // Write your code here.
    if (!root.left && !root.right) sums.push(root.value + runningSum)
    if (root.left) branchSums(root.left, root.value + runningSum, sums)
    if (root.right) branchSums(root.right, root.value + runningSum, sums)
    return sums
  }
  
  // Do not edit the lines below.
  exports.BinaryTree = BinaryTree;
  exports.branchSums = branchSums;

  // link to code question: https://www.algoexpert.io/questions/branch-sums