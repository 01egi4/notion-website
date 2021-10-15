const notionDocId = "a1e217bd2da34885b62da44a0e4b5807"

fetch("https://notion-page-to-html-api.vercel.app/html?id=" + notionDocId)
  .then(res => res.text())
  .then(text => {
    document.querySelector("main").innerHTML = text
  })