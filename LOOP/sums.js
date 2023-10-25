function sums(n) {
    let result = [];
    if (n == 0){
        return result
    }
    function back(arr, start) {
      if (arr.reduce((a, b) => a + b, 0) === n) {
        let ans = [...arr];
        ans.sort();
        if (!result.some((r) => r.every((x, i) => x === ans[i]))) {
          result.push(ans);
        }
        return;
      } else if (arr.reduce((a, b) => a + b, 0) > n) {
        return;
      }
  
      for (let i = start; i < n; i++) {
        arr.push(i);
        back(arr, i);
        arr.pop();
      }
    }
  
    back([], 1);
    return result;
  }