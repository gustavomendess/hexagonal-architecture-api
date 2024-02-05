import Car from "@/core/fundamentos/car";

export default class Fusca implements Car {
    constructor(
        readonly maxVelocity: number = 140,
        private _currentVelocity: number = 0
    ) {
    }

    speedUp() {
        this._currentVelocity = Math.min(
            this._currentVelocity + 5,
            this.maxVelocity
        )
    }

    brake() {
        this._currentVelocity = Math.max(
            this._currentVelocity - 5,
            0
        )
    }

    get currentVelocity() {
        return this._currentVelocity
    }
}