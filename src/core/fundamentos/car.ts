export default interface Car {
    readonly maxVelocity: number
    currentVelocity: number
    speedUp(): void
    brake(): void
}