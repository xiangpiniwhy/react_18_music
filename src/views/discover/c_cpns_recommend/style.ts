import styled from 'styled-components'

interface BannerProps {
  bgImage: string
}

export const RecommendWrapper = styled.div<BannerProps>`
  background: url(${(props) => props.bgImage}) center center/6000px;
  .swiper {
    display: flex;
    ${(props) => props.theme.mixin.wrapv2}
    position: relative;
  }
  .carouselPic {
    width: 718px;
    img {
      width: 100%;
      height: 285px;
    }
  }
  .sprite_download {
    background-position: 0 0;
    width: 1504px;
    height: 285px;
  }
  .btn {
    width: 37px;
    height: 63px;
    background-image: url(${require('@/assets/img/banner_sprite.png')});
    background-color: transparent;
    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
  .left {
    position: absolute;
    top: 39%;
    left: -7%;
    background-position: 0 -360px;
  }
  .right {
    position: absolute;
    top: 39%;
    right: -6%;
    background-position: 0 -508px;
  }
  .dots {
    position: absolute;
    left: -25%;
    right: 0;
    bottom: 0;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    .carousel_li {
      margin: 0 2px;
      .item {
        display: inline-block;
        width: 20px;
        height: 20px;
        background: url(${require('@/assets/img/banner_sprite.png')}) no-repeat
          3px -343px;
        cursor: pointer;
        &:hover,
        &.active {
          background-position: -16px -343px;
        }
      }
    }
  }
`
