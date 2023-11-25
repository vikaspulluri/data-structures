var findDiagonalOrder = function(nums) {
    const rows = nums.length;
    const map = {};
    for (let i=rows-1;i>=0;i--) {
        for (j=0;j<nums[i].length;j++) {
            if (!map[i+j]) {
                map[i+j] = [];
            }
            map[i+j].push(nums[i][j]);
        }
    }
    let result = [];

    for (const entry of Object.values(map)) {
        result.push(...entry); 
    }
    
};

findDiagonalOrder([[1,2,3,4,5],[6,7],[8],[9,10,11],[12,13,14,15,16]]);