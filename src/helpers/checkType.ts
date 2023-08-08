export const checkType = <T>(data: unknown, ...keys: (keyof T)[]): data is T => {

  if(data && typeof data === "object" && keys.every((key) => key in data)) {
    return true
  } else {
    return false
  }
  
}