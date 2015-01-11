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
        
        // ...
        let arrayTest = ArrayTest()
        
        var testArr = [0, 1, 2, 3, 4, 5]
        
        arrayTest.arrayBeginShifter(testArr, loopInitArg: 1, incOrDec: 1, boolTest: true)
        
        arrayTest.arrayFirstLastShifter(testArr)
        
        arrayTest.arrayRemoveSplice(testArr)
        
        arrayTest.arrayAlterSplice(testArr)
        
        // ...
        var averageTemp = [[72, 75, 79, 79, 81, 81], [81, 79, 75, 75, 73, 72]]
        
        // ...
        let fiboSeq = Fibonacci()
        
        var fiboSeqArr = fiboSeq.fibonacci(16)
        var fiboSeqArrReverse = fiboSeqArr.reverse()
        
        for var j = 0; j < fiboSeqArrReverse.count; j += 1 {

            fiboSeqArr.append(-fiboSeqArrReverse[j])
            
        }
        
        println(fiboSeqArr)
                
        for x in fiboSeqArr {

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