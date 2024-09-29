import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import carrousel1 from '../../assets/carrousel1.png';
import carrousel2 from '../../assets/carrousel2.png';
import carrousel3 from '../../assets/carrousel3.png';
import carrousel4 from '../../assets/carrousel4.png';

export default function Prototipo() {
    return (
        <div className="mt-20  border-b border-neutral-800">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide">
                Protótipo
            </h2>
            <div className="flex justify-center">
                <div className="w-full sm:w-3/5 lg:w-1/2 mb-20">
                    <Carousel 
                        infiniteLoop 
                        useKeyboardArrows 
                        autoPlay 
                        interval={3000}
                        showThumbs={false}
                        showStatus={false}
                        className="shadow-lg rounded-lg"
                    >
                        <div>
                            <img src={carrousel1} alt="Protótipo 1" className="object-contain rounded-lg max-h-[400px]" />
                        </div>
                        <div>
                            <img src={carrousel2} alt="Protótipo 2" className="object-contain rounded-lg max-h-[400px]" />
                        </div>
                        <div>
                            <img src={carrousel3} alt="Protótipo 3" className="object-contain rounded-lg max-h-[400px]" />
                        </div>
                        <div>
                            <img src={carrousel4} alt="Protótipo 4" className="object-contain rounded-lg max-h-[400px]" />
                        </div>
                    </Carousel>
                </div>
            </div>
        </div>
    );
}
