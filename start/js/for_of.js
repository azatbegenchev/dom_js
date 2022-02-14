let arr = [4, 7, 9];
console.log(arr);
let par = document.getElementsByTagName('p');
let qP = document.querySelectorAll('p');
console.log(par);
console.log(qP);


//1 - variant ============================================

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }


//2 - variant ============================================

// for (let key in arr) {
//     console.log(arr[key]);
// }

//3 - variant ============================================

// for (let item of arr) {
//     console.log(item);
// }

// for (let i = 0; i < par.length; i++) {
//     console.log(par[i]);
// }

// for (let item of par) {
//     console.log(item);
// }

// for (let i = 0; i < qP.length; i++) {
//     console.log(qP[i]);
// }

for (let item of qP) {
    console.log(item);
}


