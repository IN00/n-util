import inRange from "lodash.inrange"
import range from "lodash.range"
import sample from "lodash.sample"

/**
 * End edge includes in range.
 */
export class NumberRange {
  readonly start: number
  readonly end: number

  constructor(start: number, end: number) {
    if (end < start) {
      throw new ArgumentError(start, end)
    }

    this.start = start
    this.end = end
  }

  public includes = (subject: number) => subject === this.end // lodash.inRange doesn't include end
    || inRange(subject, this.start, this.end)

  public sample = () => sample(this.toA())

  // lodash.range doesn't include end
  public toA = () => [...range(this.start, this.end), this.end]
}

export class ArgumentError extends Error {
  constructor(start: number, end: number) {
    super(`${start} is more than ${end}`)
  }
}
