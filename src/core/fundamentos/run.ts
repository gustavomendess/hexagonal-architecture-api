import Car from "@/core/fundamentos/car";

export default function run(car: Car, logger: (str: string) => void = console.log) {
    Array.from({ length: 10 }).forEach(() => {
        car.speedUp()
        logger(`\nVelocidade: ${car.currentVelocity}`)
    })

    Array.from({ length: 10 }).forEach(() => {
        car.brake()
        logger(`\nVelocidade: ${car.currentVelocity}`)
    })
}