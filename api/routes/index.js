const express = require("express");
const { Entries, Types } = require("../sequelize");
const router = express.Router();

// Home router
router.get("/", (req, res) => {
  console.log(res.json("Hello world"));
});

// Create Expense Type
// router.post("/Api/type", (req, res) => {
//   console.log(req.body);
//   Types.create(req.body).then(types => res.json(types));
// });

router.post("/Api/type", (req, res) => {
  const { typesName, typesComment } = req.body;
  Types.create({ typesName: typesName, typesComment: typesComment })
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    });
});
// Create Expense Entries
router.post("/Api/entry", (req, res) => {
  console.log("expense types ==>", req.body);
  Entries.create(req.body).then(entries => res.json(entries));
});

// Get all Expense Types
router.get("/Api/types", (req, res) => {
  console.log("ROUTE works");
  Types.findAll().then(types => res.json(types));
});
// get all Expense Entries
router.get("/Api/entries", (req, res) => {
  Entries.findAll().then(entries => res.json(entries));
});

// Delete Expense Types form
router.get("/delete/:id", (req, res, next) => {
  Types.findByPk(req.params.id).then(types => {
    res.render("types/delete", {
      types: types,
      title: "Delete Expense Types"
    });
  });
});

// DELETE individual Type.
router.delete("/:id", (req, res, next) => {
  Types.findByPk(req.params.id)
    .then(types => {
      return types.destroy();
    })
    .then(() => {
      res.redirect("/Api/types");
    });
});

module.exports = router;
