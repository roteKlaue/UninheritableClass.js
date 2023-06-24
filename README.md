# Uninheritable.js

This is a simple proof of concept class that cannot be modified at runtime.
In JavaScript you can edit any class by simply accessing its prototype.
This example shows how you can use set/get methods to restrict access to the prototype of your class.

```js
class Uninheritable {
    #unaccessableProperty = true;
    #unaccessableFunction = function() {
        console.log(this.#unaccessableProperty);
    }

    constructor() {
        if (new.target !== Uninheritable) {
            // check if constructor is the same as of the current class
            // remove the posibility of extending the class
            throw new Error("This class is not inheritable");
        }

        Object.preventExtensions(this);
    }

    get unOverritableFunction() {
        // returns the function you want to give access to
        return this.#unaccessableFunction;
    }

    set unOverritableFunction(val) {
        // catches all attempts to overwrite the function
        throw new Error("This function is not overwritable");
    }
}
```