export default function appendToEachArrayValue(array, appendString) {
  const newArr = [];
  console.log("array.keys()");
  console.log(array.keys());
  for (let value in array) {
    newArr.push(appendString + value);
  }

  return newArr;
}
