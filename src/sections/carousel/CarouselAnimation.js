import { useState, useRef } from 'react';
// @mui
import { useTheme } from '@mui/material/styles';
import { Card, } from '@mui/material';
// utils
// components
import Image from '../../components/image';
// import { MotionContainer, varFade } from '../../components/animate';
import Carousel, { CarouselArrowIndex } from '../../components/carousel';

// ----------------------------------------------------------------------


export default function CarouselAnimation() {
  const theme = useTheme();

  const carouselRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(0);

  const carouselSettings = {
    speed: 800,
    dots: false,
    arrows: false,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    rtl: Boolean(theme.direction === 'rtl'),
    beforeChange: (current, next) => setCurrentIndex(next),
  };

  const handlePrev = () => {
    carouselRef.current?.slickPrev();
  };

  const handleNext = () => {
    carouselRef.current?.slickNext();
  };

  return (
    <Card sx={{ height: '80vh', width: '80rem' }}>
      <Carousel ref={carouselRef} {...carouselSettings}>
        {[...Array(40)].map((item, index) => (
          <Image
          key={index} 
            alt={`Project Pictures ${index}`}
            src={index >= 33 ? `assets/images/projects/${index}.jpeg` : `assets/images/projects/${index}.jpg`}
            ratio="16/9" />
          // <CarouselItem key={index} index={index + 1} isActive={index === currentIndex} />
        ))}
      </Carousel>
      <CarouselArrowIndex
        index={currentIndex}
        total={40}
        onNext={handleNext}
        onPrevious={handlePrev}
      />
    </Card>
  );
}

// ----------------------------------------------------------------------

// CarouselItem.propTypes = {
//   index: PropTypes.number,
//   isActive: PropTypes.bool,
// };

// function CarouselItem({ isActive, index }) {
//   const theme = useTheme();

//   // const { image, title } = item;

//   return (
//     <Paper sx={{ position: 'relative' }}>
//       <Typography variant='h6' sx={{ml:2, mt:2,  }}>
//         {index}{ `assets/images/projects/${index}.jpeg`}
//       </Typography>


//       <Image
//         alt={`Project Pictures ${index}`}
//         src={index >= 33 ? `assets/images/projects/${index}.jpeg` : `assets/images/projects/${index}.jpg`}
//         ratio="16/9" />
//     ******************    {index >= 33 ? `assets/images/projects/${index}.jpeg` : `assets/images/projects/${index}.jpg`}

//       <Box
//         sx={{
//           top: 0,
//           width: 1,
//           height: 1,
//           position: 'absolute',
//           ...bgGradient({
//             direction: 'to top',
//             startColor: `${theme.palette.grey[900]} 0%`,
//             endColor: `${alpha(theme.palette.grey[900], 0)} 100%`,
//           }),
//         }}
//       />

//       {/* <CardContent
//         component={MotionContainer}
//         animate={isActive}
//         action
//         sx={{
//           bottom: 0,
//           width: 1,
//           maxWidth: 720,
//           textAlign: 'left',
//           position: 'absolute',
//           color: 'common.white',
//         }}
//       >
//         <m.div variants={varFade().inRight}>
//           <Typography variant="h3" gutterBottom>
//             {item.title}
//           </Typography>
//         </m.div>

//         <m.div variants={varFade().inRight}>
//           <Typography variant="body2" noWrap gutterBottom>
//             {item.description}
//           </Typography>
//         </m.div>

//         <m.div variants={varFade().inRight}>
//           <Button variant="contained" sx={{ mt: 3 }}>
//             View More
//           </Button>
//         </m.div>
//       </CardContent> */}
//     </Paper>
//   );
// }