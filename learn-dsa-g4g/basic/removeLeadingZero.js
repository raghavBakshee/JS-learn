const removeLeadingZeros = (str) => {
    // return str.replace(/^0+/, '');
   for(const s of str) {
    if(s !== '0') {
        return str.substr(str.indexOf(s));
    }
   }
}

const str = "0000012034000";
console.log(removeLeadingZeros(str));