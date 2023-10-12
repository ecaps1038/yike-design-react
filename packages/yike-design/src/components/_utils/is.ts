export function isWindow(obj: any): obj is Window {
  return obj !== null && obj !== undefined && obj === obj.window;
}
