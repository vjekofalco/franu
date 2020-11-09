import axios from 'axios'
import styled from 'styled-components'
import React, { useState, useEffect } from 'react'

import {grayscale2, grayscale5, grayscale7} from '../styles/colors'
import { Text, HeadlineSecondary } from '../components/text'
import { PAGE_CONTENT_NARROW_WIDTH } from '../common/constants'
import { baseUnit, STORED_REQUESTS_API } from '../common/constants'

const RequestsPAgeWrapper = styled.div`
  margin: 0 auto;
  padding: ${2 * baseUnit}px ${baseUnit}px;
  max-width: ${PAGE_CONTENT_NARROW_WIDTH}px;
`

const RequestItemWrapper = styled.div`
  padding: ${baseUnit}px;
  border-top: 1px solid ${grayscale2};
  
  :hover {
    background: ${grayscale7};
  }
`

const RequestItem = ({ request }) => {
    return (<RequestItemWrapper>
        {request.userData.email}
    </RequestItemWrapper>)
}

export default function Requests () {
    const [ requests, setRequests ] = useState([])

    useEffect( () => {
         axios.get(STORED_REQUESTS_API)
                .then(data => setRequests(data.data))
                .catch(e => console.log(e))
    }, [])

    return (<RequestsPAgeWrapper>
        <HeadlineSecondary marginBottom={2}>Zahtijevi</HeadlineSecondary>
        {
            requests && requests.length > 0
                ? <>
                    {requests.map(r => {
                        return (<RequestItem request={r}/>)
                    } )}
                </>
                : <Text>Trenutno nema zahtijeva</Text>
        }
    </RequestsPAgeWrapper>)
}
