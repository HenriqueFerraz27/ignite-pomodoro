import * as Icon from 'phosphor-react'

export const Home = () => {
  return (
    <>
      <form action="">
        <div>
          <label htmlFor="task">Vou trabalhar em</label>
          <input id="task" type="text" />

          <label htmlFor="minutesAmount">durante</label>
          <input id="minutesAmount" type="number" />

          <span>minutos.</span>
        </div>

        <div>
          <span>0</span>
          <span>0</span>
          <span>:</span>
          <span>0</span>
          <span>0</span>
        </div>

        <button type="submit">
          <Icon.Play /> Começar
        </button>
      </form>
    </>
  )
}

export default Home
