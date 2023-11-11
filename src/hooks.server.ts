import type { Handle } from '@sveltejs/kit'

export const handle = (async ({ event, resolve }) => {
  console.log('url ---> ', event.url.pathname)
  return await resolve(event)
}) satisfies Handle
