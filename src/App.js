import React, { Component } from "react";
import "./App.css";

//  Una CLASS sirve para una especie de template
// a partir de la cual se pueden crear objetos

//Components
import Header from "./components/Header/Header";
import CardUser from "./components/CardUser/CardUser";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainter/ItemListContainer";
import Footer from "./components/Footer/Footer";
import TitlebarBelowImageList from "./components/TitlebarBelowImageList/TitlebarBelowImageList";

// Class => tener state y ciclos de vida
// Funcionales => solo retornaban JSX (dummy, staless, funcionales) porque no tenían mayor lógica, estados
class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <Header />
          <NavBar />
        </div>

        <div className="agrupacion">
          <div className="UserSection">
            <CardUser
              name="Kevin Wayne Durant"
              date="Se unio en Enero 2021"
              description="Nombrado MVP de la liga y ha sido seleccionado múltiples veces para el All-Star Game"
              img="https://phantom-marca-us.unidadeditorial.es/0a16a2ef3212c19388cbefb12fcc584d/resize/660/f/webp/assets/multimedia/imagenes/2023/04/29/16827229516753.jpg"
            />
          </div>
          <div className="UserSection">
            <CardUser
              name="Kyrie Irving"
              date="14 de marzo de 1988"
              description="El 14 de diciembre ante New York Knicks, supera la cifra de 2974 triples de Ray Allen y se convierte en el jugador con mayor número de triples anotados en la historia de la NBA."
              img="https://i.pinimg.com/564x/bb/c1/16/bbc116f3dafc39008c8943641d860c2a.jpg"
            />
          </div>
          <div className="UserSection">
            <CardUser
              name="Nikola Jokić"
              date="19 de febrero de 1995"
              description="Igualando la marca de Wilt Chamberlain, y colocándose como el quinto jugador de la historia con más registros en esta categoría."
              img="https://upload.wikimedia.org/wikipedia/commons/7/7e/Nikola_Jokic_free_throw_%28cropped%29.jpg"
            />
          </div>
        </div>
        <div className="agrupacion">
          <div className="UserSection">
            <CardUser
              name="James Harden"
              date="Se unio en Enero 2021"
              description="Nombrado MVP de la liga y ha sido seleccionado múltiples veces para el All-Star Game"
              img="https://i.guim.co.uk/img/media/395a1d4bc5870b755b7d60e2471c710ad0c952aa/0_183_4315_2589/master/4315.jpg?width=1300&quality=85&dpr=1&s=none"
            />
          </div>
          <div className="UserSection">
            <CardUser
              name="Stephen Curry"
              date="14 de marzo de 1988"
              description="El 14 de diciembre ante New York Knicks, supera la cifra de 2974 triples de Ray Allen y se convierte en el jugador con mayor número de triples anotados en la historia de la NBA."
              img="https://s3.sa-east-1.amazonaws.com/titulares.ar/wp-content/uploads/2023/04/30201023/ab2a93cd-f611-4884-918d-48ee58ad11f4-new-curry.jpg"
            />
          </div>
          <div className="UserSection">
            <CardUser
              name="Giannis Antetokounmpo"
              date="19 de febrero de 1995"
              description="Igualando la marca de Wilt Chamberlain, y colocándose como el quinto jugador de la historia con más registros en esta categoría."
              img="https://caracoltv.brightspotcdn.com/dims4/default/45423e3/2147483647/strip/true/crop/1000x486+0+0/resize/1440x700!/format/webp/quality/90/?url=http%3A%2F%2Fcaracol-brightspot.s3.amazonaws.com%2Fe7%2F54%2F295ee2b6429db958aaa4018ee8df%2Fgiannis-antetokounmpo-nba.jpg"
            />
          </div>
        </div>

        <div>
          <ItemListContainer greeting="Buen fin de semana a todos!" />
        </div>
        <div>
          <TitlebarBelowImageList />
        </div>

        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
