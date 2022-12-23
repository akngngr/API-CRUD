import express from 'express';
import { createUser, getUsers, getUser, deleteUser, updateUser } from '../controllers/users.js';


const router = express.Router();

router.get('/users', getUsers);

router.post('/users', createUser);

// /users/2 => req.params { id: 2 }

router.get('/users/:id', getUser);

router.delete('/users/:id', deleteUser);

router.patch('/users/:id', updateUser);

export default router;