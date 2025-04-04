// Assume you are an awesome parent and want to give your children some cookies. But, you should give each child at most one cookie.
// Each child i has a greed factor g[i], which is the minimum size of a cookie that the child will be content with; and each cookie j has a size s[j]. If s[j] >= g[i], we can assign the cookie j to the child i, and the child i will be content. Your goal is to maximize the number of your content children and output the maximum number.

const findContentChildren = function (g, s) {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);

  let i = 0;
  let j = 0;
  let contentChildren = 0;

  while (i < g.length && j < s.length) {
    if (s[j] >= g[i]) {
      contentChildren++;
      i++;
    }
    j++;
  }

  return contentChildren;
};

console.log(findContentChildren([1, 2, 3], [1, 1]));  // Output: 1
console.log(findContentChildren([1, 2], [1, 2, 3]));
console.log(findContentChildren([1, 2], [0,0,0]));

// output is basically the number of kids that are fed