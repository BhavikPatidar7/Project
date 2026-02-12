const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const db = require("../config/db");

const router = express.Router();

router.post("/register", async (req, res) => {
    const { name, email, password, address } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    db.query(
        "INSERT INTO users (name,email,password,address,role) VALUES (?,?,?,?,?)",
        [name, email, hashedPassword, address, "USER"],
        (err, result) => {
            if (err) return res.status(500).json(err);
            res.json({ message: "User Registered" });
        }
    );
});

router.post("/login", (req, res) => {
    const { email, password } = req.body;

    db.query("SELECT * FROM users WHERE email=?", [email], async (err, result) => {
        if (err || result.length === 0)
            return res.status(400).json({ message: "User not found" });

        const user = result[0];

        const valid = await bcrypt.compare(password, user.password);
        if (!valid) return res.status(400).json({ message: "Invalid Password" });

        const token = jwt.sign(
            { id: user.id, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
        );

        res.json({ token, role: user.role });
    });
});

module.exports = router;
