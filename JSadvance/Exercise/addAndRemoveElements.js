function addAndRemove(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];
    if (el == `add`) {
      result.push(i + 1);
    } else if (el == `remove` && result.length !== 0) {
      result.pop();
    }
  }

  if (result.length === 0) {
    console.log("Empty");
  } else {
    console.log(result.join("\n"));
  }
}

addAndRemove(["remove", "add", "add"]);
