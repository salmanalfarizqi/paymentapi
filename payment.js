const express = require('express');
const router = express.Router();
const stripe = require('stripe')('sk_test_51Ofn4vII9WKT6a5Qhta5rEQamO2uWpVOT1Z1lGh6wmPDD3lv1beoO8KAnWoiPWEUTv3XYh9rOcoIjMmP0GOp51rl00MzPG4xtV');
const token = "ey-75444396498234234841"

router.post('/intent', async(req, res) => {
    if (req.query.apiKey != token) {
        res.json([
            status = 'status : ' + 401,
            message = 'messgae : not authenticated'
        ])
    } else {
        try {
            const paymentIntent = await stripe.paymentIntents.create({
                amount: req.body.amount,
                currency: 'idr',
                automatic_payment_methods: {
                    enabled: true,
                },
            });
            res.json({ paymentIntent: paymentIntent.client_secret });
        } catch (e) {
            res.status(400).json({
                error: e.message,
            });
        }
    }
});

module.exports = router;