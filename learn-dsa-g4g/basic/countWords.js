let str = 'Hello World  Jsujsuj';

//console.log(str.replace(/\s+/g, ''))

// Count no. of words in a string

const words = str.trim().split(/\s+/);
  return words.filter(word => word.length > 0).length;