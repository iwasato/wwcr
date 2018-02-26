#import <Foundation/Foundation.h>
#import <AppKit/AppKit.h>
#import <CoreGraphics/CoreGraphics.h>

int main(int argc, const char *argv[]){
	CGEventRef keyup, keydown;
	keydown = CGEventCreateKeyboardEvent(NULL,(CGKeyCode)[[NSString stringWithCString: argv[1] encoding: NSUTF8StringEncoding] intValue], true);
	keyup = CGEventCreateKeyboardEvent(NULL,(CGKeyCode)[[NSString stringWithCString: argv[1] encoding: NSUTF8StringEncoding] intValue], false);

	CGEventPost(kCGHIDEventTap,keydown);
	CGEventPost(kCGHIDEventTap,keyup);
	CFRelease(keydown);
	CFRelease(keyup);

  return 0;
}