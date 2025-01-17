import React from 'react'
import type { BaseBlock, CreatedBlock } from '@rallie/block'

export function useBlockState<T extends BaseBlock<unknown>, U>(
  block: T,
  getter: (state: T['state']) => U,
  deps: any[] = [],
) {
  const [value, setValue] = React.useState<U>(() => getter(block.state))
  React.useEffect(() => {
    const unwatch = block.watchState(getter).do((val) => {
      setValue(() => val)
    })
    return () => {
      unwatch()
    }
  }, [...deps]) // eslint-disable-line react-hooks/exhaustive-deps
  return value
}

export function useBlockEvents<T extends BaseBlock<unknown>>(
  block: T,
  events: Partial<T['events']>,
  deps: any[] = [],
) {
  React.useEffect(() => {
    const off = block.listenEvents(events)
    return () => {
      off()
    }
  }, [...deps]) // eslint-disable-line react-hooks/exhaustive-deps
}

export function useBlockMethods<T extends CreatedBlock<unknown>>(
  block: T,
  methods: Partial<T['methods']>,
  deps: any[] = [],
) {
  React.useEffect(() => {
    const off = block.addMethods(methods)
    return () => {
      off()
    }
  }, [...deps]) // eslint-disable-line react-hooks/exhaustive-deps
}
