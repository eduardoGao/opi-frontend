import styled from 'styled-components'

export const CardContainer = styled.article`
  // background: blue;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

export const Card = styled.div`
  background: white;
  margin-top: 42px;
  border-radius: 8px;
  border: .5px solid ${({ theme: { color } }) => color.gray};
  padding: 14px 16px;
  flex: 1;
  // margin: 28px auto 0;
  min-width: 550px;
`

export const CardAnswer = styled(Card)`
  margin: 8px auto 0;
  font-size: 12px;
  min-width: 450px;
`
export const Answer = styled.p`
  margin-bottom: 14px;
`

export const UserInfo = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  // margin-top: 14px;
`
export const AnswerInfo = styled(UserInfo)`
  margin-top: 0px;
`

export const User = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-top: 14px;
`
export const UserAnswer = styled(User)`
  font-size: 12px;
`

export const Question = styled.h4`
  font-weight: 400;
  font-size: 14px;
  margin-top: 14px;
`
export const AnswerT = styled(Question)`
  font-size: 14px;
  margin-top: 8px;
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
`
export const MessageAd = styled(MessageAlert)`
  color: orange;
`

export const Day = styled.span`

`

export const Hour = styled.span`

`

export const AnswerText = styled.div`

`
export const TitleSection = styled.h4`
  font-size: 16px;
  text-align: center;
`
