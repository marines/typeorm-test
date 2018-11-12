import {MigrationInterface, QueryRunner} from "typeorm";
import { User } from "../entity/User";

export class AddUser1542061700508 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        const userRepo = queryRunner.connection.getRepository(User);

        await userRepo.insert([{
            id: 1,
            firstName: 'Lorem',
            lastName: 'Ipsum',
            age: 10,
        }])
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
