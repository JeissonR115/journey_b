import { Router } from 'express';
const router = Router();

import { createJourney, deleteJourney, getJourneyById, getJourneys } from '../controllers/journeyController.js';
import { } from '../controllers/driverController.js';

// router.post('/add', addJourney);
// router.post('/assign-vehicle', assignVehicle);
// router.post('/confirm-vehicle', confirmVehicle);
// router.put('/edit-assignment', editAssignment);
// router.delete('/cancel', cancelJourney);
// router.get('/approved', getApprovedJourneys);
// router.get('/pending', getPendingJourneys);
router.get('/', getJourneys);
router.get('/:id', getJourneyById)
router.post('/', createJourney)
router.delete('/:id', deleteJourney)
router.get('/a', (req, res) => {
    res.send('A');
    console.log('hola a a')
})
export default router;
