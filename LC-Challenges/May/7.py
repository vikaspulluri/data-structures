# 1964. Find the Longest Valid Obstacle Course at Each Position
class Solution:
      
    def binary_search(self, arr, target):
        low, high = 0, len(arr) 
        
        while low < high:
            mid = (low + high) // 2

            if arr[mid] <= target: low = mid + 1
            
            else: high = mid 
        
        return low
    
    
    def longestObstacleCourseAtEachPosition(self, obstacles: List[int]) -> List[int]:
        LIS, answer = [], []
        
        for obstacle in obstacles:
            index = self.binary_search(LIS, obstacle)
            
            answer.append(index + 1)
            
            if index < len(LIS):  LIS[index] = obstacle
                
            else: LIS.append(obstacle)
            
        return answer