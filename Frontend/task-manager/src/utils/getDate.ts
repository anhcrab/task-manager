
const getDate = (): String => {
    const presentDate = new Date(Date.now())
    let day, month, year

    switch (presentDate.getDay()) {
        case 1:
            day = 'Mon'
            break
        case 2:
            day = 'Tue'
            break
        case 3:
            day = 'Wed'
            break
        case 4:
            day = 'Thu'
            break
        case 5:
            day = 'Fri'
            break
        case 6:
            day = 'Sat'
            break
        case 7:
            day = 'Sun'
            break
        default:
            throw new Error(`Invalid date: ${presentDate}`)
    }
    month = presentDate.getMonth()
    year = presentDate.getFullYear()
    return `${day} ${month} ${year}`
}

export default getDate()