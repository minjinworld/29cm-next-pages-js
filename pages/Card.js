import Link from "next/link";

const Card = ({
  id,
  imgSrc,
  brandName,
  productName,
  price,
  discount,
  discountPrice,
  likes,
  reviews,
}) => (
  <div className="out_box">
    {/* next.js 에서는 a 태그말고 Link 태그 사용권장 */}
    {/* <Link> 컴포넌트에 사용되는 prop으로, Next.js v12 이후 도입된 새로운 동작 방식을 비활성화하고 기존(구버전)의 동작 방식을 사용하도록 설정하는 옵션 */}
    {/* // 이전 방식 -> 링크 안에 꼭 a태그로 감쌌음 / 지금은 링크로 바로해결 (legacyBehavior를 활성화하면 이전 방식(수동으로 <a> 태그를 작성)으로 돌아감)
    <Link href="/about">
      <a>Go to About</a>
    </Link> */}

    {/* <Link href="/order"  className="img_box">
        <img src={imgSrc} alt={productName} />
    </Link> */}

    {/* 서브페이지도 변경 */}
    <Link href={`/order/${id}`} className="img_box">
      <img src={imgSrc} alt={`${brandName} 썸네일`} />
    </Link>

    <div className="text_content">
      <div className="text_head">
        <a href="#none" className="brand_name">
          {brandName}
        </a>
        <h5 className="product_name">{productName}</h5>
      </div>

      <div className="text_center">
        {price && discount && (
          <>
            <strong className="price">{price}</strong>
            <span className="discount">{discount}</span>
          </>
        )}

        <strong className="discount_price">{discountPrice}</strong>
        <button className="coupon">쿠폰</button>
      </div>

      <div className="text_bottom">
        <button className="icon heart_icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 18 18"
          >
            <path d="M9 6.088C9 3.831 10.791 2 13 2s4 1.83 4 4.088c0 1.743-1.46 3.23-1.46 3.23L9 16 2.46 9.318S1 7.83 1 6.088C1 3.831 2.791 2 5 2s4 1.83 4 4.088z"></path>
          </svg>
          <span className="like">{likes}</span>
        </button>

        <button className="icon review_icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 15 16"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M1 2.007v8.813c0 .556.457 1.007 1.02 1.007h7.749L14 15V2.007C14 1.451 13.543 1 12.98 1H2.02C1.457 1 1 1.451 1 2.007z"
            ></path>
          </svg>
          <span className="review">{reviews}</span>
        </button>
      </div>
    </div>
  </div>
);

export default Card;
