function foo(x){
  if (x === null || x === undefined){
    return 0;
  }
  if (Array.isArray(x) && x.length === 0){
    return 0;
  } else if (Array.isArray(x)){
    return x.length;
  } else {
    return 0; 
  }
}

console.log(foo(null)); // 0
console.log(foo(undefined)); // 0
console.log(foo([])); // 0
console.log(foo([1,2,3])); // 3
console.log(foo({})); // 0