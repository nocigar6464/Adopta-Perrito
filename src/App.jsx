import 'bootstrap/dist/css/bootstrap.min.css'; //
import './App.css';
import MyCard from './components/mycard';
import Header from './components/header';
import Footer from './components/footer';


function App() {
  const title = "Adopta un perrito";

  const perritos = [
    {
  id: 1,
  image:"https://placedog.net/samples/3.jpg",
  title:"Pancho",
  raza:"Golden Retriever",
  colorButton:"success",
  textButton:"Adoptar",
  description:"¡Dale amor a tu hogar! Adopta a un Golden Retriever: compañero leal, lleno de alegría. Juntos, crearán recuerdos inolvidables. 🐾❤️ #AdoptaUnGolden "
    },

    {
      id: 2,
      image:"https://placedog.net/1000/563?id=5",
      title:"Loki",
      raza:"Lobo Siberiano",
      colorButton:"success",
      textButton:"Adoptar",
      description:"¡Atrévete a la aventura con un lobo siberiano! Majestuoso, independiente y siempre listo para explorar contigo. Adopta un compañero salvaje con amor y compromiso. 🐺❤️ #AdoptaUnLoboSiberiano"
        },


    {
      id: 3,
      image:"https://placedog.net/1000/563?id=56",  
      raza:"Pug",
      title:"Patacon",
      colorButton:"success",
      textButton:"Adoptar",
      description:"¡Enciende la felicidad en casa con un Pug! Pequeño, juguetón y lleno de personalidad. Adopta a este compañero arrugado y descubre la alegría en cada ronquido. 🐾❤️ #AdoptaUnPug"
        },

        {
          id: 4,
          image:"https://placedog.net/1000/563?id=69",
          title:"Manchas",
          raza: "Dalmata",
          colorButton:"success",
          textButton:"Adoptar",
          description:"¡Dale un giro elegante a tu vida adoptando un Dálmata! Con su pelaje único y personalidad enérgica, este compañero leal hará que cada día sea una experiencia llena de diversión y amor. 🐾❤️ #AdoptaUnDálmata"
            },

            {
              id: 5,
              image:"https://placedog.net/1000/563?id=82",
              title:"Paco",
              raza: "Lobo Siberiano",
              colorButton:"success",
              textButton:"Adoptar",
              description:"¡Haz espacio en tu corazón para aullar de amor con un lobo siberiano! Adopta hoy y comparte la magia de la naturaleza salvaje en casa. 🐺❤️"
                },

                {
                  id: 6,
                  image:"https://placedog.net/1000/563?id=123",
                  title:"Spot",
                  raza: "Dalmata",
                  colorButton:"success",
                  textButton:"Adoptar",
                  description:"¡Dale un giro elegante a tu vida adoptando un Dálmata! Con su pelaje único y personalidad enérgica, este compañero leal hará que cada día sea una experiencia llena de diversión y amor. 🐾❤️ #AdoptaUnDálmata"
                    },

                    {
                      id: 7,
                      image:"https://www.eltiempo.com/files/article_main_1200/uploads/2021/11/11/618da2f0f2822.jpeg",
                      title:"Chucho",
                      raza: "Pug",
                      colorButton:"success",
                      textButton:"Adoptar",
                      description:"La felicidad en forma de pequeñas patas y hocico arrugado. Adopta un pug y llena tu hogar de amor perruno. 🏡🐶"
                        },

                        {
                          id: 8,
                          image:"https://tucachorrotienda.com/wp-content/uploads/2023/09/81.jpg",
                          title:"Leon",
                          raza: "Golden Retriever",
                          colorButton:"success",
                          textButton:"Adoptar",
                          description:"Transforma tu vida con la amistad fiel y el cariño infinito de un Golden Retriever. ¡Adopta y descubre el regalo de tener a un amigo dorado! 🌈🐶"
                            },
            
  ]


  return (
    <>
      <Header title="Adopta un Perrito" />

      <main className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
        {perritos.map((perritos) => (
          <MyCard
            key={perritos.id}
            image={perritos.image}
            title={perritos.title}
            description={perritos.description}
            raza={perritos.raza}
            colorButton={perritos.colorButton}
            textButton={perritos.textButton}
          />
        ))}
      </main>

      <Footer />
    </>
  );
}
export default App;


