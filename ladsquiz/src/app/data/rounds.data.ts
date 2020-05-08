import { Round } from "../models/round"

export const ROUNDS: Round[] = [
    {
        id: 1,
        caption: "General Knowledge",
        questionCount: 10,
        pointsAvailable: 10,
        imageRound: false
    },
    {
        id: 2,
        caption: "World Landmarks",
        questionCount: 10,
        pointsAvailable: 20,
        imageRound: true
    },
    {
        id: 3,
        caption: "Complete the Lyrics",
        questionCount: 10,
        pointsAvailable: 20,
        imageRound: false
    },
    {
        id: 4,
        caption: "Grab Bag",
        questionCount: 8,
        pointsAvailable: 36,
        imageRound: false
    },
    {
        id: 5,
        caption: "Lego Movie Scenes",
        questionCount: 8,
        pointsAvailable: 8,
        imageRound: true
    },
    {
        id: 6,
        caption: "Who Said It?",
        questionCount: 15,
        pointsAvailable: 15,
        imageRound: true
    }
];