import React from "react"
import { ArticlesI } from "../../interfaces/Article.interface"

export const Articles: React.FC<ArticlesI> = ({ articles }) => {

    return (
        <section className="space-y-12">
            {
                articles.map((article, idx) => {

                    const articleClassName = (idx % 2 === 0)
                        ? `flex flex-col md:flex-row items-center md:items-start md:justify-around`
                        : `flex flex-col md:flex-row-reverse items-center md:items-start md:justify-around`

                    return (
                        <article key={idx} className={articleClassName}>
                            <div className="md:w-5/12">
                                <h2 className="text-2xl font-bold mb-4">{article.title}</h2>
                                <p className="text-gray-600 mb-6 text-center text-justify m-5">
                                    {article.text}
                                </p>
                            </div>
                            <figure className="md:w-5/12 max-w-sm">
                                <img
                                    className="rounded-md border-none"
                                    src={article.image}
                                    alt="Verse Finder feature illustration" />
                            </figure>
                        </article>
                    )
                })
            }
        </section>
    )
}
