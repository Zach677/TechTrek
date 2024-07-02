/* eslint-disable react/no-unknown-property */
export const NotFound404: Component = ({ children }) => {
  return (
    <div className="min-h-[500px]">
      <div className="fixed inset-0 flex flex-col space-y-6 center">
        <p>404啦</p>
        {children}
      </div>
    </div>
  )
}
