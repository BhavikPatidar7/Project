router.get("/owner-dashboard", verifyToken, checkRole("OWNER"), (req, res) => {
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
