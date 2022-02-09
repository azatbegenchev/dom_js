let a = new Set();

a.add(1);
a.add(2);
a.add('Hello');
a.add('1');
// a.clear();
// a.delete('Hello');//delete

console.log(a);
console.log(a[0]);// !!! no
console.log(a.length);// no
console.log(a.size);// yes count of elements
console.log(a.has(2)); //true
console.log(a.has('2')); //false

// for ( let i = 0; i < a.size ) a[i]
// for ( let i in a )

for (let item of a) {
    console.log(item)
}

let arr = [1, 2, 3, 4, 5, 'Hello', 5, 1, 3];

let b = new Set(arr);
console.log(b);
console.log(b.size);

let bArr = Array.from(b);
console.log(bArr);
console.log(bArr[2]);


