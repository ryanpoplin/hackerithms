import UIKit

// 1a = a
// (n + 1)a = na + a
// 4a = ((a + a) + a) + a = (a + a) + (a + a)
// a + (b + c) = (a + b) + c

//func multi(n: Int, a: Int) {
//        
//    var multiValue = n * a
//        
//    println(multiValue)
//    
//}
//
//multi(1, 32)

// even...
// n = n / 2 + n / 2
// even()...

// odd...
// n = n - 1 / 2 + n - 1 / 2 + 1
// odd()...

// extra mathematical notations:

// logical negation, etc...
// 

// p
// p => true

// not p
// ¬p => false

// logical disjunction => p || q
// p v q
// true if p, q or both p || q is true...

// logical conjunction...
// p ^ q, p and q, p && q
// true only if p && q are true...

// p ==> q
// logical implication...
// p implies q...
// false when p is true and q is false...

// p <==> q
// logical equivalence...
// p if and only if q
// p iff q
// true if both p and q are true...
// true if both p and q are false...

// x 'E' S
// set membership...
// x is an element of S...x is in S...

// x '|E' S
// Negation of set membership...
// x is not an element of S...
// x in not in S...

// '^A'x 'E' S
// universal quantifier...
// for all x in S...
// '^A'x in context of S...

// '<E'x' 'E' S
// Existential quantifier...
// there exists an x in S...
// assumed? == '<E'x

// S 'U' T
// Set union...
// the union of S and T...
// x needs to be in S, T, or Both...

// S 'vU' T
// Set intersection...
// the intersection of S and T...
// x is in intersection with S and T if it's in both sets...

// S = {x|...}
// Set definition...
// list of conditions about x / S is the set of all x...

// N
// Set of natural numbers e.g. 0, 1, 2...

// Z
// Set of integers...
// all natural numbers and their negations except for 0...

// Zn
// set of remainders...
// modulo n....
// {0, 1, 2, ..., n - 1}

// Q
// The set {p/q} of rational numbers...
// ratio of two numbers...

// R
// set of real numbers...

// C
// set of complex numbers...
// a + bx

/* PROOF OF CONCEPTS... */

// ...
class ArrayTest {
    
    // an array algorithm for adding certain elements...
    // to the beginning of an array, and controlling certain factors...
    
    // arrayBeginShifter method can take an array of integers...
    // an initial loop counter, an increment or decrement case value...
    // an increment or decrement value, and a boolean value...
    // it returns an array of integers...
    func arrayBeginShifter(numbersArr: [Int], loopInitArg: Int, incOrDec: Int, incOrDecVal: Int, boolTest: Bool) -> Array<Int> {
    
        // make the array literal mutable...
        var numbers = numbersArr
        
        // execute the statements in the loop as many times as there are...
        // elements in the array...
        // j is our initial element value...
        // k is our indexing element value...
        // i > 0 == just counting down executions from the array element count...
        // i is decremented until i > 0...
        for var i = numbers.count, j = loopInitArg, k = 0; i > 0; i -= 1 {
            
            // insert our array element value at a particular index...
            numbers.insert(j, atIndex: k)
            
            // based on the incOrDec value...
            switch incOrDec {
            
            // run if incOrDec is 1...
            case 1:
                j += incOrDecVal
                
            // run if incOrDec is 2...
            case 2:
                j -= incOrDecVal
               
            // just required stuff for switch statements...
            default:
                println("...")
                
            }
            
            // if true, we'll add our elements in the standard order...
            // if false, we'll add our elements in a reversed order...
            if boolTest {
                
                // ...
                k += 1
                
            }
            
        }
        
        // return our array...
        return numbers
        
    }
    
    // the arrayFirstLastShifter method should remove the same amount of elements...
    // from the beginning and end of our array...
    
    // we take in an array of integers, and return an array of integers...
    func arrayFirstLastShifter(numbersArr: [Int]) -> Array<Int> {
        
        // make our array literal mutable...
        var numbers = numbersArr
        
        // will only execute twice since the we are...
        // shaving off the elements from the end of...
        // the array...
        for var i = 0; i < numbers.count; i += 1 {
          
            // remove elements at the beginning of the array...
            numbers.removeAtIndex(0)
            
            // remove elements at the end of the array...
            numbers.removeLast()
            
        }
        
        // return the array...
        return numbers
        
    }
    
    // the arrayRemoveSplice method should remove a range of elements from our array...
    // this method takes an array of integers and returns an array of integers...
    func arrayRemoveSplice(numbersArr: [Int]) -> Array<Int> {
        
        // make our array mutable...
        var numbers = numbersArr
        
        // remove three elements from our array...
        // start at the second element...
        for var i = 0; i < 3; i += 1 {
            
            // we choose an index to remove elements from...
            // since we're shaving elements off, [1] will remove...
            // 1, 2, 3; just like we wanted...
            numbers.removeAtIndex(1)
            
        }
        
        // return our array...
        return numbers
        
    }
    
    // this method should alter a range of elements in an array...
    // arrayAlterSplice method takes an array of integers and...
    // returns an array of integers...
    func arrayAlterSplice(numbersArr: [Int]) -> Array<Int> {
        
        // make our array literal mutable...
        var numbers = numbersArr
        
        // from elements 1 to 3, replace the values with another array...
        // of elements...
        numbers[1...3] = [3, 2, 1]
        
        // return our array...
        return numbers
        
    }
    
}

// create an instance of our class...
let arrayTest = ArrayTest()

// our test array...
var testArr = [0, 1, 2, 3, 4, 5]

// invoke our class instance methods...
arrayTest.arrayBeginShifter(testArr, loopInitArg: 0, incOrDec: 2, incOrDecVal: 6, boolTest: true)

arrayTest.arrayFirstLastShifter(testArr)

arrayTest.arrayRemoveSplice(testArr)

arrayTest.arrayAlterSplice(testArr)
