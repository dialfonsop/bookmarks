/* eslint-disable prettier/prettier */

import { IsEmail, IsOptional, IsString } from "class-validator"

/* eslint-disable @typescript-eslint/no-unused-vars */
export class EditUserDto{

    @IsEmail()
    @IsOptional()
    email?: string

    @IsString()
    @IsOptional()
    firstName?: string
    
    @IsString()
    @IsOptional()
    lastName?: string
}