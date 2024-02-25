import { EmployeeCardModel } from "@/models";
import { NextRouter } from "next/router";

export class TeamViewModel {
    router:NextRouter;
    employees: EmployeeCardModel[] = [
        {
            name: "Giovani Bacardo",
            role: "farmer",
            links: ["facebook", "twitter"],
            image: "Team/Team/person_1.jpg",
        },
        {
            name: "Marianne Loreno",
            role: "designer",
            links: ["ig", "facebook", "twitter"],
            image: "Team/Team/person_2.jpg",
        },
        {
            name: "Riga Pelore",
            role: "farmer",
            links: ["ig", "facebook", "twitter"],
            image: "Team/Team/person_3.jpg",
        },
        {
            name: "Keira Knightley",
            role: "farmer",
            links: ["facebook", "twitter"],
            image: "Team/Team/person_4.jpg",
        },
        {
            name: "Scott Lawrence",
            role: "designer",
            links: ["ig", "facebook", "twitter"],
            image: "Team/Team/person_5.jpg",
        },
        {
            name: "Karen Allen",
            role: "farmer",
            links: ["ig", "facebook", "twitter"],
            image: "Team/Team/person_6.jpg",
        },
    ];
    constructor(router:NextRouter){
        this.router = router;
    }
}