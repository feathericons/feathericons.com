function logDownload(label) {
  if (typeof window.ga === 'function') {
    window.ga('send', 'event', {
      eventCategory: 'download',
      eventAction: 'click',
      eventLabel: label,
    })
  }
}

export default logDownload
