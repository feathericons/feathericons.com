function logOutboundLink(label) {
  if (typeof window.ga === 'function') {
    window.ga('send', 'event', {
      eventCategory: 'outbound link',
      eventAction: 'click',
      eventLabel: label,
    })
  }
}

export default logOutboundLink
