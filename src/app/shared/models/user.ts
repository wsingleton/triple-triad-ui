import { Player } from "./player";

export class User {

    id: number;
    firstName: string;
    lastName: string;
    email: string;
    playerProfile: Player;

    constructor(id: number, firstName: string, lastName: string, email: string, playerProfile: Player) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.playerProfile = playerProfile;
    }

}