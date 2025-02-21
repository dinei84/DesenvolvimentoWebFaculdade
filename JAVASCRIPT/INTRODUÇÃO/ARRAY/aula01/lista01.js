let cores = ["red","blue", "green"]

let cores2 = new Array("red","blue","green")

// for (const x in cores2) {
//     if (Object.prototype.hasOwnProperty.call(cores2, x)) {
//         const element = cores2[x];
//         console.log(element)
//     }
// }

let text = "";
for (let x in cores2){
    text = cores2[x];
    console.log(text);
}