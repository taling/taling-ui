export function assertRunningAsClient() {
  // assert ?
  if (typeof document === "undefined") {
    throw new Error("🛑 document is not defined! 서버사이드에서 호출?");
  }
}
