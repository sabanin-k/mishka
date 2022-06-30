import { useLayoutEffect, useState } from "react"

const queries = [
    '(max-width: 660px)',
    '(min-width: 661px) and (max-width: 1019px)',
    '(min-width: 1020px'
]

export const useMatchMedia = () => {
    const mediaQueryList = queries.map(query => matchMedia(query))
    const getValues = mediaQueryList.map(mQuery => mQuery.matches)

    const [values, setValues] = useState(getValues)

    useLayoutEffect(() => {
        const handleChange = () => setValues(getValues)
        mediaQueryList.forEach(mQuery =>
            {mQuery.addEventListener('change', handleChange)})

        return () => mediaQueryList.forEach(mQuery =>
            {mQuery.removeEventListener('change', handleChange)})
    }, [getValues, mediaQueryList])

    return ['isMobile', 'isTablet', 'isDesktop'].reduce((acc, screen, index) => ({
        ...acc,
        [screen]: values[index],
    }), {} as Queries)
}

interface Queries {
    isMobile: boolean
    isTablet: boolean
    isDesktop: boolean
}