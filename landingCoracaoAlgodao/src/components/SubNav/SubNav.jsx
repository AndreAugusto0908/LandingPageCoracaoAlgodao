import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function SubNav() {
  return (
    <div className="w-full h-full">
      <Carousel 
        infiniteLoop 
        useKeyboardArrows 
        autoPlay 
        interval={3000}
        showThumbs={false}
        showStatus={false}
        className="w-full"
      >
         <div className="max-h-[300px] md:max-h-[400px] lg:max-h-[500px]">
          <img src="https://s2-g1.glbimg.com/b186jw5kQ0T6H49_IIVwQ1sHkZk=/0x0:1900x1200/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2021/8/Y/CzOrzaS86L4ENIbEcAOg/campanha-agasalho-sesc-pr-drive-thru.jpg" alt="Doação de Roupas" className="object-cover w-full h-screen" />
        </div>
        <div className="max-h-[300px] md:max-h-[400px] lg:max-h-[500px]">
          <img src="https://diariodocomercio.com.br/wp-content/uploads/2024/06/agasalhos-para-doacao.jpg" alt="Imagem 1" className="object-cover w-full h-screen" />
        </div>
      </Carousel>
    </div>
  );
}
