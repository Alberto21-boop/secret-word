import { HeaderContainer } from './styled';
import { MagnifyingGlass, Book } from 'phosphor-react';

export function Header() {
    return (
        <HeaderContainer>
            <h1>Palavra Secreta</h1>
            <MagnifyingGlass size={30} />
            <Book size={30} />
        </HeaderContainer>
    );
}