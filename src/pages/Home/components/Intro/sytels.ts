import styled from 'styled-components';
import { TitleText } from '../../../../components/Typography';

export const IntroContainer = styled.section`
  width: 100%;
  height: 34rem;

   div {
    width: 29.75rem;
    height: 22.5rem;
  }

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const IntroContant = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 3.0rem;
 
`;

export const IntroTitle = styled(TitleText)`
 margin: 2rem 0rem 1rem 0rem;
`