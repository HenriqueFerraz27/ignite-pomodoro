import styled from 'styled-components'
import { pxToRem } from '../../utils'

export const DefaultLayout = styled.main`
  display: flex;
  flex-direction: column;
  max-width: 75%;
  height: calc(100vh - ${pxToRem(160)});
  margin: ${pxToRem(80)} auto;
  background-color: ${({ theme }) => theme.colors.base.shape.tertiary};
  border-radius: ${pxToRem(8)};
`
