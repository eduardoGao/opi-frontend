import styled from 'styled-components'

export const MainContainer = styled.main`
  // background: red;
  // color: white;
  max-width: 550px;
  margin: 32px auto 0;
  padding-bottom: 24px;
`
export const TitleWrapper = styled.section`
  text-align: center;
`

export const Title = styled.h1`
  font-size: 20px;
  margin-bottom: 8px;
  color: ${({ theme: { color } }) => color.primary}
`

export const Subtitle = styled.p`
  font-size: 14px;
`
