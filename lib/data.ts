interface Card {
  title: string;
  description: string;
  footer: string;
}
type Payment = {
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
}
 


export const cards: Card[] = [
  {
    "title": "Card 1",
    "description": "This is the description for Card 1",
    "footer": "Wow, how?"
  },
  {
    "title": "Card 2",
    "description": "This is the description for Card 2",
    "footer": "View more"
  },
  {
    "title": "Card 3",
    "description": "This is the description for Card 3",
    "footer": "Donate"
  }
];

export const payments: Payment[] = [
  {
    id: "728ed52f",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "489e1d42",
    amount: 125,
    status: "processing",
    email: "example@gmail.com",
  },
  // ...
]