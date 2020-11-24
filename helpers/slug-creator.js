export const slugCreator = (strings) => {
    const createSlug = (string) => {
        const normalizedString = string.replace(/[^a-zA-Z0-9]+/g, '').toLowerCase()
        return `${normalizedString}-${Date.now()}`
    }

    if (Array.isArray(strings)) {
        const stringified = strings.join('-')
        return createSlug(stringified)
    }

    if ( typeof strings === 'string') {
        return createSlug(strings)
    }

    return ''
}
