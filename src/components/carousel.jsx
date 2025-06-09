import Carousel from 'react-bootstrap/Carousel';

export default function CarouselPage() {
  return (
    <div className="w-auto h-auto" style={{ position: 'relative'}}>
      <Carousel>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src="../public/assets/carousel-first.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
        <img
            className="d-block w-100"
            src="../public/assets/mc.jpeg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <button
        className="btn btn-warning"
        style={{
          position: 'absolute',
          bottom: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 10,
        }}
        onClick={() => console.log('Ortak butona tıklandı')}
      >
        Ortak Buton
      </button>
    </div>
  );
}

