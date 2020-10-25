module.exports = function check(str, bracketsConfig) {
  var str2 = str;
  for (let j = 0; j < bracketsConfig.length; j++) {
    for (let i = 0; i < str.length; i++) {
      if (
        str[i] == bracketsConfig[j][0] &&
        str[i + 1] == bracketsConfig[j][1]
      ) {
        str2 = str.replace(bracketsConfig[j][0] + bracketsConfig[j][1], "");
      }
    }
  }

  return str2 == str ? str2 == "" : check(str2, bracketsConfig);
};
