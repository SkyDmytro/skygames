import { getIsCountryGuessed } from '@/features/countriesGame/utils/functions';

import { describe, expect, test } from '@jest/globals';

describe('getIsCountryGuessed', () => {
  test('should return false if countryName is an empty string', () => {
    const result = getIsCountryGuessed(['A', 'B'], '');
    expect(result).toBe(false);
  });

  test('should return false if guessedLetters is empty', () => {
    const result = getIsCountryGuessed([], 'France');
    expect(result).toBe(false);
  });

  test('should return false if guessedLetters do not match countryName', () => {
    const result = getIsCountryGuessed(['A', 'B'], 'France');
    expect(result).toBe(false);
  });

  test('should return true if guessedLetters match all letters in countryName (case insensitive)', () => {
    const result = getIsCountryGuessed(
      ['F', 'R', 'A', 'N', 'C', 'E'],
      'France',
    );
    expect(result).toBe(true);
  });

  test('should return true if guessedLetters contain additional letters not in countryName', () => {
    const result = getIsCountryGuessed(
      ['F', 'R', 'A', 'N', 'C', 'E', 'X', 'Y', 'Z'],
      'France',
    );
    expect(result).toBe(true);
  });

  test('should return false if countryName contains spaces and guessedLetters do not match all letters', () => {
    const result = getIsCountryGuessed(['F', 'R', 'A', 'N'], 'New Zealand');
    expect(result).toBe(false);
  });

  test('should return true if countryName contains spaces and guessedLetters match all letters', () => {
    const result = getIsCountryGuessed(
      ['N', 'E', 'W', 'Z', 'A', 'L', 'A', 'N', 'D'],
      'New Zealand',
    );
    expect(result).toBe(true);
  });

  test('should handle countryName with mixed casing', () => {
    const result = getIsCountryGuessed(
      ['F', 'R', 'A', 'N', 'C', 'E'],
      'FrAnCe',
    );
    expect(result).toBe(true);
  });

  test('should return true for single-letter countryName if guessed correctly', () => {
    const result = getIsCountryGuessed(['A'], 'A');
    expect(result).toBe(true);
  });

  test('should return false for single-letter countryName if guessed incorrectly', () => {
    const result = getIsCountryGuessed(['B'], 'A');
    expect(result).toBe(false);
  });
});
