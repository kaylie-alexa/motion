export const STYLED_COMPONENTS = `
import styled, {keyframes} from 'styled-components';

const rotate360 = keyframes\`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
\`;

const Rotate = styled.div\`
  display: inline-block;
  animation: \${rotate360} 2s linear infinite;
\`;

render(
  <Rotate>💅</Rotate>
);
`;

