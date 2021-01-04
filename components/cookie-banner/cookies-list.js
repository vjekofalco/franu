import { COOKIE_CONSENT, COOKIE_STATISTICS_CONSENT } from '../../common/constants'

export const cookieList = [
    {
        name: COOKIE_CONSENT,
        title: 'common.cookies.necessary',
        description: 'common.cookies.necessaryDescription',
        preselected: true
    },
    {
        name: COOKIE_STATISTICS_CONSENT,
        title: 'common.cookies.statistics',
        description: 'common.cookies.statisticsDescription'
    }
]
