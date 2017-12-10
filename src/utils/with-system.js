import styled from 'styled-components';

function withSystem(Component, styles, defaultProps) {
  const SystemComponent = styled(Component).apply(this, [[], ...styles]);

  SystemComponent.defaultProps = defaultProps;

  return SystemComponent;
}

export default withSystem;
