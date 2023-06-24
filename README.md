# Uninheritable.js

**Uninheritable** is a simple proof of concept class in JavaScript that demonstrates how you can create a class that cannot be modified at runtime. It uses the concept of setter and getter methods to restrict access to the prototype of the class, providing a level of immutability.

## Class Details
### Constructor

The `constructor` function of the `Uninheritable` class is responsible for initializing instances of the class. It ensures that the class cannot be inherited from by checking if the `new.target` is the same as the `Uninheritable` class itself. If it is not, an error is thrown, preventing inheritance. Additionally, the `Object.preventExtensions()` method is called to prevent any extension of the instance, disallowing the addition of new properties.

### Properties

- `#unaccessableProperty`: A private property that is inaccessible and unmodifiable. It is denoted by the # symbol.

### Methods

- `#unaccessableFunction`: A private function that is inaccessible and unmodifiable. It logs the value of the `#unaccessableProperty` to the console.
- `get unOverritableFunction()`: An accessor method that returns the private function `#unaccessableFunction`. This allows controlled access to the function.
- `set unOverritableFunction(val)`: A setter method that throws an error if an attempt is made to overwrite the function. This enforces the immutability of the function.

## Limitations

- The protection mechanisms provided by the `Uninheritable` class apply to the instantiated object's properties and functions. Properties and functions defined on the prototype chain may still be modifiable.
- This class serves as a proof of concept and may not cover all possible scenarios or security concerns. It's essential to evaluate your specific use case and requirements to ensure the desired level of immutability and security.

## License

This project is open source and available under the [MIT License](https://opensource.org/licenses/MIT).