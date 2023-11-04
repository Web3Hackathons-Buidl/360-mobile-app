import {
  Card,
  ChevronRight,
  Lock,
  Person,
  Slider,
  Swap,
  Tag,
} from "../assets/icons";

export const menuAccounts = [
  {
    id: 1,
    logo: Person,
    name: "Personal",
    next: ChevronRight,
  },
  {
    id: 2,
    logo: Tag,
    name: "INC",
    next: ChevronRight,
  },
  {
    id: 3,
    logo: Swap,
    name: "Live trading pair",
    next: ChevronRight,
  },
  {
    id: 4,
    logo: Lock,
    name: "Multisig",
    next: ChevronRight,
    notification: 9,
  },
  {
    id: 5,
    logo: Card,
    name: "Wallet",
    next: ChevronRight,
  },
  {
    id: 6,
    logo: Slider,
    name: "Settings",
    next: ChevronRight,
  },
];
