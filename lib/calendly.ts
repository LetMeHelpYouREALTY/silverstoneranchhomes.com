export const CALENDLY_URL =
  process.env.NEXT_PUBLIC_CALENDLY_URL ??
  'https://calendly.com/drjanduffy/dr-duffy-private-15-min-conversation'

export const CALENDLY_BADGE = {
  text: 'Schedule time with me',
  color: '#0069ff',
  textColor: '#ffffff',
  branding: false,
} as const

export const CALENDLY_INLINE_HEIGHT = 700
