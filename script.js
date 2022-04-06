// 1

import storage from "./storage.js";

const getPost = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const data = await response.json();
  storage.set("post", data);
  console.log(data);
};

const post = storage.get("post");

if (post) {
  console.log(post);
} else {
  getPost();
}

// 2
storage.remove("post");

// 3
function isValidDateFormat(str) {
  let regexp = /^\d{4}\/\d{2}\/\d{2} \d{2}:\d{2}$/;

  return regexp.test(str);
}
console.log(isValidDateFormat("2012/09/18 12:10")); // true
console.log(isValidDateFormat("12.02.2022 12:10")); // false
