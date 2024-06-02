function pow(base, exponent) {
  if (typeof base !== "number") {
    throw new TypeError(" base must be number");
  }

  if (!Number.isInteger(base)) {
    throw new TypeError("base must be integer");
  }

  if (exponent < 0) {
    throw new RangeError("n must be nonnegative integer value");
  }

  if (exponent === 0) {
    return 1;
  }

  return base * pow(base, exponent - 1);
}

try {
  console.log(pow(2, 3));
} catch (error) {
  if (error instanceof TypeError) {
    console.log("TypeError");
  } else if (error instanceof RangeError) {
    console.log("RangeError");
  }
  console.log("error :>> ", error);
}
