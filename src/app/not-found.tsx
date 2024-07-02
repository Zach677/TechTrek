/* eslint-disable react/display-name */
import { NotFound404 } from '~/components/common/404'
import { StyledButton } from '~/components/ui/button'

export default () => {
  return (
    <html>
      <body className={`m-0 h-full p-0 font-sans`}>
        <div data-theme>
          <NotFound404>
            <StyledButton>
              <a href="/">返回首页</a>
            </StyledButton>
          </NotFound404>
        </div>
      </body>
    </html>
  )
}
