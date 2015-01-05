//
//  Fibonacci.swift
//  iosHacker
//
//  Created by Byrdann Fox on 1/4/15.
//  Copyright (c) 2015 ByrdannFox, Inc. All rights reserved.
//

import Foundation

class Fibonacci {
    
    func fibonacci(arg:Int) -> Array<Int> {
        
        var fibonacciArr = [0, 1, 1]
        
        for var i = 3; i < 2 + arg; i += 1 {
            
            var fiboArithmetic = fibonacciArr[i - 1] + fibonacciArr[i - 2]
            
            fibonacciArr.insert(fiboArithmetic, atIndex: i)
            
        }
        
        fibonacciArr.removeAtIndex(0)
        fibonacciArr.removeAtIndex(1)
        
        println(fibonacciArr)
        
        for x in fibonacciArr {
            println(x)
        }
        
        return fibonacciArr
        
    }
    
}