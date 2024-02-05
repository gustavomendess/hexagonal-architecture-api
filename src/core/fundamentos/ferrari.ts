import Car from "@/core/fundamentos/car";

export default class Ferrari implements Car {
    constructor(
        readonly maxVelocity: number = 324,
        private _currentVelocity: number = 0
    ) {
    }

    speedUp() {
        this._currentVelocity = Math.min(
            this._currentVelocity + 20,
            this.maxVelocity
        )
    }

    brake() {
        this._currentVelocity = Math.max(
            this._currentVelocity - 20,
            0
        )
    }

    get currentVelocity() {
        return this._currentVelocity
    }
}