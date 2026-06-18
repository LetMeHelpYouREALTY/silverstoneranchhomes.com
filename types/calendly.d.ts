interface CalendlyBadgeWidgetOptions {
  url: string
  text?: string
  color?: string
  textColor?: string
  branding?: boolean
}

interface CalendlyPopupWidgetOptions {
  url: string
  prefill?: Record<string, string>
  utm?: Record<string, string>
}

interface CalendlyInlineWidgetOptions {
  url: string
  parentElement: HTMLElement
  prefill?: Record<string, string>
  utm?: Record<string, string>
}

interface CalendlyNamespace {
  initBadgeWidget: (options: CalendlyBadgeWidgetOptions) => void
  initPopupWidget: (options: CalendlyPopupWidgetOptions) => void
  initInlineWidget: (options: CalendlyInlineWidgetOptions) => void
}

declare global {
  interface Window {
    Calendly?: CalendlyNamespace
  }
}

export {}
