import "./assets/styles/style.scss";
import Card from "./components/Card";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Slider from "./components/Slider";

function App() {
  return (
    <div className="wrapper">
      <Header/>
      <Sidebar/>
      <main>
      <Slider/>
        <section className="carts">
          <div className="carts__inner">
            <div className="container">
              <div className="carts__top">
                <h2 className="title">Все кроссовки</h2>
                <div className="search">
                  <input
                    className="search-inp"
                    type="text"
                    placeholder="Поиск..."
                  />
                </div>
              </div>
              <ul className="carts-list">
                <Card/>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;