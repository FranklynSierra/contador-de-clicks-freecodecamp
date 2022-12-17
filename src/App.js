import React from 'react';
import './App.css';
import Boton from './componentes/Boton';
import freeCodeCampLogo from './imagenes/FreeCodeCamp.png'
import Contador from './componentes/contador'



class App extends React.Component{
  constructor(){
 
   super();
   this.state={
     numClics:0,



   }
this.manejarClic=this.manejarClic.bind(this)
this.reiniciarContador=this.reiniciarContador.bind(this)
  }
  manejarClic(){
    this.setState(({numClics})=>({numClics:numClics+1}))
  }
  reiniciarContador(){
    this.setState({numClics:0});

  }
  render(){
    return (
      <div className="App">
        <div className='freecodecamp-logo-contenedor'>
          <img 
            className='freecodecamp-logo'
            src={freeCodeCampLogo}
            alt='logo de freeCodeCamp'/>
        </div>
       <div className='contenedor-principal'>
           <Contador numClics={this.state.numClics} />
           <Boton 
             texto='clic' 
             esBotonDeClic={true}
             manejarClic={this.manejarClic} />
           <Boton 
           texto={'reiniciar'}
           esBotonDeClic={false}
           manejarClic={this.reiniciarContador} />
       </div >
      </div >
    );
  }
}



export default App;
