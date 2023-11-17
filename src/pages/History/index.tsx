import * as S from './styles'

export const History = () => {
  return (
    <S.History>
      <h1>Meu Histórico</h1>

      <S.Table>
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
            <td>Tarefa</td>
            <td>20 minutos</td>
            <td>Há 2 meses</td>
            <td>Concluído</td>
          </tr>
        </tbody>
      </S.Table>
    </S.History>
  )
}
