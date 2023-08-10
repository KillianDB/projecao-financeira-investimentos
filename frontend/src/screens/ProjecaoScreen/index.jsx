import Header from '../../components/Header';
import { Fragment } from 'react';
import './projecao.css'
import { Form } from 'react-router-dom';
import { useState } from 'react';
import api from '../../api/api';

function ProjecaoScreen() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [contador, setContador] = useState(0);

    function incrementar() {
        setContador(contador + 1)
    }

    async function handleSubmit(event) {
        event.preventDefault();

        await api.post('/users', {
            name,
            email
        })

        setName('');
        setEmail('');

        alert('Usuário cadastrado');
    };

    return (

        <Fragment>
            <Header title='Profix' />
            <div className='conteudoProjecao'>
                <main>
                    <form onSubmit={handleSubmit}>

                    <select value={selectedOption} onChange={handleSelectChange}>
          <option value="">Selecione uma tipo de investimento</option>
          <option value="opcao1">Debênture</option>
          <option value="opcao2">CDB/CDI</option>
        </select>

                        <label>Tipo investimento</label>
                        <input type="select" value={tipo} onChange={event => setTipo(event.target.value)} />
                        <label>Email</label>
                        <input type="email" value={email} onChange={event => setEmail(event.target.value)} />
                        <div className='containerButton'>
                            <button type='submit'> Calcular </button>
                        </div>
                    </form>
                </main>
            </div>
        </Fragment>
    );
}

export default ProjecaoScreen;