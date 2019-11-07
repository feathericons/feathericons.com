function AspectRatioBox({ ratio, children }) {
  return (
    <div
      css={{
        width: '100%',
        position: 'relative',
        paddingTop: `${ratio * 100}%`,
      }}
    >
      <div
        css={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
      >
        {children}
      </div>
    </div>
  )
}

AspectRatioBox.defaultProps = {
  ratio: 1,
}

export default AspectRatioBox
