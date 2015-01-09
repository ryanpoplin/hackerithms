import UIKit

// 1a = a
// (n + 1)a = na + a
// 4a = ((a + a) + a) + a = (a + a) + (a + a)
// a + (b + c) = (a + b) + c

func multi(n: Int, a: Int) {
        
    var multiValue = n * a
        
    println(multiValue)
    
}

multi(1, 32)

// even...
// n = n / 2 + n / 2
// odd...
// n = n - 1 / 2 + n - 1 / 2 + 1

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

