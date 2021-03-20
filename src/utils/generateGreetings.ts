function generateGreetings() {
    const date = new Date();
    const hours = date.getHours();
    if (hours >= 0 && hours <= 3) {
        return 'Boa Madrugada'
    } else if (hours >= 4 && hours <= 11) {
        return 'Bom dia'
    } else if (hours >= 12 && hours <= 17) {
        return 'Boa tarde'
    }
    return 'Boa noite'

}

export default generateGreetings;