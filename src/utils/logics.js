export function min_max_Price(item) {
  console.log(Math.min(item[0].price, item[1].price, item[2].price), "tem");
}
export function getParams() {
  let endpoint;
  console.log(window.location, "windopw");
  const str = "abc=foo&def=%5Basf%5D&abc=5";
  const params = Object.fromEntries(new URLSearchParams(str));
  console.log(params, "pranghjufuf");
  const urlParams = new URLSearchParams(window.location.search);
  for (const value of urlParams.values()) {
    endpoint = value;
  }
  return endpoint;
}
