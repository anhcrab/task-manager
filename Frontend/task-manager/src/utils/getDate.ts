
const getDate = (): string => {
    const presentDate = new Date(Date.now())
    let day, month
    const date = presentDate.getDate()

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

    switch(presentDate.getMonth()) {
        case 0:
            month = 'Jan'
            break
        case 1:
            month = 'Feb'
            break
        case 2:
            month = 'Mar'
            break
        case 3:
            month = 'Apr'
            break
        case 4:
            month = 'May'
            break
        case 5:
            month = 'Jun'
            break
        case 6:
            month = 'Jul'
            break
        case 7:
            month = 'Aug'
            break
        case 8:
            month = 'Sep'
            break
        case 9:
            month = 'Oct'
            break
        case 10:
            month = 'Nov'
            break
        case 11:
            month = 'Dec'
            break
    }
    
    return `${day} ${date} ${month}`
}

export default getDate()