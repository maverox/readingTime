# Animated Pointer Extension

This extension allows you to change your cursor into an animated pointer that you can use to follow the text you are reading. It can help you focus on the words and improve your reading comprehension.

## How to use

To use this extension, you need to install it from the Edge Store¹. After installing, you can click on the extension icon in the toolbar and choose the pointer style and speed from the popup menu. You can also toggle the pointer on and off by clicking on the icon.

## How to create

I created this extension from scratch by reading the documentation for Chrome extensions². I learned how to use web technologies such as HTML, CSS, and JavaScript to create an extension that can interact with the browser and web pages.

I used the following components to create my extension:

- A manifest.json file that defines the metadata, permissions, and resources of the extension.
- A background script that runs in the background and handles the logic of the extension.
- A content script that runs in the context of the web page and manipulates the DOM elements.
- An icons folder that contains the images for the extension icon and the pointer styles.
- A CSS file to change and inject when extension is in on state to change cursor style.

## Chrome API insights

To create this extension, I used some of the Chrome APIs for extensions³. Here are some insights I gained from using them:

- The chrome.tabs API enables extensions to interact with browser tabs. I used this API to get information about the current tab, such as its URL and title, and to inject content scripts into web pages.
- The chrome.action API allows extensions to control their icon in the toolbar. I used this API to set the icon's badge text and color based on whether the pointer is enabled or disabled.
