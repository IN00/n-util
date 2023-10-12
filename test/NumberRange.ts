import { NumberRange } from "@/NumberRange"
import bindKey from "lodash.bindkey"

describe('NumberRange', () => {
  describe('.new', () => {
    describe.each([
      [2, 1, 'toThrow'],
    ])('(%p, %p)', (start, end, matcher) => {
      it(`throw error`, () => {
        bindKey(expect(() => { new NumberRange(start, end) }), matcher)()
      })
    })

    describe.each([
      [1, 2],
      [1, 1],
    ])('(%p, %p)', (start, end) => {
      it('to be instance', () => {
        expect(new NumberRange(start, end)).toBeInstanceOf(NumberRange)
      })
    })
  })

  describe('#includes', () => {
    describe.each([
      [-1,   'toBeFalsy'],
      [-0.1, 'toBeFalsy'],
      [0,    'toBeTruthy'],
      [0.1,  'toBeTruthy'],
      [1,    'toBeTruthy'],
      [1.9,  'toBeTruthy'],
      [2,    'toBeTruthy'],
      [2.1,  'toBeFalsy'],
      [3,    'toBeFalsy'],
    ])('(%p)', (subject, matcher) => {
      it(`throw error`, () => {
        const range = new NumberRange(0, 2)

        bindKey(expect(range.includes(subject)), matcher)()
      })
    })
  })

  describe('#toA', () => {
    describe.each([
      [[0, 1, 2]],
    ])('()', (expected) => {
      it(`throw error`, () => {
        const range = new NumberRange(0, 2)

        expect(range.toA()).toEqual(expected)
      })
    })
  })
})
