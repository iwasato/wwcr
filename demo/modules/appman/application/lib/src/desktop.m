#import <Foundation/Foundation.h>
#import <AppKit/AppKit.h>
#import <CoreGraphics/CoreGraphics.h>

int main(int argc, const char *argv[]){

	/* 変数宣言 */
	CGRect rect;
	CGImageRef cgimage;
	NSBitmapImageRep *bitmap;
	NSDictionary *prop;
	NSData *data;
	NSString *dataURL;
	/* */

	/* デスクトップのDataURLを取得 */
	cgimage = CGWindowListCreateImage([[NSScreen mainScreen]frame], kCGWindowListOptionOnScreenBelowWindow, kCGNullWindowID, kCGWindowImageDefault);
	bitmap = [[NSBitmapImageRep alloc] initWithCGImage: cgimage];
	prop = [NSDictionary dictionaryWithObject: [NSNumber numberWithBool: true] forKey: NSImageInterlaced];
	data = [bitmap representationUsingType: NSPNGFileType properties: prop];
	dataURL = [NSString stringWithFormat: @"%@%@", @"data:image/png;base64,",[data base64EncodedStringWithOptions: 0]];
	/* */

	printf("%s", [dataURL UTF8String]);
	return 0;
}