// basics of map:-

const mapObj = new Map()    
mapObj.set('IND', "Delhi")
mapObj.set('USA', "Washington DC")
mapObj.set('RUS', "Moscow")
mapObj.set('GER', "Berlin")
mapObj.set('UK', "London")
mapObj.set('RUS', "Moscow") // duplicates are not allowed in map

console.log(mapObj.entries());  // entry= [key, value] pair
console.log(mapObj.keys()); // returns object of keys
console.log(mapObj.values()); // returns object of values
for (const [key, val] of mapObj) {
    console.log(`${key} : ${val.toUpperCase()}`);
}

mapObj.forEach(value => console.log(value)) // iterate over the values only

console.log(mapObj.size);   // returns number of entries present in the map 
console.log(mapObj.has('USA'))  // checks the given key is present or not.
console.log(mapObj.delete('GER'));  // true if entry is deleted successfully
console.log(mapObj.get("IND"));   //get the corresponding value for given key
mapObj.clear(); // makes the map empty.
console.log(mapObj);    // Map(0) {}
