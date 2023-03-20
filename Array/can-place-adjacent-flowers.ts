function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  let i = 0;
  while(i<flowerbed.length && n >= 0) {
      if (flowerbed[i] === 1) {
          i = i + 2;
      } else if (i === flowerbed.length - 1 || flowerbed[i+1] === 0) {
          n--;
          i = i + 2;
      } else {
          i = i + 3;
      }
      if (n === 0) return true;
  }
  return n <= 0;
};

function canPlaceFlowersModified(flowerbed: number[], n: number): boolean {
  if (n === 0) return true;
    for (let i=0;i<flowerbed.length;i++) {
        if (flowerbed[i] === 0 && (i === 0 || flowerbed[i-1] === 0) && (i === flowerbed.length - 1 || flowerbed[i+1] === 0)) {
            flowerbed[i] = 1;
            n--;
            if (n === 0) {
                return true;
            }
        }
    }
    return false;
}