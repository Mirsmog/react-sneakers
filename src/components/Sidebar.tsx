function Sidebar() {
  return (
    <div className="overlay">
        <div className="sidebar">
          <div className="sidebar__top">
            <h2 className="sidebar__title">Корзина</h2>
          </div>
          <div className="sidebar__content">
            <ul className="sidebar-list">
              <li className="sidebar__cart-item">
                <img
                  src="/img/sneakers/1.png"
                  alt="sneaker"
                  className="cart-img"
                />
                <div className="sidebar__cart-info">
                  <div className="cart-title cart-title--bar">
                    Мужские Кроссовки Nike Air Max 270
                  </div>
                  <div className="cart-price">12 999 руб.</div>
                </div>
                <button className="cart-add-btn cart-btn"></button>
              </li>
              <li className="sidebar__cart-item">
                <img
                  src="/img/sneakers/1.png"
                  alt="sneaker"
                  className="cart-img"
                />
                <div className="sidebar__cart-info">
                  <div className="cart-title cart-title--bar">
                    Мужские Кроссовки Nike Air Max 270
                  </div>
                  <div className="cart-price">12 999 руб.</div>
                </div>
                <button className="cart-add-btn cart-btn"></button>
              </li>
            </ul>
          </div>
          <div className="sidebar__info">
            <div className="info__content-top">
              <div className="order-info">
                <div className="order-info__text">Итого: </div>
                <div className="order-info-dash"></div>
                <div className="order-info-num">21 498 руб. </div>
              </div>
              <div className="order-info mb-25">
                <div className="order-info__text">Налог 5%: </div>
                <div className="order-info-dash"></div>
                <div className="order-info-num">1074 руб. </div>
              </div>
            </div>
            <button className="prime-btn">
              Оформить заказ
            </button>
          </div>
        </div>
      </div>
  )
}

export default Sidebar