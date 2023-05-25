const array = [1, 2, 3, 4, 5, 6, 7, 8, 9.1];
const result = removeElement(array, 7);

function removeElement(array, element) {
  return array.filter((i) => i !== element);
}

console.log(result);

const characters = "abcdefghijklmnopqrstuvwxyz0123456789";

function generateKey(length, str) {
  let a = str.split("");

  for (let i = 0; i < a.length; i++) {
    let current = a[i];
    let j = Math.round(Math.random() * (a.length - 1 - i));
    let b = a[j];

    a[i] = b;
    a[j] = current;
  }

  return a.join("").substring(0, length);
}

console.log(generateKey(16, characters));
