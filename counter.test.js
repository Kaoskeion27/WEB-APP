import fc from "fast-check";
import Counter from "../static/Score.js";
import property from "./property.js";

describe("Counter Test 1", function () {
    property("This test determines whether the scoreCounter is incremented"+
    "by one even though the answer is false"
    , [fc.integer(0, 10), fc.constant(false)], function(number, boolean){
        return Counter.newScore(Counter.newScore(number, boolean), boolean) === number;
    });
});

describe("Counter Test 2", function () {
    property("Checks score increments on correct answer", 
    [fc.integer(0, 9), fc.constant(true)], function (number, boolean) {
        if (Counter.newScore(number, boolean) != (number += 1)) {
            throw "User's score did not increment.";
        }
    });
});