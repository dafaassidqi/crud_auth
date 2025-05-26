const db = require('../config/db');

const Penjualan_Berulang = {
  create: (data, callback) => {
    const sql = 'INSERT INTO penjualan_berulang SET ?';
    db.query(sql, data, callback);
  },
  findByUserId: (user_id, callback) => {
    const sql = 'SELECT * FROM penjualan_berulang WHERE user_id = ?';
    db.query(sql, [user_id], callback);
  },
  findAll: (callback) => {
    db.query('SELECT * FROM penjualan_berulang', callback);
  },
  findById: (id, callback) => {
    db.query('SELECT * FROM penjualan_berulang WHERE id = ?', [id], callback);
  },
  update: (id, data, callback) => {
    db.query('UPDATE penjualan_berulang SET ? WHERE id = ?', [data, id], callback);
  },
  delete: (id, callback) => {
    db.query('DELETE FROM penjualan_berulang WHERE id = ?', [id], callback);
  }
};

module.exports = Penjualan_Berulang;