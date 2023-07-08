const axios = require('axios')

const URL = "https://rickandmortyapi.com/api/character/"

/* //Promesas 
const getCharById = (req, res) => {
    const { id } = req.params;
    axios
        .get(`${URL}/${id}`)
        .then(({ data }) => {
            const { id, status, name, species, origin, image, gender, location } = data;
            const character = { id, status, name, species, origin, image, gender, location };

            return character ? res.status(200).json(character)
                : res.status(404).send("Character not found");
        })
        .catch((error) => {
            return res.status(404).json({ error: error.message })
        })
}; */

const getCharById = async (req, res) => {
    try {
        const { id } = req.params;

        const { status, name, species, origin, image, gender, location } =
            (await axios(`${URL}/${id}`)).data
        const character = { id, status, name, species, origin, image, gender, location };

        return character ? res.status(200).json(character)
            : res.status(404).send("Character not found")

    }
    catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

module.exports = { getCharById }