const Numbers = {
  isInt,
  isFloat,
};

function isInt(n: any) {
  return Number(n) === n && n % 1 === 0;
}

function isFloat(n: any) {
  return Number(n) === n && n % 1 !== 0;
}

export default Numbers;
