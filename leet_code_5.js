function pallindrome(x) {
  if (x < 0) {
    return false;
  } else {
    let rev = 0;
    while (x > 0) {
      let rem = x % 10;
      rev = rev * 10 + rem;
      x = x / 10;
      if ((x = rev)) {
        return true;
      } else {
        return false;
      }
    }
  }
}

console.log(pallindrome(121));
console.log(pallindrome(10));
console.log(pallindrome(-121));
