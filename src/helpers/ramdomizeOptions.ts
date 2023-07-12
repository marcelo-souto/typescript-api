const randomizeOptions = (
  options: string[],
  corrected_option: string
): string[] => {

  const optionsWithCorreted = [...options, corrected_option]

  for (let i = optionsWithCorreted.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * i)
    ;[optionsWithCorreted[i], optionsWithCorreted[randomIndex]] = [
      optionsWithCorreted[randomIndex],
      optionsWithCorreted[i],
    ]
  }

  return optionsWithCorreted
}

export { randomizeOptions }
