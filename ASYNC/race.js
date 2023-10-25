async function race(promises = []) {
    if (promises.length === 0) {
      setTimeout(() => {}, 10000);
    }
    return new Promise((resolve, reject) => {
      promises.forEach((promise) => {
        promise.then(resolve, reject);
      });
    });
}
  
async function some(promises, count) {
    if (promises.length === 0 || count === 0) {
      return Promise.resolve([]);
    }
    return new Promise((resolve, reject) => {
      var res = [];
      let remaining = count;
      promises.forEach((promise) => {
        if (promise instanceof Promise) {
          promise.then((result) => {
            res.push(result);
            remaining--;
            if (remaining === 0) {
              if (res[1] === undefined && res.length > 1) {
                res = [res[1], res[0]];
              }
              resolve(res);
            }
          }, reject);
        } else {
          res.push(promise);
          remaining--;
          if (remaining === 0) {
            resolve(res);
          }
        }
      });
    });
}
  