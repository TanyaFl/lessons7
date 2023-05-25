function avgNumElements(arr) {
  if (!arr) {
    return 0;
  }

  let sum = 0;
  let num = 0;

  arr.forEach((i) => {
    if (typeof i === "number") {
      sum += i;
      num++;
    }
  });

  if (sum === 0) {
    return 0;
  }

  return sum / num;
}

function doMath(x, sign, y) {
  switch (sign) {
    case "+":
      return x + y;
    case "-":
      return x - y;
    case "*":
      return x * y;
    case "/":
      if (!y) {
        alert("Division by zero");

        return null;
      }

      return x / y;
    case "%":
      if (y == 0) {
        alert("Division by zero");

        return null;
      }

      return x % y;

    case "^":
      return Math.pow(x, y);
  }
}

function fillArray() {
  let rowsInput = prompt("Enter rows count");
  let rows = Number(rowsInput);
  if (isNaN(rows)) {
    alert("Invalid rows count");
    return [];
  }

  let columnsInput = prompt("Enter columns count");
  let columns = Number(columnsInput);
  if (isNaN(columns)) {
    alert("Invalid columns count");
    return [];
  }

  let arr = [];
  for (let i = 0; i < rows; i++) {
    let rowArr = [];
    for (j = 0; j < columns; j++) {
      let itemInput = prompt(`Enter ${j + 1} element of ${i + 1} row: `);
      let item = Number(itemInput);
      rowArr.push(item);
    }

    arr.push(rowArr);
  }

  return arr;
}

function filter(str, escapeChars) {
  if (!str) {
    return "";
  }

  if (!escapeChars || !escapeChars.length) {
    return str;
  }

  const result = [];
  for (const c of str) {
    if (escapeChars.indexOf(c) < 0) {
      result.push(c);
    }
  }

  return result.join("");
}
