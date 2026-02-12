const express = require("express");
const db = require("../config/db");
const { verifyToken, checkRole } = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/dashboard", verifyToken, checkRole("ADMIN"), (req, res) => {
    db.query("SELECT COUNT(*) AS users FROM users", (err, users) => {
        db.query("SELECT COUNT(*) AS stores FROM stores", (err, stores) => {
            db.query("SELECT COUNT(*) AS ratings FROM ratings", (err, ratings) => {
                res.json({
                    totalUsers: users[0].users,
                    totalStores: stores[0].stores,
                    totalRatings: ratings[0].ratings
                });
            });
        });
    });
});

module.exports = router;
