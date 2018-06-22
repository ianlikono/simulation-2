const getHouses = (req, res, next) => {
  const db = req.app.get("db");
  db.getHouses()
    .then(houses => res.status(200).send(houses))
    .catch(err => res.status(500).send({ getHousesError: err }));
};

const createHouses = (req, res, next) => {
  const db = req.app.get("db");
  const { name, address, city, state, zipCode } = req.body;
  db.create_House([name, address, city, state, zipCode])
    .then(response => {
      res.status(200).send(response);
    })
    .catch(err => res.status(500).send(err));
};
const deleteHouses = (req, res, next) => {
  const db = req.app.get("db");
  db.deleteHouse([req.params.id])
    .then(response => {
      res.status(200).send(response);
    })
    .catch(err => res.status(500).send(err));
};

module.exports = {
  getHouses,
  createHouses,
  deleteHouses
};
