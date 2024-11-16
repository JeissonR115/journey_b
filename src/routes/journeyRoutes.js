import { Router } from 'express';
const router = Router();

// import { addJourney, assignVehicle, confirmVehicle, editAssignment, cancelJourney, getApprovedJourneys, getPendingJourneys } from '../controllers/journeyController';

// router.post('/add', addJourney);
// router.post('/assign-vehicle', assignVehicle);
// router.post('/confirm-vehicle', confirmVehicle);
// router.put('/edit-assignment', editAssignment);
// router.delete('/cancel', cancelJourney);
// router.get('/approved', getApprovedJourneys);
// router.get('/pending', getPendingJourneys);
router.get('/a', (req, res) => {
    res.send('A');
    console.log('hola a a')
})
export default router;
