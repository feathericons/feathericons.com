import styled from 'styled-components';

function withSystem(Component, utilities, defaultProps) {
  const SystemComponent = styled(Component).apply(this, [[], ...utilities]);

  SystemComponent.defaultProps = defaultProps;

  return SystemComponent;
}

export default withSystem;
