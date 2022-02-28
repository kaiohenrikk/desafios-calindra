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

  const searchItems = (searchValue: string) => {
    
    setSearchInput(searchValue)
    if (searchInput !== '') {
      const filteredData = products.filter((item: string) => {
        return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
      })
      setFilteredResults(filteredData)
    }
    else {
      setFilteredResults(products)
    }
  }

  const [filteredResults, setFilteredResults] = useState([]);

  const textInput: any = React.createRef();

  return (
    <div className='homePage'>
      <div>
        <header>
          <img className='logo' src={AmericanasLogoHeader} alt='Logo Americanas' />
          <SearchBar  
            textInput = {textInput} 

            onKeyPress = {(e: any) => {
              if (e.key === 'Enter') {
                searchItems(e.target.value) 
              }
            }
          }

            onClick = {() => {
              searchItems(textInput.current.value)
              }              
            }

          />
        </header>

        <main>
          <div className="headline">
            {searchInput.length > 0 ? (
              <h1>os itens mais vendidos :)</h1>
            ) : (<h1>Desafio proposto pela Calindra ;)</h1>)}
          </div>


          <div className='cardList'>
            {searchInput.length >= 2 ? (
              filteredResults.map((product: any) => {
                return (
                  <Card 
                    title={product.name} 
                    id={product.id} 
                    prices={product.id} 
                    clicks={product._meta.visitsClickCount}
                    times={product._meta.score.toString()[1]}
                  />
                )
              })
            ) : (
              <WelcomeCard />
            )}
          </div>

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
