/* let myFavorites = []

const postFav = (req, res) => {
    const { id, status, name, species, origin, image, gender } = req.body;
    const character = {
        id, status, name, species, origin, image, gender,
    };
    if (!id || !name) {
        return res
            .status(404)
            .json({ message: "Error, not create fav" });
    } else {
        myFavorites.forEach(fav => {
            if (id === fav.id) {
                return res.status(404).json({ message: "Id already exists in favorites" })
            }
        })
    }
    myFavorites.push(character);
    res.status(200).json(myFavorites);
};

const deleteFav = (req, res) => {
    const { id } = req.params
    if (!id) {
        return res.status(404).json({ message: "Id null" });
    }
    const newFavorites = myFavorites.filter((ch) => ch.id !== id);
    myFavorites = newFavorites;
    res.status(200).json(myFavorites);
};

module.exports = { postFav, deleteFav } */