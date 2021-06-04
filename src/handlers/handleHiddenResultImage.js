'use strict';
import { addClass, removeClass } from '../utils/manageClass.js';

const handleHiddenResultImage = ()=>{
    const userInterface = document.getElementById("user-interface")
  console.log(userInterface.children[0].children[1])
  addClass(userInterface.children[0].children[1],"hidden");
}


export default handleHiddenResultImage;
