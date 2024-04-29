import { Nav, Hero, Services} from './components';

const App = () => {
  return ( 
    <div className='bg-black w-screen h-full flex flex-col items-center'>
      <Nav />
      <Hero />
      <Services />
    </div>
  )
}

export default App
