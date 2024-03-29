import styled from 'styled-components'
import { P } from '../../components/Paragrafo/style'

export const Descricao = styled(P)`
  margin-top: 24px;
  margin-bottom: 48px;
  font-weight: bold;
`
export const BotaoTema = styled.button`
  border-radius: 12px;
  padding: 8px;
  color: #eee;
  font-size: 10px;
  font-weight: bold;
  background-color: #282a35;
  cursor: pointer;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`
export const SidebarContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0;
`
