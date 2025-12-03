export const PHASES = {
  ENTER_GAME: "Enter Game",
  CREW_DIVISION: "Crew Division",
  CONTESTANT_REVEAL: "Contestant Reveal",
  EVENT: "Event",
  LINEUP: "Lineup",
  CHALLENGE: "Challenge",
  STRATEGIZE: "Strategize",
  SUMMIT_TWIST: "Summit Twist",
  SUMMIT_CARDS: "Summit Cards",
  SUMMIT_VOTE: "Summit Vote",
}

export const CONTESTANTS = {
  STUDENT: {
    name: "Student",
    health: 10,
    attribute: {
      type: "mind",

      body: 18,
      might: 5,
      agility: 4,
      stamina: 4,
      balance: 5,

      mind: 19,
      recall: 6,
      cognition: 6,
      willpower: 3,
      perception: 4,

      persona: 13,
      charm: 5,
      influence: 2,
      guile: 4,
      interrogation: 2,
    },
    traits: {
      age: "18",
      gender: "Male",
      status: "Single",
      trait: "Rebel",
    },
  },
  ACCOUNTANT: {
    name: "Accountant",
    health: 10,
    attribute: {
      type: "mind",

      body: 11,
      might: 2,
      agility: 4,
      stamina: 2,
      balance: 3,

      mind: 20,
      recall: 6,
      cognition: 7,
      willpower: 4,
      perception: 3,

      persona: 19,
      charm: 4,
      influence: 4,
      guile: 5,
      interrogation: 6,
    },
    traits: {
      age: "21",
      gender: "Female",
      status: "Single",
      trait: "Lazy",
    },
  },
  ARCHITECT: {
    name: "Architect",
    health: 10,
    attribute: {
      type: "mind",

      body: 19,
      might: 4,
      agility: 5,
      stamina: 6,
      balance: 4,

      mind: 21,
      recall: 5,
      cognition: 6,
      willpower: 4,
      perception: 6,

      persona: 10,
      charm: 3,
      influence: 2,
      guile: 4,
      interrogation: 1,
    },
    traits: {
      age: "32",
      gender: "Male",
      status: "Single",
      trait: "Rebel",
    },
  },
  SCIENTIST: {
    name: "Scientist",
    health: 10,
    attribute: {
      type: "mind",

      body: 19,
      might: 4,
      agility: 6,
      stamina: 5,
      balance: 4,

      mind: 22,
      recall: 6,
      cognition: 5,
      willpower: 6,
      perception: 5,

      persona: 9,
      charm: 1,
      influence: 3,
      guile: 2,
      interrogation: 3,
    },
    traits: {
      age: "40",
      gender: "Female",
      status: "Single",
      trait: "Diligent",
    },
  },
  PROFESSOR: {
    name: "Professor",
    health: 10,
    attribute: {
      type: "mind",

      body: 10,
      might: 2,
      agility: 3,
      stamina: 3,
      balance: 2,

      mind: 23,
      recall: 5,
      cognition: 7,
      willpower: 4,
      perception: 7,

      persona: 17,
      charm: 5,
      influence: 4,
      guile: 3,
      interrogation: 5,
    },
    traits: {
      age: "47",
      gender: "Male",
      status: "Married",
      trait: "TV Fan",
    },
  },
  LIBRARIAN: {
    name: "Librarian",
    health: 10,
    attribute: {
      type: "mind",

      body: 8,
      might: 1,
      agility: 3,
      stamina: 2,
      balance: 2,

      mind: 26,
      recall: 8,
      cognition: 7,
      willpower: 3,
      perception: 8,

      persona: 16,
      charm: 5,
      influence: 4,
      guile: 1,
      interrogation: 6,
    },
    traits: {
      age: "54",
      gender: "Male",
      status: "Married",
      trait: "Lazy",
    },
  },
  PARAMEDIC: {
    name: "Paramedic",
    health: 10,
    attribute: {
      type: "body",

      body: 20,
      might: 3,
      agility: 7,
      stamina: 4,
      balance: 6,

      mind: 17,
      recall: 5,
      cognition: 3,
      willpower: 4,
      perception: 5,

      persona: 13,
      charm: 5,
      influence: 3,
      guile: 2,
      interrogation: 3,
    },
    traits: {
      age: "24",
      gender: "Male",
      status: "Single",
      trait: "Dependable",
    },
  },
  MECHANIC: {
    name: "Mechanic",
    health: 10,
    attribute: {
      type: "body",

      body: 20,
      might: 4,
      agility: 6,
      stamina: 6,
      balance: 4,

      mind: 15,
      recall: 3,
      cognition: 3,
      willpower: 5,
      perception: 4,

      persona: 15,
      charm: 3,
      influence: 3,
      guile: 5,
      interrogation: 4,
    },
    traits: {
      age: "50",
      gender: "Female",
      status: "Married",
      trait: "Dependable",
    },
  },
  COURIER: {
    name: "Courier",
    health: 10,
    attribute: {
      type: "body",

      body: 21,
      might: 3,
      agility: 6,
      stamina: 7,
      balance: 5,

      mind: 14,
      recall: 2,
      cognition: 3,
      willpower: 5,
      perception: 4,

      persona: 15,
      charm: 6,
      influence: 3,
      guile: 2,
      interrogation: 4,
    },
    traits: {
      age: "26",
      gender: "Male",
      status: "Single",
      trait: "TV Fan",
    },
  },
  SOLDIER: {
    name: "Soldier",
    health: 10,
    attribute: {
      type: "body",

      body: 23,
      might: 7,
      agility: 6,
      stamina: 6,
      balance: 4,

      mind: 16,
      recall: 4,
      cognition: 4,
      willpower: 5,
      perception: 3,

      persona: 11,
      charm: 2,
      influence: 3,
      guile: 2,
      interrogation: 4,
    },
    traits: {
      age: "29",
      gender: "Male",
      status: "Single",
      trait: "Dependable",
    },
  },
  COACH: {
    name: "Coach",
    health: 10,
    attribute: {
      type: "body",

      body: 23,
      might: 7,
      agility: 5,
      stamina: 7,
      balance: 4,

      mind: 18,
      recall: 4,
      cognition: 3,
      willpower: 6,
      perception: 5,

      persona: 9,
      charm: 1,
      influence: 3,
      guile: 2,
      interrogation: 3,
    },
    traits: {
      age: "29",
      gender: "Female",
      status: "Single",
      trait: "Caretaker",
    },
  },
  BUILDER: {
    name: "Builder",
    health: 10,
    attribute: {
      type: "body",

      body: 24,
      might: 8,
      agility: 4,
      stamina: 5,
      balance: 7,

      mind: 12,
      recall: 2,
      cognition: 2,
      willpower: 4,
      perception: 4,

      persona: 14,
      charm: 4,
      influence: 2,
      guile: 4,
      interrogation: 4,
    },
    traits: {
      age: "32",
      gender: "Male",
      status: "Single",
      trait: "Diligent",
    },
  },
  SALESPERSON: {
    name: "Salesperson",
    health: 10,
    attribute: {
      type: "persona",

      body: 16,
      might: 5,
      agility: 4,
      stamina: 4,
      balance: 3,

      mind: 12,
      recall: 2,
      cognition: 3,
      willpower: 3,
      perception: 4,

      persona: 22,
      charm: 7,
      influence: 3,
      guile: 6,
      interrogation: 6,
    },
    traits: {
      age: "25",
      gender: "Female",
      status: "Single",
      trait: "Caretaker",
    },
  },
  BROKER: {
    name: "Broker",
    health: 10,
    attribute: {
      type: "persona",

      body: 18,
      might: 4,
      agility: 5,
      stamina: 5,
      balance: 4,

      mind: 11,
      recall: 3,
      cognition: 2,
      willpower: 4,
      perception: 2,

      persona: 21,
      charm: 4,
      influence: 4,
      guile: 6,
      interrogation: 7,
    },
    traits: {
      age: "26",
      gender: "Female",
      status: "Married",
      trait: "Diligent",
    },
  },
  HOUSEWIFE: {
    name: "Housewife",
    health: 10,
    attribute: {
      type: "persona",

      body: 12,
      might: 2,
      agility: 4,
      stamina: 4,
      balance: 2,

      mind: 18,
      recall: 6,
      cognition: 3,
      willpower: 3,
      perception: 6,

      persona: 20,
      charm: 8,
      influence: 4,
      guile: 4,
      interrogation: 4,
    },
    traits: {
      age: "39",
      gender: "Female",
      status: "Married",
      trait: "Caretaker",
    },
  },
  POLITICIAN: {
    name: "Politician",
    health: 10,
    attribute: {
      type: "persona",

      body: 11,
      might: 3,
      agility: 4,
      stamina: 2,
      balance: 2,

      mind: 18,
      recall: 3,
      cognition: 4,
      willpower: 5,
      perception: 6,

      persona: 21,
      charm: 4,
      influence: 7,
      guile: 6,
      interrogation: 4,
    },
    traits: {
      age: "65",
      gender: "Female",
      status: "Single",
      trait: "TV Fan",
    },
  },
}

