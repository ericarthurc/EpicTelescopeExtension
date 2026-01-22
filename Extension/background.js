import { buildUrl } from "./functions.js";

try {
  chrome.omnibox.onInputEntered.addListener(function (text) {
    chrome.tabs.update({ url: buildUrl(text) });
  });
} catch (error) {
  console.error(error);
}
