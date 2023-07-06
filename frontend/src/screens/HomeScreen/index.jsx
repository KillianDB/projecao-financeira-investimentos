import Header from '../../components/Header';
import Lottie from 'lottie-react';
import EvoluationCoinsAnimation from '../../EvoluationCoinsAnimation.json';
import { Fragment } from 'react';
import './home.css'

function HomeScreen() {

    return (
        <Fragment>
            <Header title='Profix' />
            <div class='conteudoHome'>
                <main>
                <h1>Planeje seu futuro, projete seus ganhos em renda fixa!</h1>
                <p>O Profix faz uso da API da Anbima, utilizando da projeção do IPCA da mesma para calcular seus possíveis ganhos no investimento escolhido de renda fixa.</p>
                <div class='containerButton'>
                    <button href="/projecao"> Calcule seus ganhos agora</button>
                </div>
            </main>
            <div class='animeContainer'>
                <Lottie animationData={EvoluationCoinsAnimation}/>
            </div>
            </div>
        </Fragment>
    );
}

export default HomeScreen;