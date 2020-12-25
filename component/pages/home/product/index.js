// import './banner.scss'

import React from "react";
import Swiper from 'react-id-swiper';


export class Product extends React.Component {
    render() {

        const params = {
            spaceBetween: 30,
            ContainerEl: 'section',
            WrapperEl: 'section',
            // navigation: {
            //     nextEl: '.swiper-button-next',
            //     prevEl: '.swiper-button-prev'
            // },
            // pagination: {
            //     el: '.swiper-pagination',
            //     clickable: true
            // },
            // slidesPerView: 4,
            // lazy: true,
            rebuildOnUpdate: true,
            // centeredSlides: true,

            slidesPerView: 3,
            spaceBetween: 30,
            freeMode: true,
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },
            // renderPrevButton: () => <span className="swiper-button-prev"><img src="./static/images/icons/arrow_forward-24px.svg"></img></span>,
            // renderNextButton: () => <span className="swiper-button-next"><img src="./static/images/icons/arrow_back-24px.svg"></img></span>,
            breakpoints: {
                1200: {
                    slidesPerView: 4,
                    spaceBetween: 40
                },
                320: {
                    slidesPerView: 2,
                    spaceBetween: 15
                },
                567: {
                    slidesPerView: 2,
                    spaceBetween: 30
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 40
                },
            }
        }

        return (
            // <!-- Portfolio Section-->
            <section class="page-section portfolio" id="product">
                <div class="container-fluid">
                    {/* <!-- Portfolio Section Heading--> */}
                    <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Product</h2>
                    {/* <!-- <iframe src="./test.html"></iframe> --> */}

                    {/* <!-- Icon Divider--> */}
                    <div class="divider-custom">
                        <div class="divider-custom-line"></div>
                        <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                        <div class="divider-custom-line"></div>
                    </div>
                    {/* <!-- Portfolio Grid Items--> */}

                    <div class="row pr-5 pl-5">
                        <Swiper {...params}>
                            {['chicken', 'egg', 'duck', 'quail', 'goat'].map((data, i) => (
                                <div class="item col-md-4 ">
                                    <div class="card border-0 shadow mb-5">
                                        <img class="card-img-top" src="/img/product/chicken.png" alt="Card image cap" />
                                        <div class="card-body">
                                            <h5 class="card-title">Country Chicken</h5>
                                            <p class="card-text">Some quick example text to build on the card title and make up the
                                    bulk of the card's content.</p>
                                            {/* <!-- <a href="#" class="btn btn-primary">Go somewhere</a> --> */}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Swiper>

                    </div>










                </div>

            </section>
        )
    }
}

