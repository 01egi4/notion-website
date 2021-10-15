const NotionPageToHtml = require('notion-page-to-html');

// using then
NotionPageToHtml.convert("https://www.notion.so/asnunes/Simple-Page-Text-4d64bbc0634d4758befa85c5a3a6c22f").then((page) => console.log(page));

// using async/await
async function getPage() {
  const { title, icon, cover, html } = await NotionPageToHtml.convert("https://www.notion.so/asnunes/Simple-Page-Text-4d64bbc0634d4758befa85c5a3a6c22f");
  console.log(title, icon, cover, html);
}

getPage();