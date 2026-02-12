const express = require("express");
const router = express.Router();
const db = require("../config/db");
const { verifyToken, checkRole } = require("../middleware/authMiddleware");

// router.get("/", verifyToken, checkRole("OWNER"), (req, res) => {
//     res.json({ message: "Store Route Working" });
// });


router.get("/storeRoutes", verifyToken, checkRole("OWNER"), (req, res) => {
    db.query(
        `SELECT users.name, ratings.rating 
         FROM ratings 
         JOIN users ON ratings.user_id = users.id
         JOIN stores ON ratings.store_id = stores.id
         WHERE stores.owner_id=?`,
        [req.user.id],
        (err, result) => {
            res.json(result);
        }
    );
});
module.exports = router;
