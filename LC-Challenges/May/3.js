/**
 * 
 * 2215. Find the Difference of Two Arrays
 Given two 0-indexed integer arrays nums1 and nums2, return a list answer of size 2 where:

answer[0] is a list of all distinct integers in nums1 which are not present in nums2.
answer[1] is a list of all distinct integers in nums2 which are not present in nums1.
Note that the integers in the lists may be returned in any order.
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);
    const ans = [[], []];
    for (let num of set1) {
        if (!set2.has(num)) ans[0].push(num);
    }
    for (let num of set2) {
        if (!set1.has(num)) ans[1].push(num);
    }
    return ans;
};