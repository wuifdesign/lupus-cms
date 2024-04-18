import { renderHook } from '@testing-library/react'
import { useCurrentRef } from './use-current-ref'

describe('useCurrentRef', () => {
  it('should return value', async () => {
    const { result } = renderHook(() => useCurrentRef('test-class'))
    expect(result.current.current).toBe('test-class')
  })
})
