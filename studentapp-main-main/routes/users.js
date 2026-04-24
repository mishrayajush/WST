var express = require('express');
var router = express.Router();
const UserTable = require('../models/userModel')

/* CREATE User */
router.post('/create', async (req, res) => {
  try {
    const userData = new UserTable(req.body)
    const result = await userData.save()
    res.status(201).json(result)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
})

/* READ All User */
router.get('/all', async (req, res) => {
  try {
    const result = await UserTable.find()
    res.json(result)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

/* READ Single User */
router.get('/detail/:id', async (req, res) => {
  try {
    const result = await UserTable.findById(req.params.id)
    res.json(result)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

/* UPDATE user */
router.put('/update/:id', async (req, res) => {
  try {
    const updated = await UserTable.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    )
    res.json(updated)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
})

/* DELETE user */
router.delete('/delete/:id', async (req, res) => {
  try {
    await UserTable.findByIdAndDelete(req.params.id)
    res.json({ message: "User deleted" })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

module.exports = router;
