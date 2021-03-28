import styled from 'styled-components'

export const HeaderContainer = styled.header`
  color: ${({ theme: { color } }) => color.primary};
  background: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  padding: 0 32px;
`
