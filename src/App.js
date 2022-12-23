

import './App.css';
import Footer from './components/GallaryFooter';
import HeaderGallery from './components/header';
import ImageDisplay from './components/images';
import imageData from './components/data';



function App() {
  return (
    <div>
      <HeaderGallery/>
     <ImageDisplay image = {imageData}/>
      <Footer/> 
    </div>
  )
}

export default App;