import styled from 'styled-components'

export const CardContainer = styled.article`
  // background: blue;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

export const Card = styled.div`
  background: white;
  margin-top: 28px;
  border-radius: 8px;
  border: .5px solid ${({ theme: { color } }) => color.gray};
  padding: 14px 16px;
  flex: 1;
  // margin: 28px auto 0;
  min-width: 550px;
`

export const UserInfo = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-top: 14px;
`

export const User = styled.p`
  font-size: 18px;
  font-weight: bold;
  /* margin-right: 8px; */
`

export const Question = styled.h4`
  font-weight: 400;
  font-size: 14px;
  margin-top: 14px;
`

export const Tag = styled.span`
  font-size: 10px;
  border: 1px solid ${({ theme: { color } }) => color.primary};
  color: ${({ theme: { color } }) => color.primary};
  padding: 2px 4px;
  border-radius: 4px;
  font-weight: bold;
  text-transform: uppercase;
`

export const PublishedAt = styled.div`
  // background: red;
  font-size: 12px;
  color: ${({ theme: { color } }) => color.gray};
`

export const MessageAlert = styled.span`
  color: ${({ theme: { color } }) => color.secondary};
  font-size: 10px;
  margin-top: 5px;
  font-weight: bold;
`

export const Day = styled.span`

`

export const Hour = styled.span`

`

export const AnswerText = styled.div`

`
