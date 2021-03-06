/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.6/15.2.3.6-4-232.js
 * @description Object.defineProperty - 'O' is an Array, 'name' is an array index property, the [[Set]] field of 'desc' and the [[Set]] attribute value of 'name' are two objects which refer to the same object (15.4.5.1 step 4.c)
 */


function testcase() {
        var arrObj = [];

        function setFunc(value) {
            arrObj.setVerifyHelpProp = value;
        }

        Object.defineProperty(arrObj, "0", { set: setFunc });

        Object.defineProperty(arrObj, "0", { set: setFunc });
        return accessorPropertyAttributesAreCorrect(arrObj, "0", undefined, setFunc, "setVerifyHelpProp", false, false);
    }
runTestCase(testcase);
