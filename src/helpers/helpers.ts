export function randomNumber(min = 1, max = 1000) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}