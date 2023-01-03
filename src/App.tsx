import Banner from './componentes/banner';
import Formulario from './componentes/formulario';
import { useState } from 'react';
import Time from './componentes/time';
import Rodape from './componentes/rodape';
import { IColaborador } from './compartilhado/interfaces/IColaborador';

function App() {

  const times = 
  [
    {
      nome : 'Programação',
      corPrimaria : '#57c278',
      corSecundaria : '#d9f7e9'
    },
    {
      nome : 'Front-end',
      corPrimaria : '#82CFFA',
      corSecundaria : '#E8F8FF'
    },
    {
      nome : 'Data Science',
      corPrimaria : '#A6D157',
      corSecundaria : '#F0F8E2'
    },
    {
      nome : 'Devops',
      corPrimaria : '#E06B69',
      corSecundaria : '#FDE7E8'
    },
    {
      nome : 'Ux e Design',
      corPrimaria : '#DB6E8F',
      corSecundaria : '#FAE9F5'
    },
    {
      nome : 'Mobile',
      corPrimaria : '#FFBA05',
      corSecundaria : '#FFF5D9'
    },
    {
      nome : 'Inovação e Gestão',
      corPrimaria : '#FF8A29',
      corSecundaria : '#FFEEDF'
    }
  ]

  const [colaboradores , setColaboradores] = useState<IColaborador[]>([]);

  const aoNovoColaboradorAdicionado = (colaborador : IColaborador) => {
    setColaboradores([...colaboradores , colaborador])
  }

  return (
    <div className="App">
      <Banner enderecoImagem='/imagens/banner.png'/>
      <Formulario times={times.map (time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
      {times.map(time => <Time 
      key={time.nome} 
      nome={time.nome} 
      corPrimaria={time.corPrimaria} 
      corSecundaria={time.corSecundaria} 
      colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
      />)} 
      <Rodape />
    </div>
  );
}

export default App;