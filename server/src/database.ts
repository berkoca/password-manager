import { Connection, createConnection } from "typeorm";
import { Password } from "./models/Password";

export abstract class Database {
    public static connected: boolean = false;
    public static connection: Connection;
    public static async connect(): Promise<void> {
        try {
            Database.connection = await createConnection({
                type: "sqlite",
                database: "database.sqlite",
                synchronize: true,
                logging: false,
                entities: [
                    Password
                ]
            });
            
            Database.connected = true;
            return console.log("Successfully connected to database.");
        } catch (error) {
            return console.log("An error occured while trying to connect to database.");
        }
    }
}