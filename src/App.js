import './App.css';
import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

import image1 from './images/1.jpg'
import image2 from './images/2.jpg'
import image3 from './images/3.jpg'
import image4 from './images/4.jpg'
import image5 from './images/5.jpg'
import image6 from './images/6.jpg'
import image7 from './images/7.jpg'
import image8 from './images/8.jpg'
import image9 from './images/9.jpg'
import image10 from './images/10.jpg'

const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10]




function App() {
  const carousel = useRef();
  const [width, setWidth] = useState(0)

  useEffect(() => {
    console.log(carousel.current?.scrollWidth, carousel.current?.offseWidth);
    setWidth(carousel.current?.scrollWidth - carousel.current?.offseWidth)
  }, [])
  return (
    <div className="App">
      <motion.div ref={carousel} className='carousel' whileTap={{ cursor: "grabbing" }}>

        <motion.div
          className='interna'
          drag="x"
          dragConstraints={{ right: 0, left: - 2000 }}
          initial={{ x: 100 }}
          animate ={{x:0}}
          transition ={{duration: 0.8}}
        >

        {images.map(images => (
          <motion.div className="item" key={images}>
            <img src={images} alt="Texto alt" />

          </motion.div>
        ))}
      </motion.div>
    </motion.div>

    </div >);

}

export default App;
