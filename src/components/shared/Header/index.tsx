import React from 'react'

function PageHeader({children}: {children: React.ReactNode}) {
  return (
    <div className="w-full p-4 sm:px-16">{children}</div>
  )
}

export default PageHeader