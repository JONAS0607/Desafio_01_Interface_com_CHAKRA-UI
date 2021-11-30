import { Swiper, SwiperSlide } from 'swiper/react';
import { Img, Box, Text } from '@chakra-ui/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import SwiperCore, {
	Navigation,
	Pagination,
	Mousewheel,
	Keyboard,
} from 'swiper';
// install Swiper modules
SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);

export function Slides() {
	return (
		<Swiper
			// cssMode={true}
			navigation={true}
			pagination={true}
			mousewheel={true}
			keyboard={true}
			className='mySwiper'>
			<SwiperSlide>
				<Img src='https://images.unsplash.com/photo-1444723121867-7a241cacace9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' />
				<Box zIndex='2'>
					<Text
						fontSize='48px'
						lineHeight='72px'
						fontWeight='700'
						color='light.headings_text'>
						Europa
					</Text>
					<Text
						fontSize='24px'
						lineHeight='36px'
						fontWeight='700'
						color='light.info'>
						O continente mais antigo
					</Text>
				</Box>
			</SwiperSlide>
			<SwiperSlide>Slide 2</SwiperSlide>
			<SwiperSlide>Slide 3</SwiperSlide>
			<SwiperSlide>Slide 4</SwiperSlide>
			<SwiperSlide>Slide 5</SwiperSlide>
		</Swiper>
	);
}
