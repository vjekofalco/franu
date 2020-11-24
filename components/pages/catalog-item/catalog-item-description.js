import React from 'react'

import { Text } from '../../text'
import { brown } from '../../../styles/colors'

export const CatalogItemDescription = ({ description }) => (<>
    <Text marginTop={5} size={1.5} color={brown} marginBottom={2}>Beschreibung:</Text>
    <Text style={{ maxWidth: '70%' }}>{description}</Text>
</>)
