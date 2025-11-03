var timeLimit = function (fn, t) {
  return async function (...args) {
    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => {
        reject("Time limit exceeded");
      }, t);

      fn(...args)
        .then((res) => {
          clearTimeout(timer);
          resolve(res);
        })
        .catch((err) => {
          clearTimeout(timer);
          reject(err);
        });
    });
  };
};

// example usage:
const fn = async (n) => {
  await new Promise((res) => setTimeout(res, 100));
  return n * n;
};

const limited = timeLimit(fn, 50);

(async () => {
  const start = performance.now();
  try {
    const result = await limited(5);
    console.log({
      resolved: result,
      time: Math.floor(performance.now() - start),
    });
  } catch (err) {
    console.log({
      rejected: err,
      time: Math.floor(performance.now() - start),
    });
  }
})();
