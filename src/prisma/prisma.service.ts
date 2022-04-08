/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient{
    constructor(){
        super({
            datasources: {
                db:{
                    url: "mysql://root:skaled123a@localhost:3306/bookmarks"
                }
            }
        })
    }
}