export const EVENTCARDS = [
  {
    name: "Faux Safety",
    when: "", // Now, when needed, next summit
    where: "", // event phase, summit phase
    expiration: "", // none, 5+, 6+, 7+ , 8+
    effects: [], // Immune, Twist, Solo+1, Solo-1, Crew+1, Crew-1, Pick2+1, Pick2-1, Lazy+1, Lazy-1
  },
]

export const CHALLENGECARDS = [
  {
    name: "Taste Test",
    type: "One-On-One",
    description: "A race to devour unique delicacies from across the universe.",
    winner: "4pts",
    task: "Contestant type + fortitude",
    tiebreaker: "Highest focus",
    penalty:
      "-1 health for each contestant who lost their matchup on the losing crew.",
  },
]

export const SUMMITTWISTCARDS = [
  {
    name: "Taste Test",
    usage: "Before",
    description:
      "The pressure is turning on and the players are starting to play harder than ever. And if that means backstabbing and betrayal - then so be it.",
    effect:
      "All castaways with a troublemaker tag AND all castaways with a deception value of 8 or higher are safe and cannot be voted out.",
  },
]

export const MOCK_PLAYERS = [
  {
    name: "Player 1",
    icon: "sun",
    color: "var(--player-pink)",
    crew: "purple",
    revealed: false,
    contestants: [],
    eventCards: [],
  },
  {
    name: "Player 2",
    icon: "rocket",
    color: "var(--player-green)",
    crew: "purple",
    revealed: false,
    contestants: [],
    eventCards: [],
  },
  {
    name: "Player 3",
    icon: "stars",
    color: "var(--player-yellow)",
    crew: "purple",
    revealed: false,
    contestants: [],
    eventCards: [],
  },
  {
    name: "Player 4",
    icon: "moon",
    color: "var(--player-grey)",
    crew: "purple",
    revealed: false,
    contestants: [],
    eventCards: [],
  },
  {
    name: "Player 5",
    icon: "satellite",
    color: "var(--player-red)",
    crew: "yellow",
    revealed: false,
    contestants: [],
    eventCards: [],
  },
  {
    name: "Player 6",
    icon: "microscope",
    color: "var(--player-blue)",
    crew: "yellow",
    revealed: false,
    contestants: [],
    eventCards: [],
  },
  {
    name: "Player 7",
    icon: "alien",
    color: "var(--player-purple)",
    crew: "yellow",
    revealed: false,
    contestants: [],
    eventCards: [],
  },
  {
    name: "Player 8",
    icon: "helmet",
    color: "var(--player-orange)",
    crew: "yellow",
    revealed: false,
    contestants: [],
    eventCards: [],
  },
]
