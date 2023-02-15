import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/about", (req, res) => {
  const teamMembers = [
    {
      name: "Lazare",
      position: "FullStack developer",
    },
    {
      name: "saba",
      position: "designer",
    },
  ];

  let teamMembersListHTML = "";

  for (let i = 0; i < teamMembers; i++) {
    teamMembersListHTML =
      teamMembersListHTML + `<li>Name: ${teamMembers[i].name}</li>`;
  }

  const page = `
  <html>
    <head>
    </head>
    <body>
    <h1>Hello</h1>
    <p>hello from about page</p>
    <ul>
        ${teamMembersListHTML}
    <ul>
    </body>
    </html>
    `;
  res.send(page);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
