const notionDocId = "4d64bbc0634d4758befa85c5a3a6c22f"

fetch("https://www.notion.so/asnunes/Simple-Page-Text-2-" + notionDocId)
  .then(res => res.text())
  .then(text => {
    document.querySelector("main").innerHTML = text
  })