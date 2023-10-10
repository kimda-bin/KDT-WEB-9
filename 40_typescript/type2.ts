//interface
interface Student {
  name: string;
  grade: number;
  isPassed: boolean;
}

let persons: Student = {
  name: "dabeen",
  grade: 4,
  isPassed: true,
};

/*----------------------------------------------------------*/
//type
type Gender = "Female" | "male" | "Boy" | "Girl";
const gender: Gender = "Boy";

/*----------------------------------------------------------*/
//실습문제2
interface Game {
  title: string;
  price: number;
  desc?: string;
  category: string;
  platform: string;
}
