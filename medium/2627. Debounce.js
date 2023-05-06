/// Given a function fn and a time in milliseconds t, return a debounced version of that function.

/// A debounced function is a function whose execution is delayed by t milliseconds and whose execution is cancelled if it is called again within that window of time. The debounced function should also recieve the passed parameters.

/// For example, let's say t = 50ms, and the function was called at 30ms, 60ms, and 100ms. The first 2 function calls would be cancelled, and the 3rd function call would be executed at 150ms. If instead t = 35ms, The 1st call would be cancelled, the 2nd would be executed at 95ms, and the 3rd would be executed at 135ms.

/// The above diagram shows how debounce will transform events. Each rectangle represents 100ms and the debounce time is 400ms. Each color represents a different set of inputs.

/// Please solve it without using lodash's _.debounce() function.

var debounce = function(fn, t) {
    let timerId;
    return function(...args) {
        if (timerId) {
            clearTimeout(timerId);
        }
        timerId = setTimeout(() => {
            fn.apply(this, args);
            timerId = null;
        }, t);
    }
};

/// To create a debounced function, we can use setTimeout and clearTimeout methods.
/// We will declare a variable to store the timer id created by setTimeout and
/// check if it has a value before creating a new setTimeout.
/// If the debounced function is called again before the timer expires,
/// we will reset the timer with a new setTimeout, canceling the previous one.
/// Finally, when the timer expires, we will execute the original function with the provided parameters.

