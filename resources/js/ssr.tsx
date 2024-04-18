import { renderToString } from 'react-dom/server'
import { createInertiaApp } from '@inertiajs/react'
import createServer from '@inertiajs/react/server'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers'
import { Config, route, RouteName } from '../../vendor/tightenco/ziggy' // import can't be shortened

const appName = import.meta.env.VITE_APP_NAME || 'Laravel'

createServer((page) =>
  createInertiaApp({
    page,
    render: renderToString,
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./pages/${name}.tsx`, import.meta.glob('./pages/**/*.tsx')),
    setup: ({ App, props }) => {
      const ziggy = page.props.ziggy as Omit<Config, 'location'> & { location: string }
      global.route<RouteName> = (name, params, absolute) =>
        route(name as any, params as any, absolute, {
          ...ziggy,
          location: new URL(ziggy.location),
        })

      return <App {...props} />
    },
  }),
)
