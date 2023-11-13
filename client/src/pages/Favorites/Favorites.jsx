// import { Container } from "postcss"
import Button from '../../../components/Button'
import { ClassNames } from '../../../components/ClassNames'
import Container from '../../../components/Container'
import OrderCard from '../Settings/Profile/OrderCard'
import FavoritesCard from './FavoritesCard'
function Favorites() {
  return (
    <div style={{ backgroundColor: '#e8e8e8', width: '100vw', height: '100vh' }}>
      <Container className={`${ClassNames[0].placeCenter}`}>
        <Container style={{ height: '600px', overflow: 'auto' }} className="my-5 w-4/12 bg-white p-8">
          <h1 className={`${ClassNames[0].heading} mb-8 sm:text-2xl lg:text-4xl`}>My favorites</h1>

          <FavoritesCard stallName="Burp" location="Bunzel" />
          <FavoritesCard stallName="Leylam Shawarma" location="Bunzel" />
          <FavoritesCard stallName="Pappi's" location="Bunzel" />
          <FavoritesCard stallName="Burp" location="Bunzel" />
          <FavoritesCard stallName="Leylam Shawarma" location="Bunzel" />
          <FavoritesCard stallName="Pappi's" location="Bunzel" />

          <h3 className="w-full border-slate-500 p-2 text-center text-2xl text-subtext">You have no favorites yet.</h3>
        </Container>
      </Container>
    </div>
  )
}

export default Favorites
