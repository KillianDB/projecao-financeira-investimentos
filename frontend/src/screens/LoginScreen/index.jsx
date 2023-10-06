import React, { useState } from 'react';
import Header from '../../components/Header';
import api from '../../api/api.py';
import './login.css'

function LoginScreen() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    async function handleLogin(e) {
        e.preventDefault();
    
        try {
            // Send a POST request to your backend authentication endpoint
            const response = await api.post('/login', {
                email,
                senha,
            });
    
            // Check the response status and handle accordingly
            if (response.status === 200) {
                // Successful login
                // You can perform actions like setting user data in state or storing a token in local storage.
                // Example: setUser(response.data.user);
                // Example: localStorage.setItem('token', response.data.token);
    
                // Clear the form inputs
                setEmail('');
                setSenha('');
    
                // Redirect the user to the dashboard or the desired page
                // You can use React Router for navigation
                // Example: history.push('/dashboard');
            } else {
                // Handle authentication failure (e.g., show an error message)
                console.error('Authentication failed');
            }
        } catch (error) {
            // Handle login error (e.g., show an error message)
            console.error(error);
        }
    }
    
    async function handleRegistration(e) {
        e.preventDefault();

        try {
            await api.post('/users', {
                name,
                email,
                senha,
            });

            setName('');
            setEmail('');
            setSenha('');

            // Show a success message to the user (e.g., using a toast)
        } catch (error) {
            // Handle registration error (e.g., show an error message)
            console.error(error);
        }
    }

    // Handle login logic (you need to implement this)

    return (
        <>
            <Header title='Cadastro Profix' />
            <div className="main-login">
                <div className="left-login">
                    <h1>Faça Login<br />E descubra coisas novas</h1>
                    <svg src="../../assets/finance-animate.svg" className="left-login-img" alt="finance-animate" ></svg>
                </div>
                <div className="right-login">
                    <div className="card-login">
                        <h1>Login</h1>
                        <form id='login' onSubmit={handleLogin}>
                            <div className="textfield">
                                <label htmlFor="user">Email</label>
                                <input
                                    type="text"
                                    id="user"
                                    placeholder="Email"
                                    autoComplete="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="textfield">
                                <label htmlFor="passwordLogin">Senha</label>
                                <input
                                    type="password"
                                    id="passwordLogin"
                                    placeholder="Senha"
                                    value={senha}
                                    onChange={(e) => setSenha(e.target.value)}
                                />
                            </div>
                            <button className="btn-login">Login</button>
                        </form>
                        <h1>Cadastro</h1>
                        <form id='registration' onSubmit={handleRegistration}>
                        <div className="textfield">
                            <label htmlFor='name'>Nome</label>
                            <input placeholder='Nome' id='name' type="text" autoComplete="given-name" value={name} onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div className="textfield">
                            <label htmlFor='email'>Email</label>
                            <input placeholder='Email' id='email' type="email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="textfield">
                            <label htmlFor='passwordRegister'>Senha</label>
                            <input placeholder='Senha' id='passwordRegister' type="password" autoComplete="new-password" value={senha} onChange={(e) => setSenha(e.target.value)} />
                            </div>
                            <button type="submit" id='btn-registrer'>Cadastrar</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LoginScreen;
