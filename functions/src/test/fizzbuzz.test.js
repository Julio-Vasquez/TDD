import { describe, it, expect } from 'vitest'

import fizzbuzz from './../functions/fizzbuzz'

describe('fizzbuzz', () => {
  it('should be a function', () => {
    expect(typeof fizzbuzz).toBe('function')
  })

  it('should throw if not number is provided as parameter', () => {
    expect(() => fizzbuzz()).toThrow()
  })

  it('should throw a specific error message if not number is provided as parameter', () => {
    expect(() => fizzbuzz()).toThrow(/number/)
  })

  it('should throw a specific error message not a number is provided', () => {
    expect(() => fizzbuzz(NaN)).toThrow(/number/)
  })

  it('should return "fizz" if number is divisible by 3', () => {
    expect(fizzbuzz(3)).toBe('fizz')
    expect(fizzbuzz(6)).toBe('fizz')
    expect(fizzbuzz(9)).toBe('fizz')
    expect(fizzbuzz(12)).toBe('fizz')
  })

  it('should return "fizz" if number is divisible by 5', () => {
    expect(fizzbuzz(5)).toBe('buzz')
  })

  it('should return "fizz" if number is divisible by 3 and 5', () => {
    expect(fizzbuzz(15)).toBe('fizzbuzz')
  })

  it('should return number if number not is divisible by 3 or 5', () => {
    expect(fizzbuzz(1)).toBe(1)
  })

  it('should return number if number not is divisible by 3 or 5', () => {
    expect(fizzbuzz(16)).toBe(16)
  })
})
