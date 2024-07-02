import { describe, expect, it } from 'vitest'

import { clsxm, escapeHTMLTag, safeJsonParse } from '~/lib/helper'

describe('clsxm', () => {
  it('should merge classes correctly', () => {
    expect(clsxm('foo', 'bar')).toBe('foo bar')
    expect(clsxm('text-red-500', 'text-blue-500')).toBe('text-blue-500')
    expect(clsxm('p-4', { 'mt-2': true, 'mb-2': false })).toBe('p-4 mt-2')
  })
})

describe('escapeHTMLTag', () => {
  it('should escape HTML tags correctly', () => {
    expect(escapeHTMLTag('<div>Hello</div>')).toBe(
      '&lt;div&gt;Hello&lt;/div&gt;',
    )
    expect(escapeHTMLTag('\'quote\' and "double quote"')).toBe(
      '&#39;quote&#39; and &#34;double quote&#34;',
    )
  })
})

describe('safeJsonParse', () => {
  it('should parse valid JSON', () => {
    expect(safeJsonParse('{"name": "John", "age": 30}')).toEqual({
      name: 'John',
      age: 30,
    })
  })

  it('should return null for invalid JSON', () => {
    expect(safeJsonParse('{invalid json}')).toBeNull()
  })
})
