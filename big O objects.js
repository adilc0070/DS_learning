// objects Big O

// O(1) - insertion, deletion, and accessing
// O(n) - searching,

let Person = {
    name: 'John',
    age: 30,
}
console.log("Person: ", Person);

//big O Notation
//O(1) - insertion, deletion, and accessing
    function addProperty(obj, key, value) {
        obj[key] = value;
    }

    function deleteProperty(obj, key) {
        delete obj[key];
    }

    function getProperty(obj, key) {
        return obj[key];
    }

    //results 
    addProperty(Person, 'city', 'New York');
    const age = getProperty(Person, 'age')||0;
    deleteProperty(Person, 'age');

console.log("after Operation: ", Person);
console.log("Age: ", age);


// O(n) - searching,
    function search(obj, key) {
        for (let prop in obj) {
            if (prop === key) {
                return obj[prop];
            }
        }
        return null;
    }
    let result = search(Person, 'name');
    console.log("Result: ", result);


