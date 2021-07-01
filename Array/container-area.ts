import { green } from "../log";

/**
 * Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai).
 * n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0). 
 * Find two lines, which, together with the x-axis forms a container, such that the container contains
 * the most water.
 */
export const maxArea = function(height) {
  let left = 0, right = height.length - 1;
  let result = 0;
  while(left < right) {
      let area = Math.min(height[left], height[right]) * (right - left);
      if (area > result) result = area;
      green(`area, result, left, right: , ${area}, ${result}, ${height[left]}, ${height[right]}`);
      if (height[left] <= height[right]) { 
        left++;
      } else {
        right--;
      }
  }
  return result;
};
