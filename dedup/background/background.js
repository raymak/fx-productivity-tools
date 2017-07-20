'user strict'

console.log('Hello people of planet earth!')

browser.tabs.onUpdated.addListener(function(tabId, info, tab){
  if (!info.url) return

  console.log(info.url)

  browser.tabs.query({})
    .then((tabs) => {
        browser.tabs.remove(tabs
            .filter(t => haveIdenticalUrl(t, tab) && t.id != tabId)
            .map(t => t.id))
    })
})

function haveIdenticalUrl(t1, t2){
  return t1.url.replace(/\/$/g, '') == t2.url.replace(/\/$/g, '')
}