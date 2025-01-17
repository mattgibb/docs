---
sidebar_position: 3
title: Numeric Functions
---

C8QL offers some numeric functions for calculations. The following functions are supported:

## ABS()

`ABS(value) → unsignedValue`

Return the absolute part of _value_.

- **value** (number): any number, positive or negative
- returns **unsignedValue** (number): the number without + or - sign

```js
ABS(-5) // 5
ABS(+5) // 5
ABS(3.5) // 3.5
```

## ACOS()

`ACOS(value) → num`

Return the arccosine of _value_.

- **value** (number): the input value
- returns **num** (number\|null): the arccosine of _value_, or _null_ if _value_ is outside the valid range -1 and 1 (inclusive)

```js
ACOS(-1) // 3.141592653589793
ACOS(0) // 1.5707963267948966
ACOS(1) // 0
ACOS(2) // null
```

## ASIN()

`ASIN(value) → num`

Return the arcsine of _value_.

- **value** (number): the input value
- returns **num** (number\|null): the arcsine of _value_, or _null_ if _value_ is outside the valid range -1 and 1 (inclusive)

```js
ASIN(1) // 1.5707963267948966
ASIN(0) // 0
ASIN(-1) // -1.5707963267948966
ASIN(2) // null
```

## ATAN()

`ATAN(value) → num`

Return the arctangent of _value_.

- **value** (number): the input value
- returns **num** (number): the arctangent of _value_

```js
ATAN(-1) // -0.7853981633974483
ATAN(0) // 0
ATAN(10) // 1.4711276743037347
```

## ATAN2()

`ATAN2(y, x) → num`

Return the arctangent of the quotient of _y_ and _x_.

```js
ATAN2(0, 0) // 0
ATAN2(1, 0) // 1.5707963267948966
ATAN2(1, 1) // 0.7853981633974483
ATAN2(-10, 20) // -0.4636476090008061
```

## AVERAGE()

`AVERAGE(numArray) → mean`

Return the average (arithmetic mean) of the values in _array_.

- **numArray** (array): an array of numbers, _null_ values are ignored
- returns **mean** (number\|null): the average value of _numArray_. If the array is
  empty or contains _null_ values only, _null_ will be returned.

```js
AVERAGE( [5, 2, 9, 2] ) // 4.5
AVERAGE( [ -3, -5, 2 ] ) // -2
AVERAGE( [ 999, 80, 4, 4, 4, 3, 3, 3 ] ) // 137.5
```

## AVG()

