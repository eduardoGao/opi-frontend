import styled from 'styled-components'

export const Button = styled.button`
  background: ${props => props.out ? '#FF5F73' : '#2863DE'};
  border: none;
  border-radius: 8px;
  color: white;
  font-family: inherit;
  font-weight: bold;
  padding: 8px 14px;
  cursor: pointer;
  width: 80px;
`

export const ButtonAnswer = styled(Button)`
  background: transparent;
  border: 1px solid ${({ theme: { color } }) => color.primary};
  color: ${({ theme: { color } }) => color.primary};
  width: 100px;
  margin-top: 6px;
`
export const ButtonGenerate = styled(ButtonAnswer)`
  border: 1px solid ${({ theme: { color } }) => color.secondary};
  color: ${({ theme: { color } }) => color.secondary};
  width: 150px;
  margin: 0 auto;
`
