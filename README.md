# Incorrect Null Handling in Function foo

This repository demonstrates a common JavaScript bug related to incorrect handling of null values.  The function `foo` is designed to add two numbers, but its handling of null values is flawed.  The provided solution demonstrates the correct implementation.

## Bug
The original `foo` function returns 0 if either `a` or `b` is null.  The correct behavior should be to return 0 only if *both* `a` and `b` are null. Otherwise, if one argument is null, it should return the other argument, and if both are not null then it should return their sum.

## Solution
The solution demonstrates the correct handling of null values to adhere to the expected behavior.