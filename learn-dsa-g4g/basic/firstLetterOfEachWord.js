const firstLetter = (str) => {
  return str.split(' ').map((word) => word[0]).join(',');
}

const str = "Here are the first letters";
console.log(firstLetter(str));