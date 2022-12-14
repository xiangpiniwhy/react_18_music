import React, {
  memo,
  FC,
  useRef,
  ElementRef,
  useCallback,
  useState
} from 'react'
import type { ReactNode } from 'react'
import { Carousel } from 'antd'
import { RecommendWrapper } from '@/views/discover/c_cpns_recommend/style'
import { useAppSelect } from '@/store'
import { shallowEqual } from 'react-redux'
import classNames from 'classnames'

interface IRecommend {
  children?: ReactNode
}

const Recommend: FC<IRecommend> = () => {
  // 从reduce中获取数据
  const { banners } = useAppSelect(
    (state) => ({
      banners: state.recommend.banners
    }),
    shallowEqual
  )
  const [currentIndex, setCurrentIndex] = useState(0)

  const carouselRef = useRef<ElementRef<typeof Carousel>>(null)
  const divRef = useRef<HTMLDivElement>(null)
  function handleLeftClick() {
    carouselRef.current?.prev()
  }
  const bgImage = banners?.[currentIndex]?.imageUrl + '?imageView&blur=40x20'
  const beforeChange = useCallback((oldIndex: number, newIndex: number) => {
    setCurrentIndex(newIndex)
  }, [])
  return (
    <RecommendWrapper bgImage={bgImage}>
      <div ref={divRef} className="swiper">
        <Carousel
          autoplay
          className="carouselPic"
          dots={false}
          ref={carouselRef}
          effect="fade"
          beforeChange={beforeChange}
        >
          {banners &&
            banners.map((item) => {
              return (
                <div key={item.imageUrl}>
                  <img src={item.imageUrl} alt="" />
                </div>
              )
            })}
        </Carousel>
        <ul className="dots">
          {banners &&
            banners.map((item, index) => {
              return (
                <li key={index} className="carousel_li">
                  <span
                    className={classNames('item', {
                      active: currentIndex === index
                    })}
                  ></span>
                </li>
              )
            })}
        </ul>

        <div className="download sprite_download"></div>
        <button className="btn left" onClick={() => handleLeftClick()}></button>
        <button
          className="btn right"
          onClick={() => carouselRef.current?.next()}
        ></button>
      </div>
    </RecommendWrapper>
  )
}

export default memo(Recommend)
