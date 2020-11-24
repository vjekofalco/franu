import {
    ENERGY_EFFICIENCY_A,
    ENERGY_EFFICIENCY_B,
    ENERGY_EFFICIENCY_C,
    ENERGY_EFFICIENCY_D,
    ENERGY_EFFICIENCY_A_PLUS,
    ENERGY_EFFICIENCY_A_PLUS2,
    ENERGY_EFFICIENCY_A_PLUS3
} from './constants'
import { eFD, eFC, eFB, eFA, eFAP, eFAPP, eFAPPP } from "../styles/colors";

export const energyEfficiencyLabels = [
    {
        id: ENERGY_EFFICIENCY_D,
        label: ENERGY_EFFICIENCY_D,
        color: eFD
    },
    {
        id: ENERGY_EFFICIENCY_C,
        label: ENERGY_EFFICIENCY_C,
        color: eFC
    },
    {
        id: ENERGY_EFFICIENCY_B,
        label: ENERGY_EFFICIENCY_B,
        color: eFB
    },
    {
        id: ENERGY_EFFICIENCY_A,
        label: ENERGY_EFFICIENCY_A,
        color: eFA
    },
    {
        id: ENERGY_EFFICIENCY_A_PLUS,
        label: ENERGY_EFFICIENCY_A_PLUS,
        color: eFAP
    },
    {
        id: ENERGY_EFFICIENCY_A_PLUS2,
        label: ENERGY_EFFICIENCY_A_PLUS2,
        color: eFAPP
    },
    {
        id: ENERGY_EFFICIENCY_A_PLUS3,
        label: ENERGY_EFFICIENCY_A_PLUS3,
        color: eFAPPP
    }
]
