import {Router} from 'express';
import validateDto from '../middleware/validateDtoMiddleware';
import {UserDto} from '../dtos/userDto';

import {login, register} from '../controllers/authController';

const router = Router();

router.post('/register', validateDto(UserDto), register);
router.post('/login', validateDto(UserDto), login);


export default router;
