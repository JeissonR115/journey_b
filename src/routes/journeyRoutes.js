import { Router } from 'express';
const router = Router();

import { getJourneys } from '../controllers/journeyController.js';

// router.post('/add', addJourney);
// router.post('/assign-vehicle', assignVehicle);
// router.post('/confirm-vehicle', confirmVehicle);
// router.put('/edit-assignment', editAssignment);
// router.delete('/cancel', cancelJourney);
// router.get('/approved', getApprovedJourneys);
// router.get('/pending', getPendingJourneys);
router.get('/', getJourneys);
router.get('/a', (req, res) => {
    res.send('A');
    console.log('hola a a')
})
export default router;
