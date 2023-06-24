/**
 * Class representing an uninheritable and unmodifiable class.
 */
class Uninheritable {
    /**
     * Private property that is inaccessible and unmodifiable.
     * @private
     */
    #unaccessableProperty = true;

    
    /**
     * Private function that is inaccessible and unmodifiable.
     * @private
     */
    #unaccessableFunction = function() {
        console.log(this.#unaccessableProperty);
    }

    /**
     * Creates an instance of the Uninheritable class.
     * Throws an error if the class is inherited from.
     * Prevents extension of the instance to disallow adding new properties.
     * @throws {Error} If the class is inherited from.
     */
    constructor() {
        if (new.target !== Uninheritable) {
            throw new Error("This class is not inheritable");
        }

        Object.preventExtensions(this);
    }

    /**
     * Accessor for the unoverritable function.
     * Returns the private function #unaccessableFunction.
     * @returns {Function} The unoverritable function.
     */
    get unOverritableFunction() {
        return this.#unaccessableFunction;
    }

    /**
     * Setter for the unoverritable function.
     * Throws an error if an attempt is made to overwrite it.
     * @throws {Error} If an attempt is made to overwrite the function.
     */
    set unOverritableFunction(val) {
        throw new Error("This function is not overwritable");
    }
}

class Extender extends Uninheritable {
    
}

new Extender(); // Throws an error: "This class is not inheritable"

const a = new Uninheritable();

a.unOverritableFunction(); // Works

a.unOverritableFunction = () => {
    console.log("error"); // Throws an error: "This function is not overwritable"
}

Uninheritable.prototype.unOverritableFunction = () => {
    console.log("error"); // Throws an error: "This function is not overwritable"
}