import React from "react";
import "../css/malvinas.css";
import bote from "../assets/img/biografia/malvinas/bote.png";
import helicoptero from "../assets/img/biografia/malvinas/helicoptero.png";
import malvinas from "../assets/img/biografia/malvinas/malvinas.png";
import malvinasTitle from "../assets/img/biografia/malvinas/malvinasTitle.png";
import soldados from "../assets/img/biografia/malvinas/soldados.png";
import soldados2 from "../assets/img/biografia/malvinas/soldados2.png";

const Malvinas = () => {
  return (
    <div>
      <div className="container">
        <div className="row fila-titulo-malvinas">
          <div className="titulo-malvinas">
            <img src={malvinasTitle} alt="titulo héroes de malvinas" />
          </div>
        </div>

        <div className="row fila-malvinas">
          <div className="col columna-malvinas">
            <div className="imagen-malvinas">
              <img
                src={soldados2}
                alt="soldados en malvinas con armas levantadas con los brazos"
              />
            </div>
          </div>
          <div className="col columna-malvinas">
            <div className="contenedor-parrafo-malvinas">
              <p className="parrafo-malvinas">
                La Guerra de las Malvinas, ocurrida entre abril y junio de 1982,
                fue un conflicto armado entre Argentina y el Reino Unido por la
                soberanía de las Islas Malvinas, Georgias del Sur y Sandwich del
                Sur. El conflicto se originó en un reclamo territorial de
                Argentina, que consideraba estas islas parte de su territorio,
                mientras que el Reino Unido las administraba desde 1833. El 2 de
                abril de 1982, tropas argentinas desembarcaron en las Malvinas,
                provocando una inmediata reacción militar del Reino Unido. Los
                enfrentamientos intensos en el Atlántico Sur incluyeron
                operaciones aéreas y navales, culminando el 14 de junio de 1982
                con la rendición argentina y la recaptura de las islas por parte
                del Reino Unido. El conflicto causó aproximadamente 649 bajas
                argentinas, 255 británicas y 3 civiles isleños, dejando secuelas
                emocionales y políticas duraderas. En Argentina, la guerra
                exacerbó tensiones políticas internas y aumentó la conciencia
                nacional sobre la soberanía territorial. En el Reino Unido, la
                victoria fortaleció el gobierno de Margaret Thatcher y consolidó
                la percepción británica de su papel global y sus intereses en el
                Atlántico Sur. La Guerra de Malvinas no solo fue un conflicto
                bélico por la posesión de territorios, sino también un evento
                que moldeó identidades nacionales, influyó en la geopolítica
                regional y dejó una huella indeleble en la memoria colectiva de
                argentinos, británicos y los habitantes de las islas.
              </p>
            </div>
          </div>
        </div>
        <div className="row fila-malvinas">
          <div className="col columna-malvinas order-md-2">
            <div className="imagen-malvinas">
              <img src={helicoptero} alt="soldados bajando de un helicóptero" />
            </div>
          </div>
          <div className="col columna-malvinas order-md-1">
            <div className="contenedor-parrafo-malvinas ">
              <p className="parrafo-malvinas">
                Los héroes de Malvinas son los soldados argentinos que lucharon
                valientemente en la Guerra de las Malvinas, enfrentando
                condiciones extremas y desafíos significativos. Muchos eran
                jóvenes reclutas, algunos apenas adolescentes, que respondieron
                al llamado de su país para defender lo que consideraban un
                derecho territorial legítimo. Su valentía y sacrificio han sido
                reconocidos tanto en Argentina como internacionalmente,
                simbolizando el espíritu de resistencia y patriotismo argentino.
                A pesar de la inferioridad militar frente al Reino Unido, estos
                soldados mostraron determinación y coraje en combates desiguales
                y adversos. Enfrentaron condiciones climáticas severas, terrenos
                difíciles y una falta de recursos adecuados para el combate,
                pero mantuvieron una firme determinación y espíritu combativo.
                Realizaron acciones individuales de gran valentía, como ataques
                a posiciones enemigas o evacuaciones de heridos bajo fuego. El
                heroísmo también se manifestó en acciones colectivas, donde
                unidades enteras demostraron valor en combate, manteniendo
                posiciones clave o realizando maniobras tácticas audaces. Estos
                actos reflejaron su compromiso con la defensa de la patria y sus
                compañeros. A pesar del resultado final de la guerra y las
                pérdidas sufridas, los héroes de Malvinas son recordados con
                honor y respeto en Argentina, sirviendo como ejemplo de
                sacrificio y dedicación. La sociedad argentina rinde homenaje a
                estos soldados, reconociendo su contribución a la historia
                militar del país y el legado de resistencia en las islas
                Malvinas.
              </p>
            </div>
          </div>
        </div>
        <div className="row fila-malvinas">
          <div className="col columna-malvinas">
            <div className="imagen-malvinas">
              <img
                src={soldados}
                alt="soldados caminando con arma en la mano"
              />
            </div>
          </div>
          <div className="col columna-malvinas">
            <div className="contenedor-parrafo-malvinas">
              <p className="parrafo-malvinas">
                Durante la Guerra de las Malvinas, Argentina sufrió
                aproximadamente 649 bajas entre muertos y desaparecidos,
                mientras que el Reino Unido reportó 255 bajas. Estas cifras
                incluyen soldados, marinos, aviadores de ambos países y civiles
                isleños. Aunque menores en comparación con otros conflictos,
                estas pérdidas dejaron una profunda marca en ambos países. Para
                Argentina, las bajas significaron un costo humano y emocional
                considerable. La pérdida de vidas jóvenes impactó profundamente
                en sus familias y comunidades. La cifra de desaparecidos generó
                un dolor prolongado y un desafío para honrar adecuadamente a los
                caídos. En el Reino Unido, cada pérdida fue sentida intensamente
                en las comunidades militares y civiles. La guerra también
                provocó reflexiones sobre el costo humano del conflicto armado y
                el papel de las fuerzas armadas en la defensa de los intereses
                nacionales. El impacto de estas bajas continúa resonando hoy,
                recordando los sacrificios durante el intenso conflicto en el
                Atlántico Sur. Para más información sobre los veteranos de
                Malvinas, puedes consultar el listado oficial en el sitio web
                del Ministerio de Defensa de Argentina en este Listado de
                Veteranos de Malvinas.
              </p>
            </div>
          </div>
        </div>
        <div className="row fila-malvinas">
          <div className="col columna-malvinas  order-md-2">
            <div className="imagen-malvinas">
              <img src={bote} alt="soldados en bote" />
            </div>
          </div>
          <div className="col columna-malvinas  order-md-1">
            <div className="contenedor-parrafo-malvinas">
              <p className="parrafo-malvinas">
                La soberanía de las Islas Malvinas sigue siendo disputada entre
                Argentina y el Reino Unido. A pesar de los esfuerzos
                diplomáticos de Argentina, las islas permanecen bajo
                administración británica, generando tensiones y debates
                políticos tanto nacionales como internacionales. Desde el fin de
                la guerra en 1982, Argentina ha mantenido su reclamo de
                soberanía sobre las Islas Malvinas, Georgias del Sur y Sandwich
                del Sur, considerándolas parte de su territorio. El Reino Unido,
                sin embargo, rechaza negociar la soberanía, citando el derecho
                de autodeterminación de los isleños, quienes prefieren seguir
                bajo administración británica. Argentina ha buscado apoyo
                internacional en foros como las Naciones Unidas y la
                Organización de Estados Americanos (OEA), promoviendo
                resoluciones para instar al diálogo con el Reino Unido. A nivel
                local, el tema de las Malvinas sigue siendo sensible y
                recurrente en la política argentina, con gobiernos sucesivos
                reafirmando su compromiso con la recuperación de la soberanía.
                La memoria de la guerra y la defensa de los derechos
                territoriales son pilares importantes en la identidad nacional
                argentina, manteniendo viva la aspiración de resolver el
                conflicto pacíficamente. La situación refleja los desafíos en
                las relaciones internacionales y la importancia de la diplomacia
                para encontrar soluciones respetuosas para ambas partes
                involucradas.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="container-parrafo-malvinas">
            <p className="parrafo-malvinas-final">
              El soldado no muere en el frente de batalla muere cuando su patria
              lo olvida
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Malvinas;
