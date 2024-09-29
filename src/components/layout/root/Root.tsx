import { Content } from '../content/Content'
import { Footer } from '../footer/Footer'

export const Root: Component = ({ children }) => (
  <>
    <Content>{children}</Content>
    <Footer />
  </>
)
