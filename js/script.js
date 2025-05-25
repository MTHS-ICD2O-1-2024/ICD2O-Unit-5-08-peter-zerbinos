// Copyright (c) 2025 Peter Zerbinos All rights reserved
//
// Created by: Peter Zerbinos
// Created on: May 2025
// This file contains the JS functions for index.html

"use strict"

/**
 * This function calculates division using repeated subtraction.
 */
function calculateDivisionWithSubtraction() {
  // variables
  const userDividend = parseInt(document.getElementById('user-dividend').value)
  const userDivisor = parseInt(document.getElementById('user-divisor').value)
  let remainder = userDividend
  let counter = 0

  // process
  while (true) {
    counter++
    remainder -= userDivisor
    if (remainder < userDivisor) {
      break
    }
  }

  // output
  document.getElementById('result').innerText =
    userDividend + ' ÷ ' + userDivisor + ' = ' + counter + ' and the remainder is: ' + remainder
}
