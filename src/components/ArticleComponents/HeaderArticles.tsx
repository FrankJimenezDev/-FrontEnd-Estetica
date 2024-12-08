import React from "react"

export const HeaderArticles: React.FC<{
  title: string,
  description: string
}> = ({ title, description }) => {
  return (
    <header className="text-center mb-12">
      <h2 className="text-4xl font-bold mb-4">{title}</h2>
      <p className="text-lg text-gray-600">
        {description}
      </p>
    </header>
  )
}

