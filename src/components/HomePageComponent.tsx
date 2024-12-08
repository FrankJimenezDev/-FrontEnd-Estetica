import { ArticlesComponent } from "./ArticlesComponent"
import { ExpandivCards } from "./ExpandivCards/ExpandivCards"

export const HomePageComponent = () => {
  return (
    <>
      <ExpandivCards />
      <ArticlesComponent />
      <div>Catalogo</div>
      <div>Footer</div>
    </>
  )
}
