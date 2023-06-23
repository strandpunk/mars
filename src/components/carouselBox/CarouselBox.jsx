import classes from './carousel.module.css'
import React, { useEffect, useState } from "react";

const Carousel = (props) => {
  const { children } = props

 
  const [currentIndex, setCurrentIndex] = useState(0)
  const [length, setLength] = useState(children.length)


  useEffect(() => {
    setLength(children.length)
  }, [children])
 

  const next = () => {
    if (currentIndex < (length - 1)) {
      setCurrentIndex(prevState => prevState + 1)
    }
  }

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prevState => prevState - 1)
    }
  }
  return (
    <div className={classes.carouselContainer}>
      <div className={classes.carouselWrapper}>
        <button onClick={prev} className={classes.leftArrow}>
          &lt;
        </button>
        <div className={classes.carouselContentWrapper}>
          <div className={classes.carouselContent}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {children}
          </div>
        </div>
        <button onClick={next} className={classes.rightArrow}>
          &gt;
        </button>
      </div>
    </div>
  )
}

export default Carousel