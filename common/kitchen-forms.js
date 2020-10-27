import React from 'react'

import { L_KITCHEN, U_KITCHEN, ISLAND_KITCHEN, ONE_WALL_KITCHEN } from './constants'

import LKitchen from '../images/kitchen-forms/l-kitchen.svg?sprite'
import UKitchen from '../images/kitchen-forms/u-kitchen.svg?sprite'
import IslandKitchen from '../images/kitchen-forms/island-kitchen.svg?sprite'
import OneWallKitchen from '../images/kitchen-forms/one-wall-kitchen.svg?sprite'

export const kitchenForms = [
    {
        id: L_KITCHEN,
        label: 'L kitchen'
    },
    {
        id: U_KITCHEN,
        label: 'U kitchen'
    },
    {
        id: ISLAND_KITCHEN,
        label: 'Island kitchen'
    },
    {
        id: ONE_WALL_KITCHEN,
        label: 'One wall kitchen'
    }
]

export const kitchenFormIcon = (form) => {
    switch (form) {
        case L_KITCHEN:
            return <LKitchen/>
        case U_KITCHEN:
            return <UKitchen/>
        case ISLAND_KITCHEN:
            return <IslandKitchen/>
        case  ONE_WALL_KITCHEN:
            return <OneWallKitchen/>
        default:
            return null
    }
}
