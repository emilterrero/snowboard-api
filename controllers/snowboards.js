import Snowboard from "../models/snowboard.js";

export const getSnowboards = async (req, res) => {
  try {
    const snowboards = await Snowboard.find();
    res.json(snowboards);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const getSnowboard = async (req, res) => {
  try {
    const { id } = req.params;
    const snowboard = await Snowboard.findById(id);

    if (snowboard) {
      return res.json(snowboard);
    }

    res.status(400).json({ message: "Snowboard not found!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const createSnowboard = async (req, res) => {
  try {
    const snowboard = new Snowboard(req.body);
    await snowboard.save();
    res.status(201).json(snowboard);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const updateSnowboard = async (req, res) => {
    try {
        const { id } = req.params;
        const snowboard = await Snowboard.findByIdAndUpdate(id, req.body);
        res.status(200).json(snowboard);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
};

export const deleteSnowboard = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Snowboard.findByIdAndDelete(id);

    if (deleted) {
      return res.status(200).send("Snowboard deleted!");
    }

    throw new Error("Snowboard not found");
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};