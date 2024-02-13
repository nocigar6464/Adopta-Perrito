

function Header({ title}) {
  return (
    <>
      <header className="py-3">
        <div className="logo">
          <img src= 'https://raw.githubusercontent.com/Jochejiro/desafio1-adoptaperrito/main/src/assets/img/logo.png' alt="Imagen del logo" />
          <h1>{title}</h1>
        </div>
      </header>
    </>
  );
}

export default Header;