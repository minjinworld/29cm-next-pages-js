import { createContext, useContext, useState } from "react";
// createContext : 전역에서 데이터를 공유할 수 있는 통로(컨텍스트)를 만들어주는 역할
// useContext : 위에서 만든 Context에 있는 값을 읽어오기 위한 리액트 훅
// useState: 사실 useState도 리액트의 가장 기본적인 훅임
// 훅이 뭔데 ? 리액트 함수형 컴포넌트 안에서 상태 관리나 라이프사이클 같은 기능을 사용할 수 있게 해주는 함수

const CardContext = createContext();

export const CardProvider = ({ children }) => {
  // children : 하단 return 문에서 전달할 컴포넌트가 감싸고 있는 자식 요소들

  // 이제 새로운 상품 추가할 때 여기에만 추가하면 됨!

  const [cardData, setCardData] = useState([
    {
      id: 1,
      imgSrc:
        "https://img.29cm.co.kr/next-product/2023/03/13/6df115b934da4129a4a154606084bfdd_20230313145108.jpg?width=400",
      brandName: "프리츠한센",
      productName: "프리츠한센 - IKEBANA SMALL(BRASS)",
      price: "178,000원",
      discount: "8%",
      discountPrice: "163,760원",
      likes: "10,642",
      reviews: "201",
      category: "홈데코",
      detailImgSrc: "/images/fritzhansen_detail.jpg",
      explain:
        "세계적인 클래식 & 컨템포러리 가구, 조명, 소품으로 구성된 인터내셔널 디자인 브랜드입니다.",
    },
    {
      id: 2,
      imgSrc:
        "https://img.29cm.co.kr/item/202401/11eeb4ff03df260391eb4bbeb9e18de8.jpg?width=700&format=webp",
      brandName: "바나코",
      productName: "바나코 PENTA 사이드 테이블",
      price: "49,900",
      discount: "27%",
      discountPrice: "36,465",
      likes: "1032",
      reviews: "32",
      category: "가구",
      detailImgSrc: "/images/banaco_detail.jpg",
    },
    {
      id: 3,
      imgSrc:
        "https://img.29cm.co.kr/item/202403/11eee2a5ea13c82682f27532668945d8.png?width=400",
      brandName: "다이노탱",
      productName: "Quokka in School Figure Pen",
      discountPrice: "7,000",
      likes: "8,347",
      reviews: "125",
      category: "아트",
      detailImgSrc: "/images/dino1_detail.jpg",
    },
    {
      id: 4,
      imgSrc:
        "https://img.29cm.co.kr/next-product/2022/05/11/3604577eaec24c9b84890b0b40b13381_20220511034008.png?width=700&format=webp",
      brandName: "레어로우",
      productName: "포 스태킹 쉘브 미니 (7 Colors)",
      price: "90000",
      discount: "24%",
      discountPrice: "68,850",
      likes: "640",
      reviews: "20",
      category: "가구",
      detailImgSrc: "/images/rarerow_detail.jpg",
    },
    {
      id: 5,
      imgSrc:
        "https://img.29cm.co.kr/next-product/2023/01/04/fd590e2b68114bafa833607afce1b3d0_20230104223415.jpg?width=400",
      brandName: "에프에프 컬렉티브",
      productName: "[29CM 단독] Spiral Floor Lamp (Black / White)",
      price: "440,000",
      discount: "25%",
      discountPrice: "330,000",
      likes: "3712",
      reviews: "49",
      category: "조명",
      detailImgSrc: "/images/ff_detail.jpg",
    },
    {
      id: 6,
      imgSrc:
        "https://img.29cm.co.kr/item/202312/11ee9322ebb850b98a7f9f31055ef7b3.png?width=400",
      brandName: "다이노탱",
      productName: "Touch the Quokka",
      discountPrice: "979,000",
      likes: "5,511",
      reviews: "221",
      category: "아트",
      detailImgSrc: "/images/dino2_detail.jpg",
    },
  ]);

  const additionalData = [
    {
      id: 7,
      imgSrc:
        "https://img.29cm.co.kr/item/202501/11efd146658426bd8521cbf039c77540.jpg?width=400&format=webp",
      brandName: "루미르",
      productName: "Yeolmae 열매 포터블 램프 - 오트베이지 (2Options) 무선 조명",
      price: "165,000",
      discount: "28%",
      discountPrice: "119,000",
      likes: "2640",
      reviews: "640",
      category: "조명",
      detailImgSrc: "/images/lumir_detail.jpg",
    },
    {
      id: 8,
      imgSrc:
        "https://img.29cm.co.kr/next-product/2022/09/23/865efbc6e9444cd48c0ef8826b434198_20220923100751.jpg?width=700&format=webp",
      brandName: "아티쉬",
      productName: "[액자] Mother Daughter / 지젤 데켈(Giselle Dekel)",
      price: "68,000",
      discount: "15%",
      discountPrice: "57,800",
      likes: "712",
      reviews: "94",
      category: "아트",
      detailImgSrc: "/images/artish_detail.jpg",
    },
    {
      id: 9,
      imgSrc:
        "https://img.29cm.co.kr/next-product/2021/05/26/46c6b943487440f5911d7d47f113654e_20210526094614.jpg?width=700&format=webp",
      brandName: "렉슨",
      productName: "LEXON 렉슨 MINA M사이즈 미나 무드등 조명 램프 - LH64",
      price: "90,000",
      discount: "30%",
      discountPrice: "63,360",
      likes: "8,511",
      reviews: "4330",
      category: "조명",
      detailImgSrc: "/images/lexon_detail.jpg",
    },
  ];

  const [cardIndex, setCardIndex] = useState(0);

  const addCards = () => {
    const nextIndex = cardIndex + 3;
    setCardData([...cardData, ...additionalData.slice(cardIndex, nextIndex)]);
    setCardIndex(nextIndex);
  };

  return (
    <CardContext.Provider value={{ cardData, setCardData, addCards }}>
      {children}
    </CardContext.Provider>
    // CardContext.Provider는 이 Context 안의 값을 공급(Provide) 하는 컴포넌트
    // {children}은 이 안에 감싸줄 컴포넌트를 의미
    // children은 결국 return 문 안에서 <CardContext.Provider>로 감싸줘서 전역 상태(cardData 등)를 하위 컴포넌트들이 사용할 수 있게함
  );
};

// Context 사용 (index.js & order/[id].js)
export const useCard = () => useContext(CardContext);
// React Context를 더 편하게 쓰기 위한 커스텀 훅
// 커스텀 훅을 안쓰면 index.js 에 접근시킬때 useContext 에 import 도 시켜야하고  useContext(CardContext)도 적어줘야함
