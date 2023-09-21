import { Contract } from "./contract";

export enum Socials {
    VK,
    TELEGRAMM
}

export enum Sex {
    MALE,
    FEMALE
}

export type SexOptions = {
    value: string;
    option: Sex;
}

export const sexOptions: SexOptions[] = [
    {
        value: "Мужской",
        option: Sex.MALE
    },
    {
        value: "Женский",
        option: Sex.FEMALE
    }
]

export enum Citizenship {
    RU="Россия",
    KZ="Казахстан"
}

export type Person = {
    id: number;
    contract: Contract;
    firstName: string;
    lastName: string;
    patronymic: string;
    channel: Socials,
    sex: Sex,
    birthdate: string,
    age: number,
    citizenship: Citizenship,
    telephone: string;
    email: string;
    status?: boolean;
    trainer?: string;
    cors: string;
}