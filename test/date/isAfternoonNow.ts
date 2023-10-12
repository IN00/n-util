import { vi } from 'vitest'
import { isAfternoonNow } from "@/index"

describe('isAfternoonNow', () => {
  describe.each([
    ['2023-01-01T11:59:59', false],
    ['2023-01-01T12:00:00', true],
    ['2023-01-01T12:00:01', true]
  ])('', (time, result) => {
    it(`when it's now ${time}`, () => {
      vi.setSystemTime(new Date(time))

      expect(isAfternoonNow()).toEqual(result)
    })
  })
})
