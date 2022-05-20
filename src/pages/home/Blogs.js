import blogImg from '../../assets/image.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from "swiper";
import 'swiper/css';
import "swiper/css/navigation";



function Blogs() {

    const url = "";

    return (
        <section className="blog-section">
            <h1>Blogs</h1>
            <div className="blog-list">
                <Swiper 
                cssMode={true}
                navigation={true}
                pagination={true}
                spaceBetween={30} 
                slidesPerView={3} 
                centeredSlides={true} 
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    0: {
                      slidesPerView: 1,
                      spaceBetween: 20,
                      centeredSlides: false
                    },
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 20
                    },
                    1024: {
                      slidesPerView: 3,
                      spaceBetween: 30
                    },
                    1440: {
                      slidesPerView: 4,
                      spaceBetween: 30
                    },
                    1814: {
                      slidesPerView: 5,
                      spaceBetween: 50
                    },
                }}
                modules={[Navigation, Autoplay]}
                >
                    <SwiperSlide>
                        <article>
                        <div className="blog-item">
                            <div className="blog-item-img">
                                <img src={blogImg} alt="" />
                            </div>
                            <div className="blog-item-info">
                                <span className="blog-tag">Management</span>
                                <h2>Artistic growth is, more than it is anything else</h2>
                                <p>If the path is beautiful, let us not ask where it leads. my religion is very simple. my religion</p>
                                <div className="blog-link">
                                    <a href={url}>Read more</a>
                                    <span className="blog-date">Thursday, 26 March 2020</span>
                                </div>
                            </div>
                        </div>
                    </article>
                    </SwiperSlide>
                <SwiperSlide>
                    <article>
                    <div className="blog-item">
                        <div className="blog-item-img">
                            <img src={blogImg} alt="" />
                        </div>
                        <div className="blog-item-info">
                            <span className="blog-tag">Management</span>
                            <h2>Artistic growth is, more than it is anything else</h2>
                            <p>If the path is beautiful, let us not ask where it leads. my religion is very simple. my religion</p>
                            <div className="blog-link">
                                <a href={url}>Read more</a>
                                <span className="blog-date">Thursday, 26 March 2020</span>
                            </div>
                        </div>
                    </div>
                </article>
                </SwiperSlide>
                <SwiperSlide>
                    <article>
                    <div className="blog-item">
                        <div className="blog-item-img">
                            <img src={blogImg} alt="" />
                        </div>
                        <div className="blog-item-info">
                            <span className="blog-tag">Management</span>
                            <h2>Artistic growth is, more than it is anything else</h2>
                            <p>If the path is beautiful, let us not ask where it leads. my religion is very simple. my religion</p>
                            <div className="blog-link">
                                <a href={url}>Read more</a>
                                <span className="blog-date">Thursday, 26 March 2020</span>
                            </div>
                        </div>
                    </div>
                </article>
                </SwiperSlide>
                <SwiperSlide>
                    <article>
                    <div className="blog-item">
                        <div className="blog-item-img">
                            <img src={blogImg} alt="" />
                        </div>
                        <div className="blog-item-info">
                            <span className="blog-tag">Management</span>
                            <h2>Artistic growth is, more than it is anything else</h2>
                            <p>If the path is beautiful, let us not ask where it leads. my religion is very simple. my religion</p>
                            <div className="blog-link">
                                <a href={url}>Read more</a>
                                <span className="blog-date">Thursday, 26 March 2020</span>
                            </div>
                        </div>
                    </div>
                </article>
                </SwiperSlide>
                <SwiperSlide>
                    <article>
                    <div className="blog-item">
                        <div className="blog-item-img">
                            <img src={blogImg} alt="" />
                        </div>
                        <div className="blog-item-info">
                            <span className="blog-tag">Management</span>
                            <h2>Artistic growth is, more than it is anything else</h2>
                            <p>If the path is beautiful, let us not ask where it leads. my religion is very simple. my religion</p>
                            <div className="blog-link">
                                <a href={url}>Read more</a>
                                <span className="blog-date">Thursday, 26 March 2020</span>
                            </div>
                        </div>
                    </div>
                </article>
                </SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}

export default Blogs
