import React, { useState, useEffect } from 'react';
import '../styles/HomePage.css';
import { SearchBar } from '../components/SearchBar/SearchBar';
import AmericanasLogoHeader from '../assets/logos/americanas-branco.svg';
import AmericanasLogoFooter from '../assets/logos/americanas-vermelho.svg';
import CalindraLogo from '../assets/logos/calindra.svg';
import { Card } from '../components/Card/Card';
import ProductService from '../services/ProductServices';
import { WelcomeCard } from '../components/WelcomeCard/WelcomeCard';

function HomePage() {
  const [products, setProducts]: any[] = useState([])

  async function getProducts() {
    const products: any[] = await ProductService.getProducts()
    setProducts(products)
    console.log(products)
  }

  useEffect(() => {
    getProducts()
  }, []);

  const [searchInput, setSearchInput] = useState('');

  const [filteredResults, setFilteredResults] = useState([]);

  const searchItems = (searchValue: string) => {
    setSearchInput(searchValue)
    if (searchValue !== '') {
      const filteredData = products.filter((item: any) => {
        return Object.values(item.name).join('').toLowerCase().includes(searchValue.toLowerCase())
      })
      setFilteredResults(filteredData)
    }
    else {
      setFilteredResults(products)
    }
  }

  const textInput: any = React.createRef();

  return (
    <div className='homePage'>
      <div>
        <header>
          <img className='logo' src={AmericanasLogoHeader} alt='Logo Americanas' />
          <SearchBar
            textInput={textInput}

            onKeyPress={(e: any) => {
              if (e.key === 'Enter') {
                searchItems(e.target.value)
              }
            }
            }

            onClick={() => {
              searchItems(textInput.current.value)
            }
            }

          />
        </header>

        <main>
          {filteredResults.length === 0 && searchInput.length !== 0 ? (
            <div className='invalidSearch'>
              <h1>poxa, nenhum resultado para "{searchInput}"</h1>
              <h2>Que tal pesquisar de novo seguindo as dicas abaixo? ;)</h2>
              <div id='helpList'>
                <ul>
                  <li>Confira se o termo foi digitado certinho;</li>
                  <li>Use menos palavras ou termos menos específicos;</li>
                  <li>Tente outro produto.</li>
                </ul>
              </div>
              <div className="helpOptions">
                <div className="options">
                  <h2 className="optionsText">precisa de ajuda? fala com a gente</h2>
                  <p className="optionsText">Nosso atendimento é de segunda a sexta, das 8h às 20h, e sábado, das 8h às 18h :)</p>
                </div>
                <div className="options">
                  <h2 className="optionsText">por telefone:</h2>
                  <p className="optionsText">
                    Capitais e regiões metropolitanas: 4003-4848*<br />
                    Estado do Rio de Janeiro: 0800 229 4848<br />
                    Outras regiões: 041 11 4003-4848*<br />
                  </p>
                </div>
                <div className="options">
                  <h2 className="optionsText">por e-mail:</h2>
                  <p className="optionsText">atendimento.acom@americanas.com</p>
                  <p className="optionsText">Se preferir, acesse nossas <a href='/'>perguntas frequentes</a> ;)</p>
                </div>
              </div>
            </div>
          ) : (
            searchInput.length > 0 ? (
              <>
                <h1>resultados para "{searchInput}"</h1>
                <div className='cardList'>
                  {searchInput.length >= 1 ? (
                    filteredResults.map((product: any) => {
                      return (
                        <Card
                          key={product.id}
                          title={product.name}
                          id={product.id}
                          score={product._meta.score.toString()}
                          prices={product.id}
                          clicks={product._meta.visitsClickCount}
                          times={product._meta.score.toString()[1]}
                        />
                      )
                    })
                  ) : (
                    null
                  )}
                </div>
              </>
            ) : (
              <div>
                <h1>Desafio proposto pela Calindra ;)</h1>
                <WelcomeCard />
              </div>
            )
          )}
        </main>
      </div>

      <footer>
        <div className='footerTop'>
          <img className='logo' src={AmericanasLogoFooter} alt='Logo Americanas' />
          <p>Tudo. A toda hora. Em qualquer lugar.</p>
        </div>
        <div className='footerBottom'>
          <img className='logo' src={CalindraLogo} alt='Logo Calindra' />
          <p>Digital execution; We are Calindra.</p>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
