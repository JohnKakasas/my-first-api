const express = require('express');
const router = express.Router();

let users = []; // Προσωρινή αποθήκευση χρηστών (μόνο για άσκηση)

// POST /users/register
router.post('/register', (req, res) => {
    const { username, email, password } = req.body;

    // Basic validation
    if (!username || !email || !password) {
        return res.status(400).json({ message: 'Λείπουν πεδία: username, email, password' });
    }

    const existingUser = users.find(u => u.email === email);
    if (existingUser) {
        return res.status(400).json({ message: 'Ο χρήστης υπάρχει ήδη!' });
    }

    const newUser = { username, email, password };
    users.push(newUser);

    return res.status(201).json({ message: 'Επιτυχής εγγραφή!', user: { username, email } });
});

// POST /users/login
router.post('/login', (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Λείπουν πεδία: email, password' });
    }

    const user = users.find(u => u.email === email);
    if (!user || user.password !== password) {
        return res.status(401).json({ message: 'Λάθος email ή κωδικός!' });
    }

    return res.json({ message: 'Επιτυχής σύνδεση!' });
});

module.exports = router;