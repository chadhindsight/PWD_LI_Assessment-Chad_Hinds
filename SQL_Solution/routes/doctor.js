const express = require('express');
const router = express.Router();
const Doctor = require('../models/index');

// Create
router.post(('/doctors', async (req, res) => {
    try {
        console.log('docs')
        const newDoc = await Doctor.create(req.body);
        return res.send(newDoc)
    }
    catch (error) {
        return res.status(500).send(error)
    }
}))

// Find all 
router.get('/doctors', async (req, res) => {
    try {
        const doctors = await Doctor.findAll();
        return res.send(doctors)
    }
    catch (error) {
        return res.status(500).send(error)
    }
})

// Find one
router.get('/doctors', async (req, res) => {
    try {
        const appointment = await Doctor.findOne({
            where: {
                docID: req.params.id
            }
        });
        return res.send(appointment)
    }
    catch (error) {
        return res.status(500).send(error)
    }
})

// Update
router.patch('/doctors/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updated = await Doctor.update(req.body,
            {
                where: { docID: id }
            });

        if (updated) {
            const updatedDoc = await Doctor.findOne({ where: { docID: id } });
            return res.status(200).send(updatedDoc)
        }
        else {
            throw new Error('Doctor information not found');
        }
    }
    catch (error) {
        return res.status(500).send(error.message);
    }
})

// Delete
router.delete('/doctors/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const deleted = await Doctor.destroy(
            {
                where: { docID: id }
            });

        if (deleted) {
            return res.send("Doctor deleted");
        }
        else {
            throw new Error("Doctor not found");
        }

    } catch (error) {
        return res.status(500).send(error.message);
    }
})

module.exports = router;