fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((json) => {
    json.forEach((person) => {
      console.log(person.id, person.name);
    });
  });

fetch("https://api.github.com/users/hbklein");
