import { NotFound404 } from '~/components/common/404'

// TODO button style optimization
export default () => {
  return (
    <html>
      <body className="m-0 h-full bg-gradient-to-r from-blue-100 to-purple-100 p-0 font-sans">
        <div data-theme>
          <NotFound404 />
        </div>
      </body>
    </html>
  )
}
