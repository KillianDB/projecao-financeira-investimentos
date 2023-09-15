import Header from '../../components/Header';
import Lottie from 'lottie-react';
import login from '../../login.json';
import { Fragment, useState } from 'react';
import './login.css';
import api from '../../api/api.py';

function LoginScreen() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    async function handleSubmit(event) {
        event.preventDefault();

        await api.post('/users', {
            name,
            email,
            senha
        })
//botar parte do login(verificar email e senha)
        setName('');
        setEmail('');
        setSenha('');

        alert('Usuário cadastrado');
    };

    return (
        <>
            <Header title='Cadastro Profix' />
            <div className='loginDivAll'>
            <div className='animeContainer'>
                <Lottie animationData={login} />
            </div>
            <main>
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <label>E-mail</label>
                    <input type='text' value={email} onChange={event => setEmail(event.target.value)}/>

                    <label>Senha</label>
                    <input type='text' value={senha} onChange={event => setSenha(event.target.value)}/>

                    <button className='loginButton'>Logar</button>
                </form>

                <h1>Cadastro</h1>
                <form onSubmit={handleSubmit}>
                    <label>Nome</label>
                    <input type="text" value={name} onChange={event => setName(event.target.value)} />

                    <label>Email</label>
                    <input type="email" value={email} onChange={event => setEmail(event.target.value)} />

                    <label>Senha</label>
                    <input type="senha" value={senha} onChange={event => setSenha(event.target.value)} />

                    <button type="submit">Cadastrar</button>
                </form>
            </main>
            </div>
        </>
    );
}

export default LoginScreen;