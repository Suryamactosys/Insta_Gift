import React from 'react';

const Shop = () => {
    return (
        <div>
            <div class="container">
                <div class="sp_shop_wrapper sp_margin aos-init aos-animate" id="business_wrapper" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                    <div class="sp_shop_search_bar">
                        <div class="row">
                            <div class="col-sm-6 d-flex align-items-center">
                                <div>
                                    <p>Shop</p>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <input className='w-100' type="search" name="search" placeholder='Search a shops' />
                            </div>
                            {/* <div class="col-sm-6">
                                <div class="sp_searchBar">
                                    <form class="d-flex" role="search" style={{ paddingTop: '10px' }}>
                                        <input class="form-control me-2" type="search" placeholder="Search a Shopes" aria-label="Search" />
                                        <button type="submit"><i class="bi bi-search"></i>
                                        </button>
                                    </form>
                                </div>
                            </div> */}
                        </div>
                    </div>
                    <div class="sp_category_wrapper">
                        <div class="row">
                            <div class="col-sm-6">
                                <p class="mt-4 mb-4 ms-2 text-uppercase">categories</p>
                            </div>
                            <div class="col-sm-6">
                                <div class="sp_seeAll mt-4">
                                    <div class="swiper-button-next swiper-button-lock" tabindex="0" role="button" aria-label="Next slide" aria-controls="swiper-wrapper-9f3a7884a578b91d"></div>
                                    <div class="swiper-button-prev swiper-button-lock" tabindex="0" role="button" aria-label="Previous slide" aria-controls="swiper-wrapper-9f3a7884a578b91d"></div>
                                    <p class="text-end m-0"><a href="/">See all</a></p>
                                </div>
                            </div>
                        </div>
                        <div class="swiper sp_prodcut_swiper nav nav-pills mb-3 swiper-initialized swiper-horizontal swiper-backface-hidden" id="pills-tab" role="tablist">
                            <div class="swiper-wrapper" id="swiper-wrapper-9f3a7884a578b91d" aria-live="off" style={{ transitionDuration: "0ms", transform: ("0px", "0px", "0px") }}>
                                <div class="swiper-slide nav-item swiper-slide-active" role="group" aria-label="1 / 6" data-swiper-slide-index="0" style={{ width: '186px' }}>
                                    <div class="nav-link" id="pills-clothe-tab" data-bs-toggle="pill" data-bs-target="#pills-clothe" role="tab" aria-controls="pills-clothe" aria-selected="false" tabindex="-1">
                                        <div class="sp_cate_boxes">
                                            <img src="https://instagift.mactosys.com/public/assets/images/clothes-icon.svg" alt="" />
                                            <h3>clothes</h3>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide nav-item swiper-slide-next" role="group" aria-label="2 / 6" data-swiper-slide-index="1" style={{ width: '186px' }}>
                                    <div class="nav-link" id="pills-rest-tab" data-bs-toggle="pill" data-bs-target="#pills-rest" role="tab" aria-controls="pills-rest" aria-selected="false" tabindex="-1">
                                        <div class="sp_cate_boxes">
                                            <img src="https://instagift.mactosys.com/public/assets/images/restaurent-icon.svg" alt="" />
                                            <h3>restaurants</h3>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide nav-item" role="group" aria-label="3 / 6" data-swiper-slide-index="2" style={{ width: '186px' }}>
                                    <div class="nav-link" id="pills-aceesories-tab" data-bs-toggle="pill" data-bs-target="#pills-aceesories" role="tab" aria-controls="pills-aceesories" aria-selected="false" tabindex="-1">
                                        <div class="sp_cate_boxes">
                                            <img src="https://instagift.mactosys.com/public/assets/images/accessory-icon.svg" alt="" />
                                            <h3>Accessories</h3>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide nav-item" role="group" aria-label="4 / 6" data-swiper-slide-index="3" style={{ width: '186px' }}>
                                    <div class="nav-link active" id="pills-footwear-tab" data-bs-toggle="pill" data-bs-target="#pills-footwear" role="tab" aria-controls="pills-footwear" aria-selected="true">
                                        <div class="sp_cate_boxes">
                                            <img src="https://instagift.mactosys.com/public/assets/images/footwear-icon.svg" alt="" />
                                            <h3>FOOTWEAR</h3>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide nav-item" role="group" aria-label="5 / 6" data-swiper-slide-index="4" style={{ width: '186px' }}>
                                    <div class="nav-link" id="pills-beauty-tab" data-bs-toggle="pill" data-bs-target="#pills-beauty" role="tab" aria-controls="pills-beauty" aria-selected="false" tabindex="-1">
                                        <div class="sp_cate_boxes">
                                            <img src="https://instagift.mactosys.com/public/assets/images/cosmetic.svg" alt="" />
                                            <h3>BEAUTY</h3>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide nav-item" role="group" aria-label="6 / 6" data-swiper-slide-index="5" style={{ width: '186px' }}>
                                    <div class="nav-link" id="pills-jwellery-tab" data-bs-toggle="pill" data-bs-target="#pills-jwellery" role="tab" aria-controls="pills-jwellery" aria-selected="false" tabindex="-1">
                                        <div class="sp_cate_boxes">
                                            <img src="https://instagift.mactosys.com/public/assets/images/jwellery.svg" alt="" />
                                            <h3>JEWELLERY</h3>
                                        </div>
                                    </div>
                                </div>
                                {/* <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                    <li class="nav-item" role="presentation">
                                        <div class="swiper-slide">
                                            <div class="nav-link active" id="pills-clothe-tab" data-bs-toggle="pill" data-bs-target="#pills-clothe" role="tab" aria-controls="pills-clothe" aria-selected="true">
                                                <div class="sp_cate_boxes">
                                                    <img src="https://instagift.mactosys.com/public/assets/images/clothes-icon.svg" alt="image">
                                                        <h3>clothes</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <div class="swiper-slide">
                                            <div class="nav-link" id="pills-rest-tab" data-bs-toggle="pill" data-bs-target="#pills-rest" role="tab" aria-controls="pills-rest" aria-selected="false">
                                                <div class="sp_cate_boxes">
                                                    <img src="https://instagift.mactosys.com/public/assets/images/restaurent-icon.svg" alt="image">
                                                        <h3>restaurants</h3>
                                                </div>
                                            </div>
                                        </div>

                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <div class="swiper-slide">
                                            <div class="nav-link" id="pills-aceesories-tab" data-bs-toggle="pill" data-bs-target="#pills-aceesories" role="tab" aria-controls="pills-aceesories" aria-selected="false">
                                                <div class="sp_cate_boxes">
                                                    <img src="https://instagift.mactosys.com/public/assets/images/accessory-icon.svg" alt="image">
                                                        <h3>Accessories</h3>
                                                </div>
                                            </div>
                                        </div>

                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <div class="swiper-slide">
                                            <div class="nav-link" id="pills-footwear-tab" data-bs-toggle="pill" data-bs-target="#pills-footwear" role="tab" aria-controls="pills-footwear" aria-selected="false">
                                                <div class="sp_cate_boxes">
                                                    <img src="https://instagift.mactosys.com/public/assets/images/footwear-icon.svg" alt="image">
                                                        <h3>FOOTWEAR</h3>
                                                </div>
                                            </div>
                                        </div>

                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <div class="swiper-slide">
                                            <div class="nav-link" id="pills-beauty-tab" data-bs-toggle="pill" data-bs-target="#pills-beauty" role="tab" aria-controls="pills-beauty" aria-selected="false">
                                                <div class="sp_cate_boxes">
                                                    <img src="https://instagift.mactosys.com/public/assets/images/cosmetic.svg" alt="image">
                                                        <h3>BEAUTY</h3>
                                                </div>
                                            </div>
                                        </div>

                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <div class="swiper-slide">
                                            <div class="nav-link" id="pills-jwellery-tab" data-bs-toggle="pill" data-bs-target="#pills-jwellery" role="tab" aria-controls="pills-jwellery" aria-selected="false">
                                                <div class="sp_cate_boxes">
                                                    <img src="https://instagift.mactosys.com/public/assets/images/jwellery.svg" alt="image">
                                                        <h3>JEWELLERY</h3>
                                                </div>
                                            </div>
                                        </div>

                                    </li>
                                </ul> */}
                            </div>
                            <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
                        <div class="tab-content" id="pills-tabContent">
                            <div class="tab-pane fade" id="pills-clothe" role="tabpanel" aria-labelledby="pills-clothe-tab" tabindex="0">
                                <div class="sp_categroy_list">
                                    <div class="row gy-4">
                                        <div class="col-sm-4">
                                            <div class="sp_category_prodcut">
                                                <img src="https://instagift.mactosys.com/public/assets/images/shop1.png" alt="" />
                                                <div class="sp_prodcut_content">
                                                    <h2>Chanel</h2>
                                                    <p>Formal, Semi-formal, Casual, and
                                                        Fashion garments
                                                    </p>
                                                    <h3><i class="bi bi-geo-alt-fill me-2"></i>
                                                        Formal, Semi-formal, Casual, and
                                                        Fashion garments
                                                    </h3>
                                                    <div class="d-flex justify-content-center">
                                                        <a href="/" class="sp_btn">Booking now</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-4">
                                            <div class="sp_category_prodcut">
                                                <img src="https://instagift.mactosys.com/public/assets/images/shop2.png" alt="" />
                                                <div class="sp_prodcut_content">
                                                    <h2>Chanel</h2>
                                                    <p>Formal, Semi-formal, Casual, and
                                                        Fashion garments
                                                    </p>
                                                    <h3><i class="bi bi-geo-alt-fill me-2"></i>
                                                        Formal, Semi-formal, Casual, and
                                                        Fashion garments
                                                    </h3>
                                                    <div class="d-flex justify-content-center">
                                                        <a href="/" class="sp_btn">Booking now</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-4">
                                            <div class="sp_category_prodcut">
                                                <img src="https://instagift.mactosys.com/public/assets/images/shop3.png" alt="" />
                                                <div class="sp_prodcut_content">
                                                    <h2>Chanel</h2>
                                                    <p>Formal, Semi-formal, Casual, and
                                                        Fashion garments
                                                    </p>
                                                    <h3><i class="bi bi-geo-alt-fill me-2"></i>
                                                        Formal, Semi-formal, Casual, and
                                                        Fashion garments
                                                    </h3>
                                                    <div class="d-flex justify-content-center">
                                                        <a href="/" class="sp_btn">Booking now</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="pills-rest" role="tabpanel" aria-labelledby="pills-rest-tab" tabindex="0">
                                <div class="sp_categroy_list">
                                    <div class="row gy-4">
                                        <div class="col-sm-4">
                                            <div class="sp_category_prodcut">
                                                <img src="https://instagift.mactosys.com/public/assets/images/shop6.png" alt="" />
                                                <div class="sp_prodcut_content">
                                                    <h2>Chanel</h2>
                                                    <p>Formal, Semi-formal, Casual, and
                                                        Fashion garments
                                                    </p>
                                                    <h3><i class="bi bi-geo-alt-fill me-2"></i>
                                                        Formal, Semi-formal, Casual, and
                                                        Fashion garments
                                                    </h3>
                                                    <div class="d-flex justify-content-center">
                                                        <a href="/" class="sp_btn">Booking now</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-4">
                                            <div class="sp_category_prodcut">
                                                <img src="https://instagift.mactosys.com/public/assets/images/shop1.png" alt="" />
                                                <div class="sp_prodcut_content">
                                                    <h2>Chanel</h2>
                                                    <p>Formal, Semi-formal, Casual, and
                                                        Fashion garments
                                                    </p>
                                                    <h3><i class="bi bi-geo-alt-fill me-2"></i>
                                                        Formal, Semi-formal, Casual, and
                                                        Fashion garments
                                                    </h3>
                                                    <div class="d-flex justify-content-center">
                                                        <a href="/" class="sp_btn">Booking now</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-4">
                                            <div class="sp_category_prodcut">
                                                <img src="https://instagift.mactosys.com/public/assets/images/shop1.png" alt="" />
                                                <div class="sp_prodcut_content">
                                                    <h2>Chanel</h2>
                                                    <p>Formal, Semi-formal, Casual, and
                                                        Fashion garments
                                                    </p>
                                                    <h3><i class="bi bi-geo-alt-fill me-2"></i>
                                                        Formal, Semi-formal, Casual, and
                                                        Fashion garments
                                                    </h3>
                                                    <div class="d-flex justify-content-center">
                                                        <a href="/" class="sp_btn">Booking now</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-4">
                                            <div class="sp_category_prodcut">
                                                <img src="https://instagift.mactosys.com/public/assets/images/shop1.png" alt="" />
                                                <div class="sp_prodcut_content">
                                                    <h2>Chanel</h2>
                                                    <p>Formal, Semi-formal, Casual, and
                                                        Fashion garments
                                                    </p>
                                                    <h3><i class="bi bi-geo-alt-fill me-2"></i>
                                                        Formal, Semi-formal, Casual, and
                                                        Fashion garments
                                                    </h3>
                                                    <div class="d-flex justify-content-center">
                                                        <a href="/" class="sp_btn">Booking now</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-4">
                                            <div class="sp_category_prodcut">
                                                <img src="https://instagift.mactosys.com/public/assets/images/shop1.png" alt="" />
                                                <div class="sp_prodcut_content">
                                                    <h2>Chanel</h2>
                                                    <p>Formal, Semi-formal, Casual, and
                                                        Fashion garments
                                                    </p>
                                                    <h3><i class="bi bi-geo-alt-fill me-2"></i>
                                                        Formal, Semi-formal, Casual, and
                                                        Fashion garments
                                                    </h3>
                                                    <div class="d-flex justify-content-center">
                                                        <a href="/" class="sp_btn">Booking now</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="pills-aceesories" role="tabpanel" aria-labelledby="pills-aceesories-tab" tabindex="0">
                                <div class="sp_categroy_list">
                                    <div class="row">
                                        <div class="col-sm-4">
                                            <div class="sp_category_prodcut">
                                                <img src="https://instagift.mactosys.com/public/assets/images/shop1.png" alt="" />
                                                <div class="sp_prodcut_content">
                                                    <h2>Chanel</h2>
                                                    <p>Formal, Semi-formal, Casual, and
                                                        Fashion garments
                                                    </p>
                                                    <h3><i class="bi bi-geo-alt-fill me-2"></i>
                                                        Formal, Semi-formal, Casual, and
                                                        Fashion garments
                                                    </h3>
                                                    <div class="d-flex justify-content-center">
                                                        <a href="/" class="sp_btn">Booking now</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-4">
                                            <div class="sp_category_prodcut">
                                                <img src="https://instagift.mactosys.com/public/assets/images/shop1.png" alt="" />
                                                <div class="sp_prodcut_content">
                                                    <h2>Chanel</h2>
                                                    <p>Formal, Semi-formal, Casual, and
                                                        Fashion garments
                                                    </p>
                                                    <h3><i class="bi bi-geo-alt-fill me-2"></i>
                                                        Formal, Semi-formal, Casual, and
                                                        Fashion garments
                                                    </h3>
                                                    <div class="d-flex justify-content-center">
                                                        <a href="/" class="sp_btn">Booking now</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-4">
                                            <div class="sp_category_prodcut">
                                                <img src="https://instagift.mactosys.com/public/assets/images/shop1.png" alt="" />
                                                <div class="sp_prodcut_content">
                                                    <h2>Chanel</h2>
                                                    <p>Formal, Semi-formal, Casual, and
                                                        Fashion garments
                                                    </p>
                                                    <h3><i class="bi bi-geo-alt-fill me-2"></i>
                                                        Formal, Semi-formal, Casual, and
                                                        Fashion garments
                                                    </h3>
                                                    <div class="d-flex justify-content-center">
                                                        <a href="/" class="sp_btn">Booking now</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade active show" id="pills-footwear" role="tabpanel" aria-labelledby="pills-footwear-tab" tabindex="0">
                                <div class="sp_categroy_list">
                                    <div class="row">
                                        <div class="col-sm-4">
                                            <div class="sp_category_prodcut">
                                                <img src="https://instagift.mactosys.com/public/assets/images/shop1.png" alt="" />
                                                <div class="sp_prodcut_content">
                                                    <h2>Chanel</h2>
                                                    <p>Formal, Semi-formal, Casual, and
                                                        Fashion garments
                                                    </p>
                                                    <h3><i class="bi bi-geo-alt-fill me-2"></i>
                                                        Formal, Semi-formal, Casual, and
                                                        Fashion garments
                                                    </h3>
                                                    <div class="d-flex justify-content-center">
                                                        <a href="/" class="sp_btn">Booking now</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-4">
                                            <div class="sp_category_prodcut">
                                                <img src="https://instagift.mactosys.com/public/assets/images/shop1.png" alt="" />
                                                <div class="sp_prodcut_content">
                                                    <h2>Chanel</h2>
                                                    <p>Formal, Semi-formal, Casual, and
                                                        Fashion garments
                                                    </p>
                                                    <h3><i class="bi bi-geo-alt-fill me-2"></i>
                                                        Formal, Semi-formal, Casual, and
                                                        Fashion garments
                                                    </h3>
                                                    <div class="d-flex justify-content-center">
                                                        <a href="/" class="sp_btn">Booking now</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-4">
                                            <div class="sp_category_prodcut">
                                                <img src="https://instagift.mactosys.com/public/assets/images/shop1.png" alt="" />
                                                <div class="sp_prodcut_content">
                                                    <h2>Chanel</h2>
                                                    <p>Formal, Semi-formal, Casual, and
                                                        Fashion garments
                                                    </p>
                                                    <h3><i class="bi bi-geo-alt-fill me-2"></i>
                                                        Formal, Semi-formal, Casual, and
                                                        Fashion garments
                                                    </h3>
                                                    <div class="d-flex justify-content-center">
                                                        <a href="/" class="sp_btn">Booking now</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="pills-beauty" role="tabpanel" aria-labelledby="pills-beauty-tab" tabindex="0">
                                <div class="sp_categroy_list">
                                    <div class="row">
                                        <div class="col-sm-4">
                                            <div class="sp_category_prodcut">
                                                <img src="https://instagift.mactosys.com/public/assets/images/shop1.png" alt="" />
                                                <div class="sp_prodcut_content">
                                                    <h2>Chanel</h2>
                                                    <p>Formal, Semi-formal, Casual, and
                                                        Fashion garments
                                                    </p>
                                                    <h3><i class="bi bi-geo-alt-fill me-2"></i>
                                                        Formal, Semi-formal, Casual, and
                                                        Fashion garments
                                                    </h3>
                                                    <div class="d-flex justify-content-center">
                                                        <a href="/" class="sp_btn">Booking now</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-4">
                                            <div class="sp_category_prodcut">
                                                <img src="https://instagift.mactosys.com/public/assets/images/shop1.png" alt="" />
                                                <div class="sp_prodcut_content">
                                                    <h2>Chanel</h2>
                                                    <p>Formal, Semi-formal, Casual, and
                                                        Fashion garments
                                                    </p>
                                                    <h3><i class="bi bi-geo-alt-fill me-2"></i>
                                                        Formal, Semi-formal, Casual, and
                                                        Fashion garments
                                                    </h3>
                                                    <div class="d-flex justify-content-center">
                                                        <a href="/" class="sp_btn">Booking now</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-4">
                                            <div class="sp_category_prodcut">
                                                <img src="https://instagift.mactosys.com/public/assets/images/shop1.png" alt="" />
                                                <div class="sp_prodcut_content">
                                                    <h2>Chanel</h2>
                                                    <p>Formal, Semi-formal, Casual, and
                                                        Fashion garments
                                                    </p>
                                                    <h3><i class="bi bi-geo-alt-fill me-2"></i>
                                                        Formal, Semi-formal, Casual, and
                                                        Fashion garments
                                                    </h3>
                                                    <div class="d-flex justify-content-center">
                                                        <a href="/" class="sp_btn">Booking now</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="pills-jwellery" role="tabpanel" aria-labelledby="pills-jwellery-tab" tabindex="0">
                                <div class="sp_categroy_list">
                                    <div class="row">
                                        <div class="col-sm-4">
                                            <div class="sp_category_prodcut">
                                                <img src="https://instagift.mactosys.com/public/assets/images/shop1.png" alt="" />
                                                <div class="sp_prodcut_content">
                                                    <h2>Chanel</h2>
                                                    <p>Formal, Semi-formal, Casual, and
                                                        Fashion garments
                                                    </p>
                                                    <h3><i class="bi bi-geo-alt-fill me-2"></i>
                                                        Formal, Semi-formal, Casual, and
                                                        Fashion garments
                                                    </h3>
                                                    <div class="d-flex justify-content-center">
                                                        <a href="/" class="sp_btn">Booking now</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-4">
                                            <div class="sp_category_prodcut">
                                                <img src="https://instagift.mactosys.com/public/assets/images/shop1.png" alt="" />
                                                <div class="sp_prodcut_content">
                                                    <h2>Chanel</h2>
                                                    <p>Formal, Semi-formal, Casual, and
                                                        Fashion garments
                                                    </p>
                                                    <h3><i class="bi bi-geo-alt-fill me-2"></i>
                                                        Formal, Semi-formal, Casual, and
                                                        Fashion garments
                                                    </h3>
                                                    <div class="d-flex justify-content-center">
                                                        <a href="/" class="sp_btn">Booking now</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-4">
                                            <div class="sp_category_prodcut">
                                                <img src="https://instagift.mactosys.com/public/assets/images/shop1.png" alt="" />
                                                <div class="sp_prodcut_content">
                                                    <h2>Chanel</h2>
                                                    <p>Formal, Semi-formal, Casual, and
                                                        Fashion garments
                                                    </p>
                                                    <h3><i class="bi bi-geo-alt-fill me-2"></i>
                                                        Formal, Semi-formal, Casual, and
                                                        Fashion garments
                                                    </h3>
                                                    <div class="d-flex justify-content-center">
                                                        <a href="/" class="sp_btn">Booking now</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shop;