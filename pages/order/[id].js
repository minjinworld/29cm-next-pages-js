// 동적 라우팅(dynamic routing) 을 할 때는 폴더 안에 파일생성이 공식적인 방식
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useCard } from "@/context/CardContext";// .. → 한 폴더 위로 올라감
// ../.. → 두 번 올라가야 pages/ 밖으로 빠져나옴
// useCard : CardContext에서 커스텀훅을 받아옴

const OrderDetail = () => {
  // 상품갯수 추가
  const [count, setCount] = useState(0);

  // 동적라우팅을 위한 코드!!!!!
  const router = useRouter();
  // ✅ **useRouter*는 Next.js에서 제공하는 훅(Hook) : 현재 페이지의 라우팅 정보를 가져올 수 있음
  const { id } = router.query;
  // 구조 분해 할당으로 id만 꺼내주는 아이


  const { cardData, addCards } = useCard();  // 전역에서 관리 중인 카드 목록 데이터(cardData)를 불러옴



  const [product, setProduct] = useState(null);

  // ✅ 카드가 없으면 계속 addCards 호출해서 찾아오기
  useEffect(() => {
    if (!id) return;

    const interval = setInterval(() => {
      const found = cardData.find((item) => item.id === Number(id));
      if (found) {
        setProduct(found);
        clearInterval(interval); // 찾으면 멈춤
      } else {
        addCards(); // 없으면 계속 카드 추가
      }
    }, 300); // 300ms 간격으로 체크

    return () => clearInterval(interval);
  }, [id, cardData]);

  if (!product) return <p>⏳ 상품을 찾는 중입니다...</p>;
  return (
    <>
      <div className="order">
        <div class="top_box">
          <div className="brandInfo">
            <div className="infoImage">
              <img src={product.imgSrc} alt={product.brandName} />
            </div>

            <div className="infoText">
              <span className="brandName">{product.brandName}</span>
              <span className="explain">{product.explain}</span>
              <button className="brandBtn">
                <a href="#none" className="brandHome">
                  brand home
                </a>
              </button>
            </div>
          </div>

          <div className="productbox">
            <div className="product productImage">
              <img src={product.imgSrc} alt={product.brandName} />
            </div>

            <div className="product productOrder">
              <div className="protop">
                <div className="nameLike">
                  <span className="proname">{product.productName}</span>
                  <div className="heartbox">
                    <svg
                      className="css-kglvp1 efn0ag41"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 18 18"
                    >
                      <path
                        d="M9 6.088C9 3.831 10.791 2 13 2s4 1.83 4 4.088c0 1.743-1.46 3.23-1.46 3.23L9 16 2.46 9.318S1 7.83 1 6.088C1 3.831 2.791 2 5 2s4 1.83 4 4.088z"
                        fill="#ffffff"
                        stroke="#5d5d5d"
                        strokeWidth="0.7"
                      ></path>
                    </svg>
                  </div>
                </div>

                <div className="reviewBox">
                  <svg
                    className="starIcon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="10"
                    viewBox="0 0 13 12"
                  >
                    <path
                      fill="#000000"
                      fillRule="evenodd"
                      stroke="#000000"
                      stroke-width="0.7"
                      d="M4.146 3.95L0 4.583l3 3.075L2.292 12 6 9.95 9.708 12 9 7.658l3-3.075-4.146-.633L6 0z"
                    ></path>
                  </svg>
                  <svg
                    className="starIcon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="10"
                    viewBox="0 0 13 12"
                  >
                    <path
                      fill="#000000"
                      fillRule="evenodd"
                      stroke="#000000"
                      stroke-width="0.7"
                      d="M4.146 3.95L0 4.583l3 3.075L2.292 12 6 9.95 9.708 12 9 7.658l3-3.075-4.146-.633L6 0z"
                    ></path>
                  </svg>
                  <svg
                    className="starIcon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="10"
                    viewBox="0 0 13 12"
                  >
                    <path
                      fill="#000000"
                      fillRule="evenodd"
                      stroke="#000000"
                      stroke-width="0.7"
                      d="M4.146 3.95L0 4.583l3 3.075L2.292 12 6 9.95 9.708 12 9 7.658l3-3.075-4.146-.633L6 0z"
                    ></path>
                  </svg>
                  <svg
                    className="starIcon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="10"
                    viewBox="0 0 13 12"
                  >
                    <path
                      fill="#000000"
                      fillRule="evenodd"
                      stroke="#000000"
                      stroke-width="0.7"
                      d="M4.146 3.95L0 4.583l3 3.075L2.292 12 6 9.95 9.708 12 9 7.658l3-3.075-4.146-.633L6 0z"
                    ></path>
                  </svg>
                  <svg
                    className="starIcon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="10"
                    viewBox="0 0 13 12"
                  >
                    <path
                      fill="#000000"
                      fillRule="evenodd"
                      stroke="#000000"
                      stroke-width="0.7"
                      d="M4.146 3.95L0 4.583l3 3.075L2.292 12 6 9.95 9.708 12 9 7.658l3-3.075-4.146-.633L6 0z"
                    ></path>
                  </svg>
                  <div className="starText">{product.reviews}개 리뷰보기</div>
                </div>

                <div className="priceBox">
                  <div className="priceLeft">
                    {product.discount && (
                      <div className="price">
                        <span className="discount">{product.discount}</span>
                        <span className="discountprice">
                          {product.discountPrice}
                        </span>
                      </div>
                    )}
                    {product.price && (
                      <div className="originalprice">{product.price}</div>
                    )}
                  </div>

                  <div className="priceRight">
                    <a href="#none" className="coupon">
                      쿠폰받기
                      <svg className="css-qzxgwt e1glt8ud1" viewBox="0 0 9 9">
                        <g fill="#ffffff">
                          <path fill="none" d="M0 0h9v9H0z"></path>
                          <path d="M7.284 4.243 4.625 6.695l-.292.275-.003-.003v.001l-.673-.626.002-.002-2.23-2.083.733-.582 1.665 1.607L3.828 0h.937v5.339l1.856-1.678.663.582zm.31 3.505v.943h-6.54v-.943h6.54z"></path>
                        </g>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              <div className="packingInfo">
                <div className="packingFlex">
                  <span className="category">구매 적립금</span>
                  <span>최대 1,638 마일리지 적립 예정</span>
                </div>
                <div className="packingFlex">
                  <span className="category">무이자 할부</span>
                  <span>최대 7개월 무이자 할부 시 월 23,394원 결제</span>
                </div>
                <div className="packingFlex">
                  <span className="category">배송정보</span>
                  <span>3일 이내 출고</span>
                </div>
                <div className="packingFlex">
                  <span className="category">배송비</span>
                  <span>무료배송(제주/도서산간 추가 배송비 없음)</span>
                </div>
              </div>

              <div className="cartBox">
                <div className="countbox">
                  <button
                    className="countui removeBtn"
                    onClick={() => (count > 0 ? setCount(count - 1) : null)}
                  >
                    -
                  </button>
                  <button className="countui incre_number">{count}</button>
                  <button
                    className="countui addBtn"
                    onClick={() => setCount(count + 1)}
                  >
                    +
                  </button>
                </div>

                <div className="buybtnBox">
                  <a href="#none" className="buybtn cartbtn">
                    장바구니 담기
                  </a>
                  <a href="#none" className="buybtn buyingbtn">
                    바로 구매하기
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="bottom_box">
          <div class="bottom_image">
            <img src={product.detailImgSrc} alt={product.brandName} />
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderDetail;
