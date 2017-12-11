import styled from 'styled-components';

function withSystem(Component, styleFunctions, defaultProps) {
  const SystemComponent = styled(Component).apply(this, [
    [],
    ...styleFunctions,
  ]);

  SystemComponent.defaultProps = defaultProps;

  return SystemComponent;
}

export default withSystem;
