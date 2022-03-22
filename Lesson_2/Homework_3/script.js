let input = [1, 2, 3, 5, 6, 4, 2, 1, 6, 3, 5, 1]

result = {};

for(i = 0;i<input.length; i++)
{
  value = input[i];
  result[value] =  result[value] ? result[value] + 1 :1;
}

console.log(result)

let keyMax = input[0];
let max = 1;

for(let key in result)
{
  if(result[key] > max)
  {
    max = result[key];
    keyMax = key; 
  }
}

console.log("Value: " + keyMax + ", Count"+max)