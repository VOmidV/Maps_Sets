new Set([1,1,2,2,3,4]) // ===> [1,2,3,4]

//[...new Set("referee")].join("") /// ===> ["ref"]

let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);
// ===> {Array(3) => true, Array(3) => false}

const hasDuplicate = (Array) =>{
  return new Set(Array).size !== Array.length
}

const vowelCount = (word) =>{
  const vowels = "aeiou";
  const final = new Map();
  for(let value of word){
    let toLower = value.toLowerCase()
    if (vowels.indexOf(toLower) !== -1) {
      if(final.has(toLower)){
        final.set(toLower, final.get(toLower) + 1);
      }else{
        final.set(toLower, 1);
      }
    }
  }
  return final;
}




