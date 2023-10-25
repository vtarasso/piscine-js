const throttle = (fn, delay) => {
  let throttle = false;
  return (...args) =>
    throttle ||
    ((throttle = setTimeout(() => (throttle = false), delay)), fn?.(...args));
};

function opThrottle(func, wait, options = {}) {
  let timer;
  let savedArgs;
  let savedThis;
  return function () {
    if (timer) {
      savedThis = this;
      savedArgs = arguments;
      return;
    }
    const timeup = () => {
      timer = null;
      if (options.trailing === true && savedArgs) {
        func.apply(savedThis, savedArgs);
        savedThis = savedArgs = null;
        timer = setTimeout(timeup, wait);
      }
    };
    if (options.leading === true) {
      func.apply(this, arguments);
    } else {
      savedThis = this;
      savedArgs = arguments;
    }
    timer = setTimeout(timeup, wait);
  };
}