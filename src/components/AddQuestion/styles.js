import styled from 'styled-components'

export const TitleWrapper = styled.div`
  text-align: center;
  margin: 56px 0;
`

export const Subtitle = styled.p`
  font-size: 14px;
  margin-bottom: 8px;
`

export const FormContainer = styled.div`
  border: 1px solid ${({ theme: { color } }) => color.gray};
  border-radius: 8px;
  margin: 32px 16px;
  padding: 16px;
  background: white;
  width: 500px
`

export const Label = styled.label`
  display: block;
  font-size: 14px;
  color: ${({ theme: { color } }) => color.primary};
  font-weight: bold;
  margin-bottom: 24px;
`
export const Input = styled.input`
  border: none;
  border: 1px solid ${({ theme: { color } }) => color.primary};
  display: block;
  width: 100%;
  height: 75px;
  border-radius: 8px;
  margin-top: 4px;
`

export const Select = styled.select`
  border: none;
  border: 1px solid ${({ theme: { color } }) => color.primary};
  margin-left: 8px;
  border-radius: 4px;
`
