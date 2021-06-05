'use strict';

import { CORRECT_INCORRECT_ICON } from "../constants.js";
import createDOMElement from "../utils/createDOMElement.js";


const createCorrectWrongIcon = () => {
    const IconContainer = createDOMElement('div', {id: CORRECT_INCORRECT_ICON})
    return IconContainer;
}

export default createCorrectWrongIcon;