export default interface UseCase<IN, OUT> {
    execute(entrance: IN): Promise<OUT>
}