This is an alias for [AVERAGE()](#average).

## CEIL()

`CEIL(value) → roundedValue`

Return the integer closest but not less than _value_.

To round downward, see [FLOOR()](#floor).<br />
To round to the nearest integer value, see [ROUND()](#round).

- **value** (number): any number
- returns **roundedValue** (number): the value rounded to the ceiling

```js
CEIL(2.49) // 3
CEIL(2.50) // 3
CEIL(-2.50) // -2
CEIL(-2.51) // -2
```

## COS()

`COS(value) → num`

Return the cosine of _value_.

- **value** (number): the input value
- returns **num** (number): the cosine of _value_

```js
COS(1) // 0.5403023058681398 
COS(0) // 1
COS(-3.141592653589783) // -1
COS(RADIANS(45)) // 0.7071067811865476
```

## DEGREES()

`DEGREES(rad) → num`

Return the angle converted from radians to degrees.

- **rad** (number): the input value
- returns **num** (number): the angle in degrees

```js
DEGREES(0.7853981633974483) // 45
DEGREES(0) // 0
DEGREES(3.141592653589793) // 180
```

## EXP()

`EXP(value) → num`

Return Euler's constant (2.71828...) raised to the power of _value_.

- **value** (number): the input value
- returns **num** (number): Euler's constant raised to the power of _value_

```js
EXP(1) // 2.718281828459045
EXP(10) // 22026.46579480671
EXP(0) // 1
```

## EXP2()

`EXP2(value) → num`

Return 2 raised to the power of _value_.

- **value** (number): the input value
- returns **num** (number): 2 raised to the power of _value_

```js
EXP2(16) // 65536
EXP2(1) // 2
EXP2(0) // 1
```

## FLOOR()

`FLOOR(value) → roundedValue`

Return the integer closest but not greater than _value_.

To round upward, see [CEIL()](#ceil).<br />
To round to the nearest integer value, see [ROUND()](#round).

- **value** (number): any number
- returns **roundedValue** (number): the value rounded downward

```js
FLOOR(2.49) // 2
FLOOR(2.50) // 2
FLOOR(-2.50) // -3
FLOOR(-2.51) // -3
```

## LOG()

`LOG(value) → num`

Return the natural logarithm of _value_. The base is Euler's constant (2.71828...).

- **value** (number): the input value
- returns **num** (number\|null): the natural logarithm of _value_, or _null_ if _value_ is equal or less than 0

```js
LOG(2.718281828459045) // 1
LOG(10) // 2.302585092994046
LOG(0) // null
```

## LOG2()

`LOG2(value) → num`

Return the base 2 logarithm of _value_.

- **value** (number): the input value
- returns **num** (number\|null): the base 2 logarithm of _value_, or _null_ if _value_ is equal or less than 0

```js
LOG2(1024) // 10
LOG2(8) // 3
LOG2(0) // null
```

## LOG10()

`LOG10(value) → num`

Return the base 10 logarithm of _value_.

- **value** (number): the input value
- returns **num** (number): the base 10 logarithm of _value_, or _null_ if _value_ is equal or less than 0

```js
LOG10(10000) // 10
LOG10(10) // 1
LOG10(0) // null
```

## MAX()

`MAX(anyArray) → max`

Return the greatest element of _anyArray_. The array is not limited to numbers. Refer to [Type and Value Order](../type-and-value-order.md).

- **anyArray** (array): an array of numbers, _null_ values are ignored
- returns **max** (any\|null): the element with the greatest value. If the array is empty or contains _null_ values only, the function will return _null_.

```js
MAX( [5, 9, -2, null, 1] ) // 9
MAX( [ null, null ] ) // null
```

## MEDIAN()

`MEDIAN(numArray) → median`

Return the median value of the values in _array_.

The array is sorted and the element in the middle is returned. If the array has an even length of elements, the two center-most elements are interpolated by calculating the average value (arithmetic mean).

- **numArray** (array): an array of numbers, _null_ values are ignored
- returns **median** (number\|null): the median of _numArray_. If the array is empty or contains _null_ values only, the function will return _null_.

```js
MEDIAN( [ 1, 2, 3] ) // 2
MEDIAN( [ 1, 2, 3, 4 ] ) // 2.5
MEDIAN( [ 4, 2, 3, 1 ] ) // 2.5
MEDIAN( [ 999, 80, 4, 4, 4, 3, 3, 3 ] ) // 4
```

## MIN()

`MIN(anyArray) → min`

Return the smallest element of _anyArray_. The array is not limited to numbers. Refer to [Type and Value Order](../type-and-value-order.md) for more information.

- **anyArray** (array): an array of numbers, _null_ values are ignored
- returns **min** (any\|null): the element with the smallest value. If the array is empty or contains _null_ values only, the function will return _null_.

```js
MIN( [5, 9, -2, null, 1] ) // -2
MIN( [ null, null ] ) // null
```

## PERCENTILE()

`PERCENTILE(numArray, n, method) → percentile`

Return the _n_th percentile of the values in_numArray_.

- **numArray** (array): an array of numbers, _null_ values are ignored
- **n** (number): must be between 0 (excluded) and 100 (included)
- **method** (string, _optional_): "rank" (default) or "interpolation"
- returns **percentile** (number\|null): the _n_th percentile, or_null_ if the array is empty or only _null_ values are contained in it or the percentile cannot be calculated

```js
PERCENTILE( [1, 2, 3, 4], 50 ) // 2
PERCENTILE( [1, 2, 3, 4], 50, "rank" ) // 2
PERCENTILE( [1, 2, 3, 4], 50, "interpolation" ) // 2.5
```

## PI()

`PI() → pi`

Return pi.

- returns **pi** (number): the first few significant digits of pi (3.141592653589793)

```js
PI() // 3.141592653589793
```

## POW()

`POW(base, exp) → num`

Return the _base_ to the exponent _exp_.

- **base** (number): the base value
- **exp** (number): the exponent value
- returns **num** (number): the exponentiated value

```js
POW( 2, 4 ) // 16
POW( 5, -1 ) // 0.2
POW( 5, 0 ) // 1
```

## RADIANS()

`RADIANS(deg) → num`

Return the angle converted from degrees to radians.

- **deg** (number): the input value
- returns **num** (number): the angle in radians

```js
RADIANS(180) // 3.141592653589793
RADIANS(90) // 1.5707963267948966
RADIANS(0) // 0
```

## RAND()

`RAND() → randomNumber`

Return a pseudo-random number between 0 and 1.

- returns **randomNumber** (number): a number greater than 0 and less than 1

```js
RAND() // 0.3503170117504508
RAND() // 0.6138226173882478
```

Complex example:

```js
LET coinFlips = (
    FOR i IN 1..100000
    RETURN RAND() > 0.5 ? "heads" : "tails"
)
RETURN MERGE(
    FOR flip IN coinFlips
        COLLECT f = flip WITH COUNT INTO count
        RETURN { [f]: count }
)
```

Result:

```json
[
  {
    "heads": 49902,
    "tails": 50098
  }
]
```

## RANGE()

`RANGE(start, stop, step) → numArray`

Return an array of numbers in the specified range, optionally with increments other than 1. The _start_ and _stop_ arguments are truncated to integers unless a _step_ argument is provided.

Also see the [range operator](../operators.md#range-operator) for ranges with integer bounds and a step size of 1.

- **start** (number): the value to start the range at (inclusive)
- **stop** (number): the value to end the range with (inclusive)
- **step** (number, _optional_): how much to increment in every step, the default is _1.0_
- returns **numArray** (array): all numbers in the range as array

```js
RANGE(1, 4) // [ 1, 2, 3, 4 ]
RANGE(1, 4, 2) // [ 1, 3 ]
RANGE(1, 4, 3) // [ 1, 4 ]
RANGE(1.5, 2.5) // [ 1, 2 ]
RANGE(1.5, 2.5, 1) // [ 1.5, 2.5 ]
RANGE(1.5, 2.5, 0.5) // [ 1.5, 2, 2.5 ]
RANGE(-0.75, 1.1, 0.5) // [ -0.75, -0.25, 0.25, 0.75 ]
```

## ROUND()

`ROUND(value) → roundedValue`

Return the integer closest to _value_.

- **value** (number): any number
- returns **roundedValue** (number): the value rounded to the closest integer

```js
ROUND(2.49) // 2
ROUND(2.50) // 3
ROUND(-2.50) // -2
ROUND(-2.51) // -3
```

Rounding towards zero, also known as _trunc()_ in C/C++, can be achieved with a combination of the [ternary operator](../operators.md#ternary-operator), [CEIL()](#ceil) and [FLOOR()](#floor):

```js
value >= 0 ? FLOOR(value) : CEIL(value)
```

## SIN()

`SIN(value) → num`

Return the sine of _value_.

- **value** (number): the input value
- returns **num** (number): the sine of _value_

```js
SIN(3.141592653589783 / 2) // 1
SIN(0) // 0
SIN(-3.141592653589783 / 2) // -1
SIN(RADIANS(270)) // -1
```

## SQRT()

`SQRT(value) → squareRoot`

Return the square root of _value_.

- **value** (number): a number
- returns **squareRoot** (number): the square root of _value_

```js
SQRT(9) // 3
SQRT(2) // 1.4142135623730951
```

Other roots can be calculated with [POW()](#pow) like `POW(value, 1/n)`:

```js
// 4th root of 8*8*8*8 = 4096
POW(4096, 1/4) // 8

// cube root of 3*3*3 = 27
POW(27, 1/3) // 3

// square root of 3*3 = 9
POW(9, 1/2) // 3
```

## STDDEV_POPULATION()

`STDDEV_POPULATION(numArray) → num`

Return the population standard deviation of the values in _array_.

- **numArray** (array): an array of numbers, _null_ values are ignored
- returns **num** (number\|null): the population standard deviation of _numArray_. If the array is empty or only _null_ values are contained in the array, _null_ will be returned.

```js
STDDEV_POPULATION( [ 1, 3, 6, 5, 2 ] ) // 1.854723699099141
```

## STDDEV_SAMPLE()

`STDDEV_SAMPLE(numArray) → num`

Return the sample standard deviation of the values in _array_.

- **numArray** (array): an array of numbers, _null_ values are ignored
- returns **num** (number\|null): the sample standard deviation of _numArray_. If the array is empty or only _null_ values are contained in the array, _null_ will be returned.

```js
STDDEV_SAMPLE( [ 1, 3, 6, 5, 2 ] ) // 2.0736441353327724
```

## STDDEV()

This is an alias for [STDDEV_POPULATION()](#stddev_population).

SUM()
-----

`SUM(numArray) → sum`

Return the sum of the values in _array_.

- **numArray** (array): an array of numbers, _null_ values are ignored
- returns **sum** (number): the total of all values in _numArray_. If the array is empty or only _null_ values are contained in the array, _0_ will be returned.

```js
SUM( [1, 2, 3, 4] ) // 10
SUM( [null, -5, 6] ) // 1
SUM( [ ] ) // 0
```

## TAN()

`TAN(value) → num`

Return the tangent of _value_.

- **value** (number): the input value
- returns **num** (number): the tangent of _value_

```js
TAN(10) // 0.6483608274590866
TAN(5) // -3.380515006246586
TAN(0) // 0
```

## VARIANCE_POPULATION()

`VARIANCE_POPULATION(numArray) → num`

Return the population variance of the values in _array_.

- **numArray** (array): an array of numbers, _null_ values are ignored
- returns **num** (number\|null): the population variance of _numArray_. If the array is empty or only _null_ values are contained in the array, _null_ will be returned.

```js
VARIANCE_POPULATION( [ 1, 3, 6, 5, 2 ] ) // 3.4400000000000004
```

## VARIANCE_SAMPLE()

`VARIANCE_SAMPLE(array) → num`

Return the sample variance of the values in _array_.

- **numArray** (array): an array of numbers, _null_ values are ignored
- returns **num** (number\|null): the sample variance of _numArray_.
  If the array is empty or only _null_ values are contained in the array,
  _null_ will be returned.

```js
VARIANCE_SAMPLE( [ 1, 3, 6, 5, 2 ] ) // 4.300000000000001
```

## VARIANCE()

This is an alias for [VARIANCE_POPULATION()](#variance_population).
