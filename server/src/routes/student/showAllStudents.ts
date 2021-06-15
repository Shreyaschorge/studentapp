import express, {Request, Response} from 'express';

import {requireAuth} from '../../middlewares';
import { Student } from '../../models/students';

const router = express.Router();

router.get("/student",
  async (req: Request, res: Response) => {

    try {
      const students = await Student.find({});
      res.status(200).send(students);
      
    } catch (err) {
      console.log(err)
    }

  });

  export {router as showAllStudentsRouter}