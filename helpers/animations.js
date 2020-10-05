import { useRouter } from 'next/router'

export const scrollToElement = (id, changeUrl, options) => {
    if (!document) return

    const element = document.getElementById(id)

    element.scrollIntoView(options)
}
