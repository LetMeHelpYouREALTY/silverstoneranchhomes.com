type CalendlyNamespace = NonNullable<Window['Calendly']>

export function waitForCalendly(timeoutMs = 15000): Promise<CalendlyNamespace> {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined') {
      reject(new Error('Calendly is only available in the browser'))
      return
    }

    if (window.Calendly) {
      resolve(window.Calendly)
      return
    }

    const startedAt = Date.now()
    const interval = window.setInterval(() => {
      if (window.Calendly) {
        window.clearInterval(interval)
        resolve(window.Calendly)
        return
      }

      if (Date.now() - startedAt >= timeoutMs) {
        window.clearInterval(interval)
        reject(new Error('Calendly script did not load in time'))
      }
    }, 100)
  })
}
