const notionDocId = "7d267919b1194868bef50cc4ee2f0379"

fetch("https://notion-page-to-html-api.vercel.app/html?id=" + notionDocId)
  .then(res => res.text())
  .then(text => {
    document.querySelector("main").innerHTML = text
  })