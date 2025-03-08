const generateRandomTsCode = () => {
  const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  const specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+", "=", "{", "[", "}", "]", "|", "\\", "/", "<", ">", "?", ",", ".", ";", ":", "_"];

  let code = "";

  for (let i = 0; i < 15; i++) {
    code += numbers[Math.floor(Math.random() * numbers.length)];
    code += letters[Math.floor(Math.random() * letters.length)];
    code += specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
  }

  return code;
};
