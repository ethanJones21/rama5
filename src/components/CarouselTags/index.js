import Slider from 'react-slick';

function CarouselTags({ tags }) {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    variableWidth: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 5,
          arrows: false,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div style={{ maxWidth: '100%', overflow: 'hidden', height: '100%' }}>
      <Slider {...settings}>
        {tags.map((tag, index) => {
          return (
            <div key={index}>
              <h3>{tag}</h3>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default CarouselTags;
