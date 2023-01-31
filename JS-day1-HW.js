//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]
let elements = dog_string.split(" ")

function findWords(str, arr){
    let elements = str.split(/\b/);
    console.log(elements);
    for(let e of elements){
        for(let n of arr){
            if(e.toLowerCase() === n.toLowerCase()){
                console.log("Matched dog_name", e)
            }
            
        }
    }
    // console.log( elements.forEach(
    //     element => console.log(element)
    // ))
    //for every e in dog_string, compare with every n in dog_names
    //if ==, console.log('Matched dog_name')
    //else, console.log('No Matches')
}
findWords(dog_string, dog_names) 



//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

let arr1 = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"];

function replaceEvens(arr){
    for(let i = 0; i < arr.length; i += 2){
        arr.splice(i, 1, 'even index');
    }
    //for every even index in arr:
    //arr.splice(e, 1, 'even index')
    //for every e in arr:
    // if e[i] % 2 == 0,
    // splice arr[e] = 'even index'
}
replaceEvens(arr1)
console.log(arr1)

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]