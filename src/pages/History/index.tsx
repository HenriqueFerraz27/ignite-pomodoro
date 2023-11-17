import * as S from './styles'

export const History = () => {
  return (
    <S.History>
      <h1>Meu Histórico</h1>

      <S.List>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Conserto de débitos técnicos </td>
              <td>20 minutos</td>
              <td>Há 2 meses</td>
              <td>
                <S.Status feedback="concluded">Concluído</S.Status>
              </td>
            </tr>
            <tr>
              <td>Conserto de débitos técnicos </td>
              <td>20 minutos</td>
              <td>Há 2 meses</td>
              <td>
                <S.Status feedback="inProgress">Concluído</S.Status>
              </td>
            </tr>
            <tr>
              <td>Conserto de débitos técnicos </td>
              <td>20 minutos</td>
              <td>Há 2 meses</td>
              <td>
                <S.Status feedback="interrupt">Concluído</S.Status>
              </td>
            </tr>
            <tr>
              <td>Conserto de débitos técnicos </td>
              <td>20 minutos</td>
              <td>Há 2 meses</td>
              <td>
                <S.Status feedback="inProgress">Concluído</S.Status>
              </td>
            </tr>
            <tr>
              <td>Conserto de débitos técnicos </td>
              <td>20 minutos</td>
              <td>Há 2 meses</td>
              <td>
                <S.Status feedback="concluded">Concluído</S.Status>
              </td>
            </tr>
          </tbody>
        </table>
      </S.List>
    </S.History>
  )
}
