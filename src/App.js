import React from "react"
import Layout from "./components/layout"
import styled from 'styled-components'
import { Card } from './components/card'
import { Table } from './components/table'
import { LineChart, RoseChart, BarChart } from './components/charts'
import { Download } from 'react-feather'
import { motion } from 'framer-motion'
import { Map } from './components/map'



const App = () => (
  <Layout>
    <Wrapper>
      <Flex>
        <h3>CO Live 11:15 AM Service</h3>
        <Button whileTap={{ scale: .95 }}><Download style={{ marginRight: "8px" }} />Export Data</Button>
      </Flex>
      <Section>
        <Grid columns="1fr 1fr 1fr 1fr 1fr" marginBottom="14px">
          <Card>
            <h2>276</h2>
            <p>Total Viewers</p>
          </Card>
          <Card initial={{ scale: 0 }} animate={{ scale: 1 }} title="To">
            <h2>15</h2>
            <p>User at Service Start</p>
          </Card>
          <Card>
            <h2>120</h2>
            <p>User at Message Start</p>
          </Card>
          <Card>
            <h2>72</h2>
            <p>Users at Message End</p>
          </Card>
          <Card>
            <h2>iOS</h2>
            <p>Top Device</p>
          </Card>
        </Grid>
      </Section>
      <Section>
        <Grid columns="100%">
          <Card style={{ marginTop: '56px' }} hasTitle title="View Time Duration">
            <LineChart />
          </Card>
        </Grid>
      </Section>
      <Section>
        <Grid columns="1fr 1fr" marginBottom="14px">
          <Card style={{ marginTop: '56px' }} hasTitle title="Device Resolutions">
            <BarChart />
          </Card>
          <Card style={{ marginTop: '56px' }} hasTitle title="How long were viewers viewing?">
            <RoseChart />
          </Card>
        </Grid>
      </Section>
      <Section>
        <Card height="600px" style={{ marginTop: '56px', height: "500px" }} hasTitle title="Where are viewers coming from?">
          <Map />
        </Card>
      </Section>
      <Section>
        <Card height="600px" style={{ marginTop: '56px', height: "500px" }} hasTitle title="User Details">
          <Table />
        </Card>
      </Section>
    </Wrapper>
  </Layout>
)


const Grid = styled.div`
      display: grid;
      grid-template-columns:  ${props => props.columns};
      grid-gap: 14px;
      justify-content: center;

    `

const Flex = styled.div`
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 16px;
`

const Wrapper = styled.div`
 width: 100%;
 max-width: 1080px;
 margin: auto;
`

const Section = styled.div`
  margin-bottom: 16px;
`

const Button = styled(motion.button) `
  background: #fff;
  border: 2px solid #e8e8e8;
  padding: 8px 12px 8px 12px;
  font-size: 14px;
  border-radius: 24px;
  display: flex;
  align-items: center;
  transition: .2s;
  outline: none;
  cursor: pointer;

  :hover {
    color: #1A61CB;
    border: 2px solid #1A61CB;
  }

   :focus {
    border: 2px solid #1A61CB;
    color: #1A61CB;
    box-shadow: 0px 0px 0px 5px rgba(44, 99, 99, 0.11);
  }
`
export default App