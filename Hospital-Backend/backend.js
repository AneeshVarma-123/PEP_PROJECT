
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();


const app = express();
const PORT = process.env.PORT || 5000;


app.use(express.json());
app.use(cors());


mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));




const HospitalSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  imageUrl: { type: String, required: true },
  specialty: { type: String, required: true },
  rating: { type: Number, required: true, min: 1, max: 5 },
});

module.exports = mongoose.model("Hospital", HospitalSchema);


app.get("/", (req, res) => {
    res.send("Hospital Management System Backend Running!");
});


app.post("api/v1/hospitals/create", async (req, res) => {
    try {
        const hospital = new Hospital(req.body);
        await hospital.save();
        res.status(201).json({ message: "Hospital created successfully!", hospital });
    } catch (error) {
        res.status(500).json({ message: "Error creating hospital", error });
    }
});


app.get("/api/v1/hospitals", async (req, res) => {
    try {
        const { city } = req.query;
        const hospitals = await Hospital.find(city ? { city } : {});
        res.status(200).json(hospitals);
    } catch (error) {
        res.status(500).json({ message: "Error fetching hospitals", error });
    }
});


app.get("/api/v1/hospitals/:id", async (req, res) => {
    try {
        const hospital = await Hospital.findById(req.params.id);
        res.status(200).json(hospital);
    } catch (error) {
        res.status(500).json({ message: "Error fetching hospital details", error });
    }
});


app.put("/api/v1/hospitals/update", async (req, res) => {
    try {
        const { id } = req.query;
        const updatedHospital = await Hospital.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json({ message: "Hospital updated successfully!", updatedHospital });
    } catch (error) {
        res.status(500).json({ message: "Error updating hospital", error });
    }
});

app.delete("/api/v1/hospitals/delete", async (req, res) => {
    try {
        const { id } = req.query;
        await Hospital.findByIdAndDelete(id);
        res.status(200).json({ message: "Hospital deleted successfully!" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting hospital", error });
    }
});


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
