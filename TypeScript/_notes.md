# TypeScript

## Install TypeScript Globally

    npm install -g typescript

To compile a TS file

```bash
tsc filename.ts
node filename.js
```

## Basic Type Annotation

Declare different variable types. Once declared as sepcific variable, TS will complain if you attempt to change it to another type. It will not stop it from compiling, but could cause issues.

```ts
// DECLERATIONS
let myVariable: string = "Some awesome string" // string type
let numOfLives: number = 9 // number type
let numOfLives = "A string" // reasigning to different type will not work
let gameOver: boolean = false
```

TypeScript will infer types from certain variables based on the initial type.

```ts
// INFERENCE
let tvShow = "Lost" // infered to be a string
tvShow = 8 // this will cause an error
```

The `any` type will allow you to change the type to whatever you want / need; TS will not complain in this case. The `any` type should be used sparingly. For example, it might be used if you are unsure what the type will be of a given variable.

```ts
// THE ANY TYPE
let thing: any = "hello"
thing = 400  // reasignment to different type causes no issues
let var;  // this will also be of the any type
```

## Functions

Parameters will default to `any` if not explicitly typed. TypeScript is also smart enough to determine if a function will return multiple types.

```ts
// TYPE PARAMETERS IN FUNCTIONS
function square(num: number) {
	return num * num
}

// MULTIPLE PARAMETERS
const doSomething = (person: string, age: number, isFunny: boolean) => {}

// DEFAULT PARAMETERS
function greet(person: string = "stranger") {
	"...do something"
}

// RETURN TYPE
const addNums = (x: number, y: number): number => {
	return x + y
}

// VOID TYPE
function pr(): void {
	// this function does not return anything
	console.log("something")
}

// NEVER TYPE
function makeError(msg: string): never {
	// this function should never return anything
	throw new Error(msg)
}
```

## Object Types

Objects are fairly intuitive to use.

```ts
// OBJECT AS PARAMETER
function printName(person: { first: string; last: string }): void {
	console.log(person.first + " " + person.last)
}

// OBJECT WITH INITIALIZATION
let coordinate: { x: number; y: number } = { x: 33, y: 22 }

// FUNCTION WITH OBJECT RETURN TYPE
function ramdonCoordinate(): { x: number; y: number } {
	return { x: Math.random(), y: Math.random() }
}
```

TypeScript has type aliases, which allow for an object to be declared seperately with their types.

```ts
// TYPE ALIAS
type Point = {
	x: number
	y: number
}

let coordinate: Point = {x 33, y:22}    // variable using alias
function randomCoordinate(): Point {return ...}     // function using alias
```
