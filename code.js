function e(n) {
  var e = 1;
  var fact = 1;
  for (var i = 1; i <= n; i++) {
    e += (1/fact);
    fact *= (i+1);
  }
  return e;
}
