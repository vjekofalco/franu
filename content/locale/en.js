import { common } from '../common/en'
import { homeEn } from '../pages/home/en'
import { aboutUsEn } from '../pages/about-us/en'

export const en = {
    '/': { ...homeEn,
        common: {
            ...common
        }
    },
    '/about-us': { ...aboutUsEn,
        common: {
            ...common
        }
    },
    '/terms-and-conditions': {
        common: {
            ...common
        }
    },
    '/home-page' : {
        ...homeEn,
        common: {
            ...common
        }
    }
}
