import { IntroContainer, IntroContant, IntroTitle } from './sytels';
import Lupa from '../../../../assets/lupa.png'
import { RegularText } from '../../../../components/Typography';


export function Intro() {
    return (
        <IntroContainer>
            <IntroContant className='container'>
                <div>
                    <section>
                        <IntroTitle size='xl'>
                            Encontre a palavra perfeita e vença o jogo Palavra Secreta !
                        </IntroTitle>
                        <RegularText size='l' color='subtitle' as='h3'>
                            Você deve tentar adivinhar as letras até formar a palavra certa
                        </RegularText>
                    </section>
                </div>
                <img src={Lupa} alt="" />
            </IntroContant>
        </IntroContainer>
    );
}