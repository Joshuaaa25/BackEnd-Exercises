const express = require("express");
const app = express();
const port = 3000;

app.use(req, res, next) => {
  console.log(Date.now() + " " + req.ip + " " + req.originalUrl);
  next();
};

app.use(log);


app.get("/", (req, res) =>
  res.json({
    status: "success",
    message: "Hello World",
  })
);

app.post("/contoh", (req, res) =>
  res.json({
    status: "success",
    message: "request dengan method POST",
  })
);

app.put("/contoh", (req, res) =>
  res.json({
    status: "success",
    message: "Request dengan method PUT",
  })
);

app.patch("/contoh", (req, res) =>
  res.json({
    status: "success",
    message: "Request dengan method PATCH",
  })
);

app.delete("/contoh", (req, res) =>
  res.json({
    status: "success",
    message: "request dengan method DELETE",
  })
);
//Params
app.get("/post/:id", (req, res) => {
  const id = req.params.id;
  res.json({
    status: "success",
    message: `Artikel ID ke-${id}`,
  });
});

app.get("/post", (req, res) => {
  const { page, sort } = req.query;
  res.json({
    status: "success",
    message: `Page = ${page}, Sort by = ${sort}`,
  });
});




app.listen(port, () =>
  console.log(`Server running at http://localhost:${port}`)
);