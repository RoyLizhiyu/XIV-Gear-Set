import express from 'express';
import { getGears } from '../controllers/gears.js';
const router = express.Router();


router.get('/:job',getGears)

export default router;