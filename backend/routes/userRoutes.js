router.post("/rate", verifyToken, checkRole("USER"), (req, res) => {
    const { store_id, rating } = req.body;

    db.query(
        "INSERT INTO ratings (user_id, store_id, rating) VALUES (?,?,?) ON DUPLICATE KEY UPDATE rating=?",
        [req.user.id, store_id, rating, rating],
        (err) => {
            if (err) return res.status(500).json(err);
            res.json({ message: "Rating submitted" });
        }
    );
});
