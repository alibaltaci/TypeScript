import { useEffect, useState } from "react"

export type Crypto = {
  ath: number;
  ath_change_percentage: number;
  ath_date: string;
  atl: number;
  atl_change_percentage: number;
  atl_date: string;
  circulating_supply: number;
  current_price: number;
  fully_diluted_valuation: number;
  high_24h: number;
  id: string;
  image: string;
  last_updated: string;
  low_24h: number;
  market_cap: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  market_cap_rank: number;
  max_supply: number;
  name: string;
  price_change_24h: number;
  price_change_percentage_24h: number;
  roi: number | null;
  symbol: string;
  total_supply: number;
  total_volume: number;
}

function App() {

  const [ cryptos, setCryptos ] = useState<Crypto[] | null>(null)

  useEffect( () => {
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_ap_desc&per_page=100&page=1&sparkline=false')
    .then( response => response.json() )
    .then( jsonData => setCryptos(jsonData) )
    .catch( err => console.log(err))
  
  }, [])

  return (
    <>
      {
        cryptos 
        ? cryptos.map(( crypto ) => {
            return(
              <p key={crypto.id}>{`${crypto.name} - $${crypto.current_price}`}</p>
            )
        }) 
        : null
      }
    </>
  )
}

export default App
