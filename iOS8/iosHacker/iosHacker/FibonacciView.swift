//
//  FibonacciView.swift
//  iosHacker
//
//  Created by Byrdann Fox on 1/4/15.
//  Copyright (c) 2015 ByrdannFox, Inc. All rights reserved.
//

import UIKit

class FibonacciView: UIView {

    override func drawRect(rect: CGRect) {
        
        // since there's no need for mutation, optimize with a constant for instantiation...
        let fibonacci = Fibonacci()
        
        // pass '16' as our argument to the fibonacci class' fibonacci method...
        var fiboSeqArr = fibonacci.fibonacciSequence(16)
        // reverse the elements of the array for opposite drawing values...
        var fiboSeqArrReverse = fiboSeqArr.reverse()
        
        // refer to the Fibonacci Class...
        var fiboDrawArr = fibonacci.fibonacciSequenceReversed(fiboSeqArrReverse.count, reversedArr: fiboSeqArrReverse, fiboArr: fiboSeqArr)
        
        // log the contents of the array...
        println(fiboDrawArr)
        
        // for every element in the fiboDrawArr array, execute the following statements...
        for x in fiboDrawArr {

            UIColor.blueColor().set()
                
            let context = UIGraphicsGetCurrentContext()
            
            CGContextSetLineWidth(context, 0.5)
            
            CGContextMoveToPoint(context, 700, 400)
                
            CGContextAddLineToPoint(context, CGFloat(x), 300)
            CGContextAddLineToPoint(context, CGFloat(-x), -300)
            
            CGContextStrokePath(context)
                
        }
        
    }

}