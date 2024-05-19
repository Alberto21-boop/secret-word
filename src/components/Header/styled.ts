import styled from 'styled-components';


export const HeaderContainer = styled.header`
  width: 100%;
  height: 6.5rem;
  background: ${(props) => props.theme.colors['base-header']};
  color: ${(props) => props.theme.colors['base-text-header']};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.1rem;

`;