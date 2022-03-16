import React, { useState, useEffect } from 'react';
import '../styles/HomePage.css';
import { SearchBar } from '../components/SearchBar';
import { Card } from '../components/Card';
import InvalidSearch from '../components/InvalidSearch'
import AmericanasLogoHeader from '../assets/logos/americanas-branco.svg';
import AmericanasLogoFooter from '../assets/logos/americanas-vermelho.svg';
import CalindraLogo from '../assets/logos/calindra.svg';
import ProductService from '../services/ProductServices';

function HomePage() {
  const [products, setProducts]: any[] = useState([]);
  const [showError, setShowError] = useState(false);
  const textInput: any = React.createRef();
  const [title, setTitle] = useState("os produtos mais vendidos");

  async function getProducts(search: any) {
    try {
      const getProductsResult: any[] = await ProductService.getProducts(search ? search : "fritadeira");

      if (search) {
        setTitle(`resultados para "${search}"`);
      }

      setProducts(getProductsResult);
      setShowError(false);
    } catch (err) {
      console.log("getProducts.error: ", err);
      setShowError(true);
    }
  }

  useEffect(() => {
    getProducts('')
  }, []);

  return (
    <div className='homePage'>
      <div>
        <header>
          <a href="/" rel="noreferrer" target="_self"><img className='logo' src={AmericanasLogoHeader} alt='Logo Americanas' /></a>

          <SearchBar
            textInput={textInput}

            onKeyPress={(e: any) => {
                if (e.key === 'Enter') {
                  getProducts(e.target.value)
                }
              }
            }

            onClick={() => {
                getProducts(textInput.current.value)
              }
            }
          />
        </header>

        <main>
          {showError ? (
            <InvalidSearch />
          ) : (
            <>
              <h1>{title}</h1>
              <div className="cardList">
                {products.map((product: any) => {
                  return (
                    <Card
                      key={product.id}
                      title={product.name}
                      id={product.id}
                      score={product._meta.score.toString()}
                      rate={product._meta.score.toString()}
                      clicks={product._meta.visitsClickCount}
                    />
                  );
                })}
              </div>
            </>
          )}
        </main>
      </div>

      <footer>
        <div className='footerTop'>
          <a href="https://www.americanas.com.br/" rel="noreferrer" target="_blank"><img className='logo' src={AmericanasLogoFooter} alt='Logo Americanas' /></a>
          <p>Tudo. A toda hora. Em qualquer lugar.</p>
        </div>
        <div className='footerBottom'>
          <a href="https://calindra.tech/" rel="noreferrer" target="_blank"><img className='logo' src={CalindraLogo} alt='Logo Calindra' /></a>
          <p>Digital execution; We are Calindra.</p>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;