#import <Foundation/Foundation.h>
#import <CoreFoundation/CoreFoundation.h>
#import <AppKit/AppKit.h>
#import <CoreGraphics/CoreGraphics.h>

int main(void){

	/* 変数宣言 */
	CFArrayRef list;
	CFDictionaryRef win;
	CFIndex i;
	int len,alpha, x, y, width, height, layer, memoryUsage, number, ownerPID, sharingState, storeType;
	NSString *name, *ownerName;
	CGRect rect;
	CGImageRef cgimage;
	NSBitmapImageRep *bitmap;
	NSDictionary *prop;
	NSData *data;
	NSString *dataURL;
	/* */

	// ウィンドウリストの取得
	list = CGWindowListCopyWindowInfo(kCGWindowListOptionOnScreenOnly, kCGNullWindowID);

	// ウィンドウリストの長さを取得
	len = CFArrayGetCount(list);

	// json形式で出力開始．keyはwindowsのみ．valueにウィンドウ情報を配列形式で格納
	printf("%s", "{\"windows\":[");

	for(i=0;i<len;i++){
		// ウィンドウ取得
		win = CFArrayGetValueAtIndex(list,i);

		/* ウィンドウ情報をすべて取得 */
		CFNumberGetValue(CFDictionaryGetValue(win, kCGWindowNumber), kCGWindowIDCFNumberType, &number);
		CFNumberGetValue(CFDictionaryGetValue(win, kCGWindowStoreType), kCGWindowIDCFNumberType, &storeType);
		CFNumberGetValue(CFDictionaryGetValue(win, kCGWindowLayer), kCGWindowIDCFNumberType, &layer);
		CFNumberGetValue(CFDictionaryGetValue(win, kCGWindowSharingState), kCGWindowIDCFNumberType, &sharingState);
		CFNumberGetValue(CFDictionaryGetValue(win, kCGWindowAlpha), kCGWindowIDCFNumberType, &alpha);
		CFNumberGetValue(CFDictionaryGetValue(win, kCGWindowOwnerPID), kCGWindowIDCFNumberType, &ownerPID);
		CFNumberGetValue(CFDictionaryGetValue(win, kCGWindowMemoryUsage), kCGWindowIDCFNumberType, &memoryUsage);
		CGRectMakeWithDictionaryRepresentation(CFDictionaryGetValue(win, kCGWindowBounds), &rect);
		x = rect.origin.x;
		y = rect.origin.y;
		width = rect.size.width;
		height = rect.size.height;
		name = CFDictionaryGetValue(win, kCGWindowName);
		ownerName = CFDictionaryGetValue(win, kCGWindowOwnerName);
		/* */

		printf("{\"number\": %d,\"alpha\":%d,\"layer\":%d,\"memoryUsage\":%d,\"ownerPID\":%d,\"sharingState\":%d,\"storeType\":%d,\"bounds\":{\"x\":%d,\"y\":%d,\"width\":%d,\"height\":%d},\"name\":\"%s\",\"ownerName\":\"%s\"}",number,alpha,layer,memoryUsage,ownerPID,sharingState,storeType,x,y,width,height,[name UTF8String],[ownerName UTF8String]);

		if(i < len-1){
			printf("%s",",");
		}
	}

	printf("%s", "]}");

	return 0;
}