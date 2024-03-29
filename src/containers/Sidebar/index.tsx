import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'
import { Descricao, BotaoTema } from './style'

const Sidebar = () => (
  <aside>
    <Avatar />
    <Titulo fontSize={20}>Danilloneo</Titulo>
    <Paragrafo tipo="secundario" fontSize={16}>
      danilloneo
    </Paragrafo>
    <Descricao tipo="principal" fontSize={12}>
      Engenheiro Front-End
    </Descricao>
    <BotaoTema>Trocar Tema</BotaoTema>
  </aside>
)

export default Sidebar
