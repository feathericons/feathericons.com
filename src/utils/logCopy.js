function logCopy(label) {
  if (typeof window.ga === 'function') {
    window.ga('send', 'event', {
      eventCategory: 'copy',
      eventAction: 'click',
      eventLabel: label,
    })
  }
}

export default logCopy
