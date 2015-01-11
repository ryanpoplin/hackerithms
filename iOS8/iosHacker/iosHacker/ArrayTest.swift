//
//  ArrayTest.swift
//  iosHacker
//
//  Created by Byrdann Fox on 1/10/15.
//  Copyright (c) 2015 ByrdannFox, Inc. All rights reserved.
//

import Foundation

class ArrayTest {
    
    func arrayShifter() -> Array<Int> {

        var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
        
        for var i = numbers.count - 1, j = 1; i > 0; i -= 1, j += 1 {
            
            numbers.insert(-j, atIndex: 0)
        
        }
        
        println(numbers)
        
        return numbers
        
    }
    
    func arrayAddRemoveShifter() -> Array<Int> {
        
        var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
        
        for var i = 3; i < numbers.count; i += 1 {
            
            numbers.removeAtIndex(0)
            
            numbers.removeLast()
            
        }
        
        println(numbers)
        
        return numbers
        
    }
    
    func arraySplice() -> Array<Int> {
        
        var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
        
        for var i = 0, j = 1, k = 2; i < 3; i += 1, j += 1, k += 2 {
        
            numbers.removeAtIndex(j - i)
            
            println(j)
            
            numbers.insert(k, atIndex: j)
            
        }
        
        println(numbers)
        
        return numbers
        
    }
    
}