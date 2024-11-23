## JavaScript Foundations

Master DOM manipulation, events, and ES6+ features like arrow functions, destructuring, and modules.

### DOM Manipulation

The DOM (Document Object Model) represents the structure of an HTML document as a tree of objects. You can manipulate these objects using JavaScript to dynamically change the content, structure, and styling of web pages.

#### Basic Operations

**Select Elements:**

```javascript
const elementById = document.getElementById('uniqueId');
const elementsByClass = document.getElementsByClassName('className');
const elementsByTag = document.getElementsByTagName('tagName');
const firstElement = document.querySelector('.className');
const allElements = document.querySelectorAll('.className');
```


**Create and Insert Elements:**
```javascript
const newDiv = document.createElement('div');
newDiv.textContent = 'Hello World!';
document.body.appendChild(newDiv);
```

**Modify Elements:**

```javascript
newDiv.style.color = 'blue'; // Change the text color
newDiv.setAttribute('id', 'newId'); // Add an attribute
newDiv.removeAttribute('id'); // Remove an attribute
```

### Events

Handling events allows you to execute code in response to user actions.**

**Commonly Used Events:**

- Add Event Listener:
```javascript
const button = document.querySelector('button');
button.addEventListener('click', () => {
  alert('Button clicked!');
});
```

- Event Object:

```javascript
button.addEventListener('click', (event) => {
  console.log(event.target); // Logs the element that was clicked
});
```

### ES6+ Features

**Arrow Functions:**

- Simplified syntax for function expressions.

For simple expressions, single-line arrow functions can omit the braces {} and the return keyword:

```javascript
const add = (a, b) => a + b; // Implicit return for single expressions

const greet = name => `Hello, ${name}`; // Parentheses optional for single parameter

const square = num => ({ value: num * num }); // Returning an object literal

```
- Multi-Line Arrow Functions
For more complex operations or when you need to include multiple statements, you enclose the function body in curly braces `{}` and explicitly use the return keyword when you want to `return` a value:

```javascript
const multiply = (a, b) => {
  const result = a * b;
  return result;
};

```


**Destructuring:**

- Unpacking values from arrays or properties from objects into distinct variables.

```javascript
const [first, second] = [10, 20];
const { name, age } = { name: 'John', age: 30 };
```

**Modules:**


- Allow for splitting code into reusable pieces with `import` and `export`.
```javascript
// myModule.js
export const greeting = 'Hello, World!';
export const greet = (name) => `Hello, ${name}`;


// main.js
import { greeting, greet } from './myModule.js';
console.log(greeting);
console.log(greet('Alice'));
```

**Promises and Async/Await:**

- Handling asynchronous operations more easily.

**Using Promises:**

- Promises represent the eventual completion (or failure) of an asynchronous operation.

```javascript
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { id: 1, name: 'Item' };
      resolve(data);
    }, 2000);
  });
};

// now call the above method in below 2 ways
fetchData()
  .then((data) => {
    console.log('Data fetched:', data);
  })
  .catch((error) => {
    console.error('Error fetching data:', error);
  });

//or 
const fetchAndLogData = async () => {
  try {
    const data = await fetchData();
    console.log('Data fetched:', data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

fetchAndLogData();
```



By mastering these foundational JavaScript concepts, you'll be well-prepared to transition into more advanced topics like React and Next.js, where these skills will be applied extensively.





