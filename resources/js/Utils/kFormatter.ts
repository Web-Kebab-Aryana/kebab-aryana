const kFormatter = (num: number) => {
    return Math.abs(num) > 999
        ? // @ts-expect-error bacot
          Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "K"
        : Math.sign(num) * Math.abs(num);
};

export default kFormatter;
