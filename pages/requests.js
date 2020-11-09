import axios from 'axios'
import moment from 'moment'
import styled from 'styled-components'
import React, { useState, useEffect } from 'react'

import { Text, HeadlineSecondary } from '../components/text'
import { PAGE_CONTENT_NARROW_WIDTH } from '../common/constants'
import { baseUnit, STORED_REQUESTS_API } from '../common/constants'
import { getApplianceTranslationLabel } from '../common/appliances'
import { getKitchenFormTranslationLabel } from '../common/kitchen-forms'
import { Table, TableCell, TableHead, TableHeading } from '../components/tables'
import { buttonSpecial, support2Hover, grayscale3, brown } from '../styles/colors'

const RequestsPAgeWrapper = styled.div`
  margin: 0 auto;
  padding: ${2 * baseUnit}px ${baseUnit}px;
  max-width: ${PAGE_CONTENT_NARROW_WIDTH}px;
`

const RowActionText = styled.span`
  cursor: pointer;
  font-weight: 600;
  
  ${({color}) => color && `color: ${color};`}
`

const ExtendedRequestDataWrapper = styled.div`
  display: flex;
  border-radius: 2px;
  border: 1px solid ${grayscale3};
  
  > div {
    padding: ${baseUnit}px ${baseUnit}px 0 ${baseUnit}px;
  }
`

const ExtendedRequestText = ({label, value}) => (
    <Text marginBottom={1} weight={600} inline>{label}: <span style={{fontWeight: 400}} marginLeft={0.5} inline>{value}</span></Text>
)

const ExtendedRequestItem = ({ userData, requestInfo }) => (
    <tr>
        <TableCell colSpan="6" single>
            <ExtendedRequestDataWrapper>
                <div style={{ flex: 1 }}>
                    <ExtendedRequestText label={'Tel'} value={userData.phone}/>
                    {
                        userData.address && <div>
                            <ExtendedRequestText label={'Adresa'} value={userData.address}/>
                        </div>
                    }
                </div>
                <div style={{ flex: 2 }}>
                    {requestInfo?.appliances && <>
                        <ExtendedRequestText label={'Aparati'} value={requestInfo.appliances.map(a => getApplianceTranslationLabel(a)).join(', ')}/>
                        </>}
                    {requestInfo?.kitchenShape && <>
                        <ExtendedRequestText label={'Oblik kuhinje'} value={getKitchenFormTranslationLabel(requestInfo.kitchenShape)}/>
                        </>}
                </div>
            </ExtendedRequestDataWrapper>
        </TableCell>
    </tr>
)

const RequestItem = ({ request }) => {
    const { userData, requestInfo, createdAt } = request
    const [ viewExpanded, setExpandView ] = useState(false)
    const date = moment(createdAt).format('DD.MM.YYYY')

    return (<><tr>
        <TableCell>
            {userData.email}
        </TableCell>
        <TableCell>
            {userData.firstName}
        </TableCell>
        <TableCell>
            {userData.lastName}
        </TableCell>
        <TableCell>
            {date}
        </TableCell>
        <TableCell>
            <RowActionText color={buttonSpecial} onClick={() => setExpandView(!viewExpanded)}>
                Više
            </RowActionText>
        </TableCell>
        <TableCell>
            <RowActionText color={support2Hover}>
                Napravi narudžbu
            </RowActionText>
        </TableCell>
    </tr>
        {viewExpanded && <ExtendedRequestItem userData={userData} requestInfo={requestInfo}/>}
    </>)
}

export default function Requests () {
    const [ requests, setRequests ] = useState([])

    useEffect( () => {
         axios.get(STORED_REQUESTS_API)
                .then(data => setRequests(data.data))
                .catch(e => console.log(e))
    }, [])

    return (<RequestsPAgeWrapper>
        <HeadlineSecondary color={brown} marginBottom={2}>Zahtijevi</HeadlineSecondary>
        <Table>
            <TableHead>
                <tr>
                    <TableHeading>
                        E-mail
                    </TableHeading>
                    <TableHeading>
                        Ime
                    </TableHeading>
                    <TableHeading>
                        Prezime
                    </TableHeading>
                    <TableHeading>
                        Datum
                    </TableHeading>
                    <TableHeading>
                    </TableHeading>
                    <TableHeading>
                    </TableHeading>
                </tr>
            </TableHead>
            <tbody>
                {
                    requests && requests.length > 0
                        ? <>
                            {requests.map((r, i) => {
                                return (<RequestItem key={r.slug} request={r} index={i + 1}/>)
                            } )}
                        </>
                        : <Text>Trenutno nema zahtijeva</Text>
                }
            </tbody>
        </Table>
    </RequestsPAgeWrapper>)
}
