#import <Foundation/Foundation.h>
#import <AppKit/AppKit.h>
#import <CoreGraphics/CoreGraphics.h>

int main(int argc, const char *argv[]){
	CGPoint location = CGPointMake([[NSString stringWithCString: argv[1] encoding: NSUTF8StringEncoding] floatValue],[[NSString stringWithCString: argv[2] encoding: NSUTF8StringEncoding] floatValue]);

	CGEventRef mouseDown = CGEventCreateMouseEvent(NULL, kCGEventLeftMouseDown, location, 0);
	CGEventPost(kCGHIDEventTap, mouseDown);
	[NSThread sleepForTimeInterval:0.5];
	CFRelease(mouseDown);

  return 0;
}