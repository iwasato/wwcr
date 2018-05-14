#import <Foundation/Foundation.h>
#import <AppKit/AppKit.h>
#import <CoreGraphics/CoreGraphics.h>

int main(int argc, const char *argv[]){

	/* 変数宣言 */
	float x,y,width,height;
	CGRect rect;
	CGWindowID winID;
	CGImageRef cgimage;
	NSBitmapImageRep *bitmap;
	NSDictionary *prop;
	NSData *data;
	NSString *dataURL;
	/* */

	/* サイズと位置を指定 */
	x = [[NSString stringWithCString: argv[1] encoding: NSUTF8StringEncoding] floatValue];
	y = [[NSString stringWithCString: argv[2] encoding: NSUTF8StringEncoding] floatValue];
	width = [[NSString stringWithCString: argv[3] encoding: NSUTF8StringEncoding] floatValue];
	height = [[NSString stringWithCString: argv[4] encoding: NSUTF8StringEncoding] floatValue];
	rect = CGRectMake(x,y,width,height);
	/* */

	// ウィンドウIDを取得
	winID = (CGWindowID)[[NSString stringWithCString: argv[5] encoding: NSUTF8StringEncoding] intValue];

	/* ウィンドウ画像のDataURLを取得 */
	cgimage = CGWindowListCreateImage(rect, kCGWindowListOptionIncludingWindow, winID, kCGWindowImageNominalResolution);
	bitmap = [[NSBitmapImageRep alloc] initWithCGImage: cgimage];
	prop = [NSDictionary dictionaryWithObject: [NSNumber numberWithBool: true] forKey: NSImageInterlaced];
	data = [bitmap representationUsingType: NSPNGFileType properties: prop];
	dataURL = [NSString stringWithFormat: @"%@%@", @"data:image/png;base64,",[data base64EncodedStringWithOptions: 0]];
	/* */

	printf("%s", [dataURL UTF8String]);
	return 0;
}