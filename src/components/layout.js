import React from "react"
import PropTypes from "prop-types"
import { Nav } from './nav'
import styled from 'styled-components'
import { Global } from './globalStyle'
import { motion } from 'framer-motion'
import { ArrowLeft, User } from 'react-feather'


const Layout = ({ children }) => {
  const [navOpen, setNavOpen] = React.useState(true)

  return (
    <>
      <Global />
      <Wrapper>
        <Nav />
        <ContentWrapper>
          <HeaderBar>
            <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => setNavOpen(!navOpen)}><ArrowLeft style={{ marginRight: '8px' }} />Close</div>
            <Search placeholder="Search..." />
            <Avatar whileTap={{ scale: .95 }}><User /></Avatar>
          </HeaderBar>
          <PageContent>
            {children}
          </PageContent>
        </ContentWrapper>
      </Wrapper>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

const Wrapper = styled.div`
  position: relative;
  display: flex;
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
  flex-shrink: 0;
`

const ContentWrapper = styled(motion.div) `
  height: 100%;
  flex-shrink: 1;
  width: 100%;
  position: relative;
`

const PageContent = styled(motion.div) `
  background-color: #fdfdfd;
background-image: url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d6dbe8' fill-opacity='0.4'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  height: 100%;
  padding: 100px 32px 32px 32px;
  z-index: 10;
  overflow-y: auto;
  margin: auto;
  box-shadow: 11px 0px 50px 0px rgba(5, 5, 5, 0.07);
`

const HeaderBar = styled.div`
  height: 68px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 24px;
  padding-right: 24px;
  position: absolute;
  right: 0px;
  left: 0px;
  border-bottom: 1px solid #f2f2f2;
  background: #fff;
  z-index: 1000;
`

const Search = styled.input`
  height: 36px;
  outline: none;
  border: 2px solid #e8e8e8;
  border-radius: 24px;
  width: 100%;
  font-size: 16px; 
  text-indent: 24px;
  transition: .6s;
  width: 600px;

  :focus {
    border: 2px solid #1A61CB;
    box-shadow: 0px 0px 0px 5px rgba(44, 99, 99, 0.11);
  }
`

const Avatar = styled(motion.button) `
  min-height: 40px;
  min-width: 40px;
  background: white;
  border-radius: 50%;
  border: 2px solid #e8e8e8;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;

  :focus {
    border: 2px solid #1A61CB;
    box-shadow: 0px 0px 0px 5px rgba(44, 99, 99, 0.11);
  }
`

