const randomizeOptions = (options: string[]): string[] => {
  for (let i = options.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * i)
    ;[options[i], options[randomIndex]] = [options[randomIndex], options[i]]
  }

  return options
}

export { randomizeOptions }
