import { concatenation } from "./concatenation";
const button = document.querySelector("button");
const input = document.querySelector("input");
if (button && input) {
    button.addEventListener("click", () => {
        concatenation(input.value, "hello!");
    });
}
// function add(num1: number, num2: number): string {
//   return `${num1 + num2}`;
// }
// console.log(add(1, 1));
// function add1(num1: number, num2: number): void {
//   console.log(num1 + num2);
// }
// add1(2, 4);
// let total: number = 100;
// let firstName: string = "Bob";
// let isActive: boolean = false;
// let consta: null = null;
// let undf: undefined = undefined;
// let age = 10;
// age = "12";
// const numbers: number[] = [1, 2, 3, 4, 5, 6];
// numbers.push("13");
// const user: { name: string; age: number } = {
//   name: "bob",
//   age: 12,
// };
// type User = {
//   name: string;
//   age: number | string;
// };
// const user: User = {
//   name: "Bob",
//   age: "14",
// };
// type eventType = "lesson" | "deadline";
// const event: eventType = "deadline";
// type size = "smal" | "medium" | "large";
// let age: any = 10;
// age = "154";
// age = true;
// let sandName: unknown = "bob";
// sandName = 12;
// sandName.toFixed(1);
// enum Sizes {
//   small = "small",
//   medium = "medium",
//   large = "large",
// }
// const button: Sizes = Sizes.large;
// type User = {
//   name: string;
// };
// function foo(user: User): void {
//   console.log(`Hello ${user.name}`);
// }
// type Obj = {
//   name: string;
//   age: number;
//   hobby: string;
// };
// function foo2(name: string, age: number, hobby: string): Obj {
//   return {
//     name,
//     age,
//     hobby,
//   };
// }
// type Car = {
//   color: string;
//   price: number;
//   currency: string;
//   start: () => {};
// };
// const Car = {
//   color: "red",
//   price: 1000,
//   currency: "UAH",
//   start() {
//     console.log("Start");
//   },
// };
// type User = {
//   name: string;
//   age: number;
//   role?: string;
// };
// const user: User = {
//   name: "bob",
//   age: 12,
// };
// const admin: User = {
//   name: "John",
//   age: 23,
//   role: "Admin",
// };
//# sourceMappingURL=index.js.map