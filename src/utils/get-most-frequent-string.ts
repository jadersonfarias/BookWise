export function getMostFrequentString(arr: string[]) {
    if (arr.length === 0) {
      return []
    }
  
    const hashmap = arr.reduce(
      (acc, val) => {
        acc[val] = (acc[val] || 0) + 1
        return acc
      },
      {} as Record<string, number>,
    )
  
    return Object.keys(hashmap).reduce((a, b) =>
      hashmap[a] > hashmap[b] ? a : b,
    )
  }