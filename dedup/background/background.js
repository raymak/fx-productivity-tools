'user strict'

console.log('Hello people of planet earth!')

browser.tabs.onUpdated.addListener(function(tabId, info, tab){
  if (!info.url) return

  console.log(info.url)

  browser.tabs.query({
    url: info.url
  }).then(tabs => browser.tabs.remove(
    tabs.map(t => t.id)
    .filter(id => id != tabId)))
})