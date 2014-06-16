var tokens = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "m",
              "n", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
              "A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L", "M",
              "N", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
              "2", "3", "4", "5", "6", "7", "8", "9", "!", "@", "#", "$",
              "%", "^", "&", "*", "-", "_", "?"];

var salt = "better_than_nothing";

var pazz = function(masterPassword, site) {
  var seed, siteHash, pairs, ints, chars;

  seed = (new jsSHA(masterPassword + salt, "TEXT")).getHash("SHA-1", "HEX");
  siteHash = (new jsSHA(seed + site + salt, "TEXT")).getHash("SHA-1", "HEX");
  pairs = siteHash.match(/(..)/g);
  ints = $.map(pairs, function(pair) { return parseInt(pair, 16) });
  chars = $.map(ints, function(i) { return tokens[i % tokens.length] });
  return chars.join("");
};
