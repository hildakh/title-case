const titleCase = function (sentence) {
  let outPut = '';
  
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] == " ") {
      outPut += " " + sentence[i + 1].toUpperCase();
      i++;
    }
    else {
      outPut += sentence[i];
    }
  }
  console.log(outPut);
}

titleCase('This is a test');