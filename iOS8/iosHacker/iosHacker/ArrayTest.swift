//
//  ArrayTest.swift
//  iosHacker
//
//  Created by Byrdann Fox on 1/10/15.
//  Copyright (c) 2015 ByrdannFox, Inc. All rights reserved.
//

import Foundation

class ArrayTest {
    
    func arrayBeginShifter(numbersArr: [Int], loopInitArg: Int, incOrDec: Int, boolTest: Bool) -> Array<Int> {
        
        var numbers = numbersArr
        
        for var i = numbers.count - 1, j = loopInitArg, k = 0; i >= 0; i -= 1 {
            
            numbers.insert(j, atIndex: k)
            
            let incrementOrDecrement = incOrDec
            
            switch incrementOrDecrement {
                
            case 1:
                j++
                
            case 2:
                j--
                
            default:
                println("...")
                
            }
            
            if boolTest {
                
                k += 1
                
            }
            
        }
        
        println(numbers)
        
        return numbers
        
    }
    
    func arrayFirstLastShifter(numbersArr: [Int]) -> Array<Int> {
        
        var numbers = numbersArr
        
        for var i = 1; i < numbers.count; i += 1 {
            
            numbers.removeAtIndex(0)
            
            numbers.removeLast()
            
        }
        
        println(numbers)
        
        return numbers
        
    }
    
    func arrayRemoveSplice(numbersArr: [Int]) -> Array<Int> {
        
        var numbers = numbersArr
        
        for var i = 0, j = 1; i < 3; i += 1, j += 1 {
        
            numbers.removeAtIndex(j - i)
            
        }
        
        println(numbers)
        
        return numbers
        
    }
    
    func arrayAlterSplice(numbersArr: [Int]) -> Array<Int> {
        
        var numbers = numbersArr
        
        // ...
        numbers[1...3] = [3, 2, 1]
        
        println(numbers)
        
        return numbers
        
    }
    
    
    
}

// ...

