import Car from "@/core/fundamentos/car";

export default class Civic implements Car {
    constructor(
        readonly maxVelocity: number = 208,
        private _currentVelocity: number = 0
    ) {
    }

    speedUp() {
        this._currentVelocity = Math.min(
            this._currentVelocity + 10,
            this.maxVelocity
        )
    }

    brake() {
        this._currentVelocity = Math.max(
            this._currentVelocity - 10,
            0
        )
    }

    get currentVelocity() {
        return this._currentVelocity
    }
}