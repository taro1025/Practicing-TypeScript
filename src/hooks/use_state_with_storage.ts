import { useState } from 'react'

# setStateと同時に何かやりたいことがあるときに使えるな
export const useStateWithStorage = (init: string, key: string): [string, (s: string) => void] => {
    const [value, setValue] = useState<string>(localStorage.getItem(key) || init)

    const setValueWithStorage = (nextValue: string): void => {
      setValue(nextValue)
      localStorage.setItem(key, nextValue)
    }

    return [value, setValueWithStorage]
}
