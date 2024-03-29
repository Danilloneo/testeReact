import Paragrafo from '../Paragrafo'
import { Titulo } from '../Titulo/style'
import { Card, LinkBotao } from './style'

const Projeto = () => (
  <Card>
    <Titulo>Projeto Lista de Tarefas</Titulo>
    <Paragrafo tipo="secundario">Lista de Tarefas feita com vueJS</Paragrafo>
    <LinkBotao>Visualizar</LinkBotao>
  </Card>
)

export default Projeto
