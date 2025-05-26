const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Penjualan_Berulang = require('../models/penjualan_berulangModel');

const secret = 'rahasia';

/**exports.register = (req, res) => {
  const { name, email, password } = req.body;
  const hashed = bcrypt.hashSync(password, 10);
  const newUser = { name, email, password: hashed };

  User.create(newUser, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: 'User registered' });
  });
};

exports.login = (req, res) => {
  const { email, password } = req.body;

  User.findByEmail(email, (err, results) => {
    if (err || results.length === 0) return res.status(400).json({ message: 'User not found' });

    const user = results[0];
    const match = bcrypt.compareSync(password, user.password);
    if (!match) return res.status(401).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ id: user.id, email: user.email }, secret, { expiresIn: '1d' });
    res.json({ token });
  });
};**/

exports.getAll = (req, res) => {
  Penjualan_Berulang.findAll((err, penjualan_berulangs) => {
    if (err) return res.status(500).json(err);
    res.json(penjualan_berulangs);
  });
};

exports.getOne = (req, res) => {
  Penjualan_Berulang.findById(req.params.id, (err, penjualan_berulangs) => {
    if (err || penjualan_berulangs.length === 0) return res.status(404).json({ message: 'Penjualan tidak ditemukan' });
    res.json(penjualan_berulangs[0]);
  });
};

exports.update = (req, res) => {
  Penjualan_Berulang.update(req.params.id, req.body, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: 'Penjualan diperbaharui' });
  });
};

exports.remove = (req, res) => {
  Penjualan_Berulang.delete(req.params.id, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: 'Penjualan telah dihapus' });
  });
};