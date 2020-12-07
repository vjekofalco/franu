export const screens = {
    s: 375,
    m: 768,
    l: 992,
    xl: 1170
}

const rangePrecision = 0.02

export const isMobile = (deviceWidth) => {
    return deviceWidth && screens.m >= deviceWidth
}

export const breakpoints = {
    xs: {
        max: screens.s - rangePrecision
    },
    s: {
        min: screens.s,
        max: screens.m - rangePrecision
    },
    m: {
        min: screens.m,
        max: screens.l - rangePrecision
    },
    l: {
        min: screens.l,
        max: screens.xl - rangePrecision
    },
    xl: {
        min: screens.xl
    }
}

const buildMediaBreakpointUp = bp => `(min-width: ${(breakpoints[bp].min)}px)`
const buildMediaBreakpointDown = bp => `(max-width: ${(breakpoints[bp].max)}px)`

// E.g. mediaBreakpointUp.l means for everything which is bigger than l size
export const mediaBreakpointUp = {
    s: buildMediaBreakpointUp('s'),
    m: buildMediaBreakpointUp('m'),
    l: buildMediaBreakpointUp('l'),
    xl: buildMediaBreakpointUp('xl')
}

// E.g. mediaBreakpointDown.l means for everything which is smaller than l size
export const mediaBreakpointDown = {
    s: buildMediaBreakpointDown('s'),
    m: buildMediaBreakpointDown('m'),
    l: buildMediaBreakpointDown('l'),
    xl: buildMediaBreakpointDown('xl')
}
