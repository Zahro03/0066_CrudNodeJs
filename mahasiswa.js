import express from 'express';

const router = express.Router();

// objek pengguna
const pengguna = {
    Nama: 'Zahrotul Jannah',
    Nim: '20220140066',
    Alamat: 'Jambi',
    Keterangan: 'Mahasiswa Teknologi Informasi 2022'
};

// Rute GET untuk mengakses objek pengguna
router.get('/', (req, res) => {
    res.json(pengguna); // Mengirimkan objek pengguna sebagai respons
});

export default router;