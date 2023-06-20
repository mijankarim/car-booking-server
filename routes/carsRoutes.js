import express from 'express';
import {
    getAllcars,
    addCar,
    editCar,
    deleteCar
} from '../controllers/carController.js';

const router = express.Router();

router.route("/getallcars").get(getAllcars);
router.route("/addcar").post(addCar);
router.route("/editcar").put(editCar);
router.route("/deletecar").delete(deleteCar);

export default router; 