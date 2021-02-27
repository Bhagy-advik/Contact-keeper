const express = require('express');
const router = express.Router();

//@route        GET api/contacts
//@desc         Get all users contacts
//@access       Private
router.get('/',(req, res) =>{
    res.send('Get all contacts');
});
//@route        POST api/contacts
//@desc         Add ne contact
//@access       Private
router.post('/',(req, res) =>{
    res.send('Add new contacts');
});

//@route        PUT api/contacts/:id
//@desc         UPDATE contacts
//@access       Private
router.put('/:id',(req, res) =>{
    res.send('Update Contact');
});

//@route        Delete api/contacts/:id
//@desc         Delete contacts
//@access       Private
router.delete('/:id',(req, res) =>{
    res.send('Delete Contact');
});



module.exports = router;