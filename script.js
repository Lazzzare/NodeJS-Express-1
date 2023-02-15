import express from "express";
import bodyParser from "body-parser";

var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

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

app.get("/contact", (req, res) => {
  console.log(req.query);

  const page = `
    <html>
      <head>
        <style>
          form * {
            display: block;
            margin-bottom: 15px; 
          }
        </style>
      </head>
        <body>
          <form method="POST" action="/contact">
            <input type="text" name="Name" placeholder="Enter Name">
            <input type="mail" name="Email" placeholder="Enter Email">
            <textarea name="Message" placeholder="write something"></textarea>
            <input type="submit" name="Submit">
          </form>
        </body>
    </html>
  `;

  res.send(page);
});

app.post("/contact", urlencodedParser, (req, res) => {
  console.log(req.body);
  res.send("message recieved");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
