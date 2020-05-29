import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Card = (props) => {
    return (
        <CardWrapper>
            {
                props.hasTitle && <CardTitle>
                    <h4>{props.title}</h4>
                </CardTitle>
            }

            <CardBody height={props.height}>{props.children}</CardBody>
        </CardWrapper>
    )
}

const CardWrapper = styled(motion.div) `
    background-color: #ffffff;
    border-radius: 8px;
    border: 1px solid #f2f2f2;
    position: relative;
    height: 100%;
    box-shadow: rgba(0, 0, 0, 0.04) 1px 4px 8px;
`

const CardTitle = styled.div`
    border-bottom: 1px solid #f2f2f2;
    height: 48px;
    display: flex;
    align-items: center;
    padding-left: 16px;
    padding-right: 16px;
`

const CardBody = styled.div`
    padding: 24px;
    width: 100%;
    height: ${props => props.height};
    position: relative;
    
    p {
        font-size: 13px;
        opacity: .7
    }

`
