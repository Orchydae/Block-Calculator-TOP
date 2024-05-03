// Import CalculatorModel class from CalculatorModel.js
import {CalculatorModel} from '../models/CalculatorModel.js';

class CalculatorController {
    constructor(model) {
        this.model = model;
        this.buttons = document.querySelectorAll('.buttons button');
        this.buttons.forEach(button => {
            button.addEventListener('click', () => {
                this.handleButtonClick(button.textContent);
            });
        });
    }

    handleButtonClick(value) {
        if (isNaN(value)) {
            this.handleSymbol(value);
        } else {
            this.handleNumber(value);
        }
    }

    handleNumber(number) {
        console.log('Number:', number);
    }

}

const model = new CalculatorModel();
const constroller = new CalculatorController(model);