import React from 'react'

function PageLayout({ children }) {
  const childrenArray = React.Children.toArray(children)
  const contentChildren = childrenArray.slice(0, -1)
  const fullWidthChildren = childrenArray.slice(-1)

  return (
    <main className="min-h-screen py-12 px-page-x-mobile md:px-page-x">
      <div className="mx-auto max-w-page grid-fit:max-w-[1305px]">
        {contentChildren}
      </div>
      {fullWidthChildren}
    </main>
  )
}

export default PageLayout
