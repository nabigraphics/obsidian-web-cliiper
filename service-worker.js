chrome.action.onClicked.addListener((tab) => {
  // chrome:// URL을 제외한 모든 URL에서 스크립트 실행
  if (!tab.url.includes("chrome://")) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ["./scripts/clipping.js"],
    });
  }
});
