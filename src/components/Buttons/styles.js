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
  border: 1px solid ${({ theme: { color } }) => color.gray};
  color: ${({ theme: { color } }) => color.gray};
  width: 100px;
  margin-top: 6px;
`
