// Copyright 2009 the Sputnik authors.  All rights reserved.
/**
 * The Function prototype object is itself a Function object that, when invoked, accepts any arguments and returns undefined
 *
 * @path ch15/15.3/15.3.4/S15.3.4_A2_T2.js
 * @description Call Function.prototype(null,void 0)
 */

//CHECK#1
try {
  if (Function.prototype(null,void 0) !== undefined) {
    $ERROR('#1: The Function prototype object is itself a Function object that, when invoked, accepts any arguments and returns undefined');
  }
} catch (e) {
  $ERROR('#1.1: The Function prototype object is itself a Function object that, when invoked, accepts any arguments and returns undefined: '+e);
}
