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
        
        var fiboSeq = Fibonacci()
            
        var fiboSeqArr = fiboSeq.fibonacci(14)
            
        for x in fiboSeqArr {

            UIColor.blueColor().set()
                
            let context = UIGraphicsGetCurrentContext()
                
            CGContextSetLineWidth(context, 1)
                
            CGContextMoveToPoint(context, 350, 210)
                
            CGContextAddLineToPoint(context, CGFloat(x), 200)
            CGContextAddLineToPoint(context, 600, 300)
                
            CGContextStrokePath(context)
                
        }
        
    }

}