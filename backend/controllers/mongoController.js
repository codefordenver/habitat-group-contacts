const db = require('../models');

module.exports = {
  findAll: (req, res) => {
    db.Album
      .find({})
      .populate("artist")
      .then(dbAlbum => res.json(dbAlbum))
      .catch(err => res.status(422).json(err));
  }
}