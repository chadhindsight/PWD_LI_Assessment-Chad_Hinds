const express = require('express');
const router = express.Router();
const Appointment = require('../models/Appointment')

// Create an appointment
router.post(('/appointments', async (req, res) => {
    try {
        const appointment = await Post.create(req.body);
        return res.send(appointment)
    }
    catch (error) {
        return res.status(500).send(error)
    }
}))

// Find all appointments
router.get('/appointments', async (req, res) => {
    try {
        const appointments = await Appointment.findAll();
        return res.send(appointments)
    }
    catch (error) {
        return res.status(500).send(error)
    }
})

// Find One by Id
router.get('/appointments', async (req, res) => {
    try {
        const appointment = await Appointment.findOne({
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

// Update appointment
router.patch('/appointments/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updated = await Appointment.update(req.body,
            {
                where: { id: id }
            });

        if (updated) {
            const updatedPost = await Appointment.findOne({ where: { id: id } });
            return res.status(200).send(updatedPost)
        }
        else {
            throw new Error('Appointment not found');
        }
    }
    catch (error) {
        return res.status(500).send(error.message);
    }
})

// Delete appointment
router.delete('/appointments/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const deleted = await Appointment.destroy(
            {
                where: { id: id }
            });

        if (deleted) {
            return res.send("Appointment deleted");
        }
        else {
            throw new Error("Appointment not found");
        }

    } catch (error) {
        return res.status(500).send(error.message);
    }
})