import styled from 'styled-components'

export const MainContainer = styled.main`
  max-width: 550px;
  margin: 32px auto 0;
`

export const Container = styled.div`
  background: ${({ theme: { color } }) => color.light};
  max-width: 100%;
  min-height: 300px;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 32px;
`

export const ContainerAns = styled(Container)`
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const StatTag = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 50%;
  margin: 24px auto;
  background: ${({ theme: { color } }) => color.primary};
  padding: 8px 12px;
  border-radius: 8px;
`

export const TitleSection = styled.h2`
  text-align: center;
  font-size: 18px;
  color: ${({ theme: { color } }) => color.dark};
`

export const Name = styled.h3`
  color: white;
  font-weight: bold;
  font-size: 14px;
`
export const NameQ = styled(Name)`
  // color: black;
  margin-bottom: 8px;
`

export const Value = styled.p`
  color: white;
  font-weight: bold;
  font-size: 18px;
`
export const ValueQ = styled(Value)`
  // color: black;
`

export const ItemPercentage = styled.div`
  // background: ${props => props.non ? `${({ theme: { color } }) => color.secondary}` : `${({ theme: { color } }) => color.primary}`};
  background: ${({ theme: { color } }) => color.primary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  min-width: 40%;
  border-radius: 16px;
  margin: 0 8px;
`
