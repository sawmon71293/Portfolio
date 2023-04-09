import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';
import './testimonials.css';
import AVTR1 from '../../assets/myAvatar1.png';
import AVTR2 from '../../assets/myAvatar2.png';

// core version + navigation, pagination modules:
// import Swiper and modules styles

const data = [
  {
    id: 1,
    avatar: AVTR1,
    name: 'Ahkar Toe Maw',
    review:
      'I am delighted to recommend my study partner, Saw Mon, for any academic or professional opportunity that she may pursue. As someone who has had the privilege of working closely with her, I can attest to her exceptional work ethic and self-motivated attitude, both of which contribute greatly to her sucess. I have no doubt that Saw Mon will continue to excel in her academic and professional endeavors. If you have the opportunity to work with her consider yourself fortunate, as her dedication and drive are truly unparalleled',
  },
  {
    id: 2,
    avatar: AVTR2,
    name: 'Phone Khaing Hein',
    review:
      'I am writing to recommend Saw Mon Han for any software development positions available at your organization. As a software developer, I have had the pleasure of working with Saw Mon on many projects and can confidently say that she is a talented developer. Saw Mon is highly proficient in various programming languages and frameworks and has a strong understanding of software development principles and best practices. She is always eager to learn new technologies and can quickly adapt to new challenges. She also has the patience to explain to others.',
  },
  {
    id: 3,
    avatar: AVTR1,
    name: 'Anita',
    review:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque itaque, fugit laborum obcaecati soluta corporis reiciendis dolor autem et asperiores aperiam ducimus consequatur numquam tenetur nesciunt ipsa sint dolores assumenda.',
  },
  {
    id: 4,
    avatar: AVTR1,
    name: 'Vangelis',
    review:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque itaque, fugit laborum obcaecati soluta corporis reiciendis dolor autem et asperiores aperiam ducimus consequatur numquam tenetur nesciunt ipsa sint dolores assumenda.',
  },
  {
    id: 5,
    avatar: AVTR1,
    name: 'Firdavs',
    review:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque itaque, fugit laborum obcaecati soluta corporis reiciendis dolor autem et asperiores aperiam ducimus consequatur numquam tenetur nesciunt ipsa sint dolores assumenda.',
  },
];
const Testimonials = () => (
  <section id="testimonials">
    <h5>Review from colleagues</h5>
    <h2>Testimonials</h2>
    <Swiper
      className="container testimonials__container"
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
    >
      {data.map(({
        avatar, name, review, id,
      }) => (
        <SwiperSlide
          key={id}
          className="testimonial"
        >
          <div className="colleague__avatar">
            <img
              src={avatar}
              alt="Avatar one"
            />
          </div>
          <h5 className="colleague__name">{name}</h5>
          <small className="colleague__review">{review}</small>
        </SwiperSlide>
      ))}
    </Swiper>
  </section>
);

export default Testimonials;
