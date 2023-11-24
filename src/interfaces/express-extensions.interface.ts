import { Request } from 'express';
import { UserDto } from "../dtos/userDto";

export type ExtendedRequest = Request & {
    user?: UserDto;
}