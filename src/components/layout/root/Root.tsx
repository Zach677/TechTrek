import { Content } from '../content/Content'
import { Footer } from '../footer/Footer'
import { Header } from '../header/Header'

export const Root: Component = ({ children }) => (
  <>
    <Header />
    <Content>{children}</Content>
    <Footer />
  </>
)
