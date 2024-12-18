import image from "../../assets/aboutUsImage.jpg"

export const AboutPage = () => {
  return (
    <section className="mt-[60px]">
      <div className="flex">
        <img className="h-full w-[50%]" src={image} alt="" />
        <div className="w-[50%]">
          <h1 className="text-center">About Us</h1>
          <p className="text-justify m-10">La historia de la estética es una disciplina de las ciencias sociales que estudia la evolución de las ideas estéticas a lo largo del tiempo.1​ La estética es la rama de la filosofía que se encarga de estudiar la manera en que el ser humano interpreta los estímulos sensoriales que recibe del mundo circundante, dando lugar al conocimiento sensible, adquirido a través de los sentidos.nota 1​ Entre los diversos objetos de estudio de la estética figuran la belleza o los juicios de gusto, así como las distintas maneras de interpretarlos por parte del ser humano. Por tanto, la estética está íntimamente ligada al arte y al estudio de la historia del arte, analizando los diversos estilos y periodos artísticos conforme a los diversos componentes estéticos que en ellos se encuentran. A menudo se suele denominar la estética como una «filosofía del arte».nota 2

            El término estética proviene del griego αἴσθησις (aísthêsis), «sensación». Fue introducido por el filósofo alemán Alexander Gottlieb Baumgarten en su obra Reflexiones filosóficas acerca de la poesía (1735), y más tarde en su Aesthetica (1750).2​ Así pues, la historia de la estética, rigurosamente hablando, comenzaría con Baumgarten en el siglo XVIII, sobre todo con la sistematización de esta disciplina realizada por Immanuel Kant. Sin embargo, el concepto es aplicable a los estudios sobre el tema efectuados por los filósofos anteriores, especialmente desde la Grecia clásica. Cabe señalar, por ejemplo, que los antiguos griegos tenían un vocablo equiparable al actual concepto de estética, que era φιλοκαλία (filocalía), «amor a la belleza».nota 3​ Se podría decir que en Grecia nació la estética como concepto, mientras que con Baumgarten se convirtió en una rama de la filosofía.nota 4

            La estética es una reflexión filosófica que se hace sobre objetos artísticos y naturales, y que produce un «juicio estético».</p>
        </div>
      </div>
    </section>
  )
}
