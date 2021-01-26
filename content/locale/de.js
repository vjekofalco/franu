import { common } from '../common/de'
import { homeDe } from '../pages/home/de'
import { aboutUsDe } from '../pages/about-us/de'

export const de = {
    '/': { ...homeDe,
        common: {
            ...common
        }
    },
    '/about-us': { ...aboutUsDe,
        common: {
            ...common
        }
    },
    '/terms-and-conditions': {
        common: {
            ...common
        }
    },
    '/home-page': { ...homeDe,
        common: {
            ...common
        }
    }
}
