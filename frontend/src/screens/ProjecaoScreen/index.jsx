import Header from '../../components/Header';
import './projecao.css';
import { Fragment } from 'react';
import React, { Component } from 'react';


class ProjecaoScreen extends Component{

      handleFileUpload = (event) => {
        const file = event.target.files[0];
        // Faça algo com o arquivo, como enviá-lo para o servidor
        file.post()
      };
    
      render() {
        return (
          <Fragment>
            <body className='projecaoBody'>
          <Header/>
          <div className='projecaoDivAll'>
            <h2 className='projecaoH2'>Enviar Arquivo Excel</h2>
            <input className='projecaoInput' type="file" accept=".xlsx" onChange={this.handleFileUpload} />
            <div className='projecaoDiv'>
              
            </div>
          </div>
          </body>
          </Fragment>
        );
      }
    }

export default ProjecaoScreen;