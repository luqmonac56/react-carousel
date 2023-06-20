import { useState } from "react";
import  "../css/carousel.css";
// import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from "react-icons/bs"
const Carousel = ({ data }) => {
    const [slide, setSlide] = useState(0)

    const nextSlide = () =>{
        setSlide(slide === data.length - 1 ? 0 : slide + 1)
    }

    const prevSlide = () =>{
        setSlide(slide === 0 ? data.length -1 : slide - 1)
    }
    return ( 
        <div className="carousel relative flex justify-center items-center w-[600px] h-[400px]">
            {/* <BsArrowLeftCircleFill/> */}
            <p className="arrow arrow-left" onClick={prevSlide}>Prev</p>
            {data.map((item, id) => {
                return <img src={item.src} alt={item.alt} key={id} className={slide === id ? "slide" : "slide slide-hidden" }/>
            }) }
            {/* <BsArrowRightCircleFill/> */}
            <p className="arrow arrow-right" onClick={nextSlide}>Next</p>
            <span className="indicators">
                {data.map((_, id ) => {
                    return <button key={id} onClick={ () => setSlide(id)} className={ slide === id ? "indicator": "indicator indicator-inactive" }></button>
                })}
            </span>
        </div>
     );
}
 
export default Carousel;