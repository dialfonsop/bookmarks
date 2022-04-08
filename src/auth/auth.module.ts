/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { Module } from "@nestjs/common";
import { PrismaModule } from "src/prisma/prisma.module";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";


@Module({
    controllers: [AuthController],
    providers: [AuthService]
})
export class AuthModule{

}