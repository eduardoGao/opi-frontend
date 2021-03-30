import React, { useState, useEffect } from 'react'
import Header from '../../components/header'
import { MainContainer, Container, Name, Value, StatTag, TitleSection, ContainerAns, ValueQ, NameQ, ItemPercentage } from './styles'
// import { ResponsiveContainer, BarChart, XAxis, Bar, Label, Tooltip, YAxis, CartesianGrid } from 'recharts'

function Stats () {
  const [stats, setStats] = useState({})

  const fetchStats = () => {
    try {
      fetch('http://opiapi-env.eba-ahwtvszf.us-east-2.elasticbeanstalk.com/api/stats')
        .then((response) => response.json())
        .then((data) => {
          setStats(data)
          console.log(data)
        })
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchStats()
  }, [])

  return (
    <>
    <Header />
    <MainContainer>
      <TitleSection>Preguntas contestadas</TitleSection>
      <ContainerAns>
        {
          stats.questions?.map(item => (
            <ItemPercentage key={item.name}>
              <NameQ>{item.name}</NameQ>
              <ValueQ>{item.value}%</ValueQ>
            </ItemPercentage>
          ))
        }
      </ContainerAns>
      <Container>
      <TitleSection>Preguntas por categoría</TitleSection>
        {
          stats.tags?.map(item => (
            <StatTag key={item.name}>
              <Name>{item.name}</Name>
              <Value>{item.value}</Value>
            </StatTag>
          ))
        }
      </Container>
    </MainContainer>
    </>
  )
}

export default Stats
