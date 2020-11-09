import React from 'react'

import Oven from '../images/appliances/oven.svg?sprite'
import Fridge from '../images/appliances/fridge.svg?sprite'
import Microwave from '../images/appliances/microwave.svg?sprite'
import CookerHob from '../images/appliances/cooker-hob.svg?sprite'
import Dishwasher from '../images/appliances/dishwasher.svg?sprite'
import ExhaustHood from '../images/appliances/exhaust-hood.svg?sprite'
import CoffeMachine from '../images/appliances/coffe-machine.svg?sprite'

import {
    APPLIANCE_COFFE_MACHINE,
    APPLIANCE_COOKER_HOB,
    APPLIANCE_DISHWASHER,
    APPLIANCE_EXHAUST_HOOD,
    APPLIANCE_FRIDGE,
    APPLIANCE_MICROWAVE,
    APPLIANCE_OVEN,
} from './constants'

export const availableAppliances = [
    {
        id: APPLIANCE_OVEN,
        label: 'Oven'
    },
    {
        id: APPLIANCE_COOKER_HOB,
        label: 'Cooker hob'
    },
    {
        id: APPLIANCE_DISHWASHER,
        label: 'Dishwasher'
    },
    {
        id: APPLIANCE_EXHAUST_HOOD,
        label: 'Exhaust hood'
    },
    {
        id: APPLIANCE_FRIDGE,
        label: 'Fridge'
    },
    {
        id: APPLIANCE_MICROWAVE,
        label: 'Microwave'
    },
    {
        id: APPLIANCE_COFFE_MACHINE,
        label: 'Coffe machine'
    }
]

export const appliancesIcons = (applianceId) => {
    switch (applianceId) {
        case APPLIANCE_OVEN:
            return <Oven/>
        case APPLIANCE_MICROWAVE:
            return <Microwave/>
        case APPLIANCE_FRIDGE:
            return <Fridge/>
        case APPLIANCE_EXHAUST_HOOD:
            return <ExhaustHood/>
        case APPLIANCE_DISHWASHER:
            return <Dishwasher/>
        case APPLIANCE_COOKER_HOB:
            return <CookerHob/>
        case APPLIANCE_COFFE_MACHINE:
            return <CoffeMachine/>
        default:
            return null
    }
}

export const getApplianceTranslationLabel = (id) => {
    const appliances = availableAppliances.filter(a => a.id === id)

    if (appliances && appliances.length > 0) {
        return appliances[0].label
    }

    return id
}
