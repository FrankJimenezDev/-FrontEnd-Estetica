import { ArticlesComponent } from "./HomeArticles"
import { ExpandivCards } from "./ExpandivCards"
import { HomeCatalog } from "./HomeCatalog"

export const HomePageComponent = () => {
  return (
    <>
      <ExpandivCards />
      <ArticlesComponent />
      <HomeCatalog />
    </>
  )
}
