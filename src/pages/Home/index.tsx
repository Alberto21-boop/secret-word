import { Intro } from './components/Intro';
import { HomeContainer } from './styles';

export function HomePage() {
    return (
        <HomeContainer className='container'>
            <Intro />
        </HomeContainer>
    )
}