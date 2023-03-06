const express = require("express");
const app = express();
const uuidAPIKey = require("uuid-apikey");

const server = app.listen(3001, () => {
  console.log("start server");
});

console.log(uuidAPIKey.create());
const key = {
  apiKey: "MVFFM6C-MX1MR2F-KFH1E9N-Z3MJ6EA",
  uuid: "a6defa19-a743-4c09-9be2-1726f8e92339",
};
app.get("/api/users/:apikey/:type", async (req, res) => {
  let { apikey, type } = req.params;

  if (!uuidAPIKey.isActive(apikey) || !uuidAPIKey.check(apikey, key.uuid)) {
    res.send("키값이틀림");
  }
  if (type == "seoul") {
    let data = [
      { name: "홍길동", city: "서울" },
      { name: "김철수", city: "서울" },
    ];
    res.send(data);
  } else if (type == "jeju") {
    let data = [
      { name: "홍일동", city: "제주" },
      { name: "김민수", city: "제주" },
    ];
    res.send(data);
  } else {
    res.send("ok");
  }
});
