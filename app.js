// task 1

fetch("https://api.github.com/users/hbklein")
  .then((response) => response.json())
  .then((json) => {
    console.log(json);
    console.log(json.public_repos);
    console.log(json.followers);
  });

fetch("https://api.github.com/users/hbklein/followers")
  .then((response) => response.json())
  .then((json) => {
    json.forEach((person) => {
      console.log(person.login);
    });
  });

// task 2
// 1
fetch("https://jsonplaceholder.typicode.com/comments")
  .then((response) => response.json())
  .then((json) => console.log(json.length));

// 2
fetch("https://jsonplaceholder.typicode.com/photos")
  .then((response) => response.json())
  .then((json) => console.log(json.length));

//   3
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((json) => {
    json.forEach((id) => {
      console.log(id.name, id.email);
    });
  });

//   4
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((json) => {
    json.forEach((id) => {
      console.log(id.name, id.address.city);
    });
  });

//   5
fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((json) => {
    let count = 0;
    json.forEach((id) => {
      if (id.completed == true) {
        count += 1;
      }
    });
    console.log(`${count} completed`);
  });

//   6
fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((json) => {
    json.forEach((id) => {
      if (id.completed == true) {
        console.log(id.id, id.title);
      }
    });
  });

//   7
fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((json) => {
    json.forEach((id) => {
      if (id.completed == false) {
        fetch(`https://jsonplaceholder.typicode.com/users/${id.userId}`)
          .then((response) => response.json())
          .then((json) => {
            console.log(json.name);
          });
      }
    });
  });

//   8
fetch("https://jsonplaceholder.typicode.com/albums")
  .then((response) => response.json())
  .then((json) => {
    json.forEach((id) => {
      if (id.title == "quidem molestiae enim") {
        fetch(`https://jsonplaceholder.typicode.com/users/${id.userId}`)
          .then((response) => response.json())
          .then((json) => {
            console.log(json.name);
          });
      }
    });
  });
