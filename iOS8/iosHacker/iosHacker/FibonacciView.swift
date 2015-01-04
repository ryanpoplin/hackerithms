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
        
        func fiboSeqDraw() {

            var fiboSeq = Fibonacci()
            
            var fiboSeqArr = fiboSeq.fibonacci(5)
            
            for x in fiboSeqArr {

                UIColor.blueColor().set()
                
                let context = UIGraphicsGetCurrentContext()
                
                CGContextSetLineWidth(context, 5)
                
                CGContextMoveToPoint(context, 50, 10)
                
                CGContextAddLineToPoint(context, CGFloat(x), 100)
                
                CGContextStrokePath(context)
                
            }
            
        }
        
        fiboSeqDraw()
        
    }

}