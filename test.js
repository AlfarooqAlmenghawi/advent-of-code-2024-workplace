function maps(x) {
  const newArray = [...x];

  const doubled = x.map((element) => {
    return element * 2;
  });
  console.log(doubled);
  console.log(x);
}

maps([1, 2, 3]);
