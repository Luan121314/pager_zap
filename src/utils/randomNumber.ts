function randomNumber(max:number) {
    const min = 0;
    return Math.floor(Math.random() * (max - min)) + min;
}


export default randomNumber