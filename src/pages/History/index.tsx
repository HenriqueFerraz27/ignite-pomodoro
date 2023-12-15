import { useContext } from 'react'
import * as S from './styles'
import { CyclesContext } from '../../contexts'

export const History = () => {
  const { cycles } = useContext(CyclesContext)
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
            {cycles.map(cycle => {
              return (
                <tr key={cycle.id}>
                  <td>{cycle.task}</td>
                  <td>{cycle.minutesAmount}</td>
                  <td>{cycle.startDate.toISOString()}</td>
                  <td>
                    {cycle.finishedDate && (
                      <S.Status feedback="concluded">Concluído</S.Status>
                    )}
                    {cycle.interruptedDate && (
                      <S.Status feedback="interrupt">Interrompido</S.Status>
                    )}
                    {!cycle.finishedDate && !cycle.interruptedDate && (
                      <S.Status feedback="inProgress">Em Andamento</S.Status>
                    )}
                  </td>
                </tr>
              )
            })}

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
