import Header from '../../components/Header';
import Lottie from 'lottie-react';
import EvoluationCoinsAnimation from '../../EvoluationCoinsAnimation.json';
import { Fragment } from 'react';

function HomeScreen() {

    return (
        <Fragment>
            <Header title='Profix' />
            <main>
                <h1>Planeje seu futuro, projete seus ganhos em renda fixa!</h1>
                <p>O Profix faz uso da API da Anbima, utilizando da projeção do IPCA da mesma para calcular seus possíveis ganhos no investimento escolhido de renda fixa.</p>
                <button href="/projecao"> Calcule seus ganhos agora</button>
            </main>
            <div>
                <Lottie animationData={EvoluationCoinsAnimation}/>
            </div>
        </Fragment>
    );
}

export default HomeScreen;