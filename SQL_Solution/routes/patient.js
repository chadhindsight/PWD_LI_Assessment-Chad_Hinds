const express = require('express');
const router = express.Router();
const Patient = require('../models/Patient');

// Create
router.post(('/patients', async (req, res) => {
    try {
        const newPatient = await Doctor.create(req.body);
        return res.send(newPatient)
    }
    catch (error) {
        return res.status(500).send(error)
    }
}))

// Find all 
router.get('/patients', async (req, res) => {
    try {
        const patients = await Patient.findAll();
        return res.send(patients)
    }
    catch (error) {
        return res.status(500).send(error)
    }
})

// Find one
router.get('/patients', async (req, res) => {
    try {
        const appointment = await Patient.findOne({
            where: {
                id: req.params.id
            }
        });
        return res.send(appointment)
    }
    catch (error) {
        return res.status(500).send(error)
    }
})

// Update
router.patch('/patients/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updated = await Patient.update(req.body,
            {
                where: { id: id }
            });

        if (updated) {
            const updatedDoc = await Patient.findOne({ where: { id: id } });
            return res.status(200).send(updatedDoc)
        }
        else {
            throw new Error('Patient information not found');
        }
    }
    catch (error) {
        return res.status(500).send(error.message);
    }
})

// Delete
router.delete('/patients/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const deleted = await Patient.destroy(
            {
                where: { id: id }
            });

        if (deleted) {
            return res.send("Patient deleted");
        }
        else {
            throw new Error("Patient not found");
        }

    } catch (error) {
        return res.status(500).send(error.message);
    }
})