// import { useRef } from "react";
// 무한스크롤을 사용하기 위한 useEffect
import { useEffect, useRef } from "react";
import { useCard } from "../context/CardContext";

import Card from "./Card";

const App = ({ selectedCategory }) => {
  // 그리고 index.js에서 selectedCategory라는 이름으로 props 받아옴
  // 전역 상태로 관리된 selectedCategory 값을 **다른 컴포넌트(App 컴포넌트)**에서 필터링에 사용하기 위함

  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // ~~물결 구분선 부분 context 폴더 생성하면 CardContext에서 관리 되도록 옮겨주기
  // 그리고 cardData, addCards 데이터 전역에서 가져오게 처리
  // 하지만 bottomRef 는 index.js 에서 관리하도록 놔둠
  const { cardData, addCards } = useCard(); // ✅ 전역 데이터 가져오기

  // // 각각의 카드에 맞는 데이터를 배열로 정의
  // const [cardData, setCardData] = useState([
  //   {
  //     imgSrc:
  //       "https://img.29cm.co.kr/next-product/2023/03/13/6df115b934da4129a4a154606084bfdd_20230313145108.jpg?width=400",
  //     brandName: "프리츠한센",
  //     productName: "프리츠한센 - IKEBANA SMALL(BRASS)",
  //     price: "178,000원",
  //     discount: "8%",
  //     discountPrice: "163,760원",
  //     likes: "10,642",
  //     reviews: "201",

  //     category: "홈데코",
  //   },
  //   {
  //     imgSrc:
  //       "https://img.29cm.co.kr/item/202401/11eeb4ff03df260391eb4bbeb9e18de8.jpg?width=700&format=webp",
  //     brandName: "바나코",
  //     productName: "바나코 PENTA 사이드 테이블",
  //     price: "49,900",
  //     discount: "27%",
  //     discountPrice: "36,465",
  //     likes: "1032",
  //     reviews: "32",

  //     category: "가구",
  //   },
  //   {
  //     imgSrc:
  //       "https://img.29cm.co.kr/item/202403/11eee2a5ea13c82682f27532668945d8.png?width=400",
  //     brandName: "다이노탱",
  //     productName: "Quokka in School Figure Pen",
  //     discountPrice: "7,000",
  //     likes: "8,347",
  //     reviews: "125",

  //     category: "아트",
  //   },
  // ]);

  // // 추가할 카드 데이터 배열로 정의
  // const additionalData = [
  //   {
  //     imgSrc:
  //       "https://img.29cm.co.kr/next-product/2022/05/11/3604577eaec24c9b84890b0b40b13381_20220511034008.png?width=700&format=webp",
  //     brandName: "레어로우",
  //     productName: "포 스태킹 쉘브 미니 (7 Colors)",
  //     price: "90000",
  //     discount: "24%",
  //     discountPrice: "68,850",
  //     likes: "640",
  //     reviews: "20",

  //     category: "가구",
  //   },
  //   {
  //     imgSrc:
  //       "https://img.29cm.co.kr/next-product/2023/01/04/fd590e2b68114bafa833607afce1b3d0_20230104223415.jpg?width=400",
  //     brandName: "에프에프 컬렉티브",
  //     productName: "[29CM 단독] Spiral Floor Lamp (Black / White)",
  //     price: "440,000",
  //     discount: "25%",
  //     discountPrice: "330,000",
  //     likes: "3712",
  //     reviews: "49",

  //     category: "조명",
  //   },
  //   {
  //     imgSrc:
  //       "https://img.29cm.co.kr/item/202312/11ee9322ebb850b98a7f9f31055ef7b3.png?width=400",
  //     brandName: "다이노탱",
  //     productName: "Touch the Quokka",
  //     discountPrice: "979,000",
  //     likes: "5,511",
  //     reviews: "221",

  //     category: "아트",
  //   },
  //   {
  //     imgSrc:
  //       "https://img.29cm.co.kr/item/202501/11efd146658426bd8521cbf039c77540.jpg?width=400&format=webp",
  //     brandName: "루미르",
  //     productName: "Yeolmae 열매 포터블 램프 - 오트베이지 (2Options) 무선 조명",
  //     price: "165,000",
  //     discount: "28%",
  //     discountPrice: "119,000",
  //     likes: "2640",
  //     reviews: "640",

  //     category: "조명",
  //   },
  //   {
  //     imgSrc:
  //       "https://img.29cm.co.kr/next-product/2022/09/23/865efbc6e9444cd48c0ef8826b434198_20220923100751.jpg?width=700&format=webp",
  //     brandName: "아티쉬",
  //     productName: "[액자] Mother Daughter / 지젤 데켈(Giselle Dekel)",
  //     price: "68,000",
  //     discount: "15%",
  //     discountPrice: "57,800",
  //     likes: "712",
  //     reviews: "94",

  //     category: "아트",
  //   },
  //   {
  //     imgSrc:
  //       "https://img.29cm.co.kr/next-product/2021/05/26/46c6b943487440f5911d7d47f113654e_20210526094614.jpg?width=700&format=webp",
  //     brandName: "렉슨",
  //     productName: "LEXON 렉슨 MINA M사이즈 미나 무드등 조명 램프 - LH64",
  //     price: "90,000",
  //     discount: "30%",
  //     discountPrice: "63,360",
  //     likes: "8,511",
  //     reviews: "4330",

  //     category: "조명",
  //   },
  // ];
  // -----------------------------------------------------
  // // 최하단 객체 생성시 이벤트를 위한 useRef
  const bottomRef = useRef(null);
  // // useRef: 일반적으로 특정 DOM을 지정해서해당 속성값을 파악하거나 변경시키는 용도
  // // 초기 렌더링 시점에 참조할 DOM 요소가 아직 생성되지 않았기때문에 null 값을 기존값으로 생성

  // // -----------------------------------------------------
  // // 카드를 하나씩 생성하기 위한 추가 데이터 인덱스 관리
  // const [cardIndex, setcardIndex] = useState(0);

  // // 새로운 카드 데이터 추가하는 함수
  // const addCards = () => {
  //   // setCardData([...additionalData]); // 이건 추가아니고 교체
  //   // setCardData([...cardData, ...additionalData]);
  //   // 기존 cardData에 additionalData 를 추가해서 상태 업데이트
  //   // 그러나 이렇게 작성할 경우 additionalData 안쪽에 있는 카드가 전부 생성됨

  //   // 코드 수정(하나씩 추가)
  //   if (cardIndex < additionalData.length) {
  //     // setCardData([...cardData, additionalData[cardIndex]]);
  //     // // 스프레드연산자(전개연산자)는 배열이나 반복가능한(iterable) 데이터를 펼칠때 사용하는것 / 즉 additionalData[cardIndex] 는 배열의 방 번호를 직접 호출하는 것으로 사용불가
  //     // setcardIndex(cardIndex + 1); // 인덱스를 1 증가시켜서 다음 데이터를 추가할 준비

  //     // 카드 컴포넌트를 3개씩 추가
  //     const nextIndex = cardIndex + 3;
  //     setCardData([...cardData, ...additionalData.slice(cardIndex, nextIndex)]);
  //     //slice 사용 : slide() 메서드를 사용해 cardIndex 부터 nextIndex -1 값 까지 요소를 추출하므로, 여기서는 3개의 데이터를 가져와 cardData 추가

  //     setcardIndex(nextIndex); // 인덱스를 3씩 증가를 시킴

  //     setTimeout(() => {
  //       // 새 요소가 추가된 후 하단으로 스크롤
  //       // ?.(optional chaining 옵셔널 체이닝)
  //       bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  //       // => bottomRef.current 여기서 current가 null 이나 undefined 일때 접근 할 수 있게 해줌
  //     });
  //   }
  // };
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  // 선택된 카테고리로 필터링
  // selectedCategory 값에 따라 cardData 배열을 필터링하여 새로운 배열을 생성하는 로직(삼항연산자)
  const filteredData =
    selectedCategory === "전체"
      ? // selectedCategory가 "전체"인지 확인하고
        cardData
      : // 조건이 참인 경우, cardData를 필터링하지 않고 그대로 보여줌
        cardData.filter((data) => data.category === selectedCategory);
  // 조건이 거짓일 경우, cardData를 필터링
  // filter 메서드를 사용하여 cardData 배열에서 category가 selectedCategory와 일치하는 항목만 남김

  // // window.scroll 방식 : 스크롤 위치를 수식으로 직접 계산 -> 완전한 하단 도달 시점 감지 가능
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollY = window.scrollY;
  //     const viewportHeight = window.innerHeight;
  //     const fullHeight = document.documentElement.offsetHeight;

  //     if (scrollY + viewportHeight >= fullHeight - 10) {
  //       // 바닥 도달 시
  //       addCards();
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, [addCards]);

  // ✅ 무한스크롤용 IntersectionObserver 사용 -> 효율적 (브라우저 최적화) -> 요소가 중간에만 보여도 작동할 수 있음
  useEffect(() => {
    const observer = new IntersectionObserver(
      // IntersectionObserver 브라우저에 내장된 API로, 어떤 요소가 화면(viewport)에 보이는지 감지할 수 있는 기능
      (entries) => {
        const [entry] = entries;
        // entries 의 여러요소 중 첫 번째 요소만 받겠다는 뜻
        // const entry = entries[0]; -> 근데 구조 분해로 쓰면 코드가 더 간결
        // 이렇게 써도 같음

        if (entry.isIntersecting) {
          addCards(); // 마지막 요소 보이면 자동으로 카드 추가
        }
      },
      {
        root: null,
        // root는 어떤 영역을 기준으로 감지할지 설정하는 아이 null이면 viewport 기준
      }
    );

    const target = bottomRef.current;
    if (target) observer.observe(target); // target 요소가 화면에 나타나는지 감시(관찰) 시작

    return () => {
      if (target) observer.unobserve(target); // 컴포넌트가 사라지거나 리렌더링될 때 감시(관찰) 해제(메모리 누수 방지 + 성능 최적화)
    };
  }, [bottomRef, addCards]);

  return (
    <>
      <div className="container_wrap">
        <div className="flex_box flex-wrap">
          {/* {cardData.map((data, index) => (
            <Card
              key={index} // 각 카드에 고유한 key 부여
              imgSrc={data.imgSrc}
              brandName={data.brandName}
              productName={data.productName}
              price={data.price}
              discount={data.discount}
              discountPrice={data.discountPrice}
              likes={data.likes}
              reviews={data.reviews}
            />
          ))} */}

          {/* 필터링을 하기 위해 설정해준 filteredData 를 cardData 에서 대체하면서 key={data.id}로 변경 */}
          {filteredData.map((data, index) => (
            <Card
              key={data.id} //필터링할때 cardData 정의한 id 로 설정
              // 리액트에서 리스트 렌더링할 때는 각 항목마다 고유한 key가 필요
              // 성능 최적화와 오류 방지를 위해 index 대신 data.id를 쓰는 게 좋음

              {...data}
              // 스프레드 전달로 변경
              // 깔끔하고 유지보수 쉬움
              // prop 명시가 중요한 상황이 아닐땐 스프레드 전달이 좋음
            />
          ))}

          {/* 빈 div에 bottomRef 추가하여 스크롤될 위치를 지정 */}
          <div ref={bottomRef}></div>
        </div>
        {/* <button
          className="addbtn text-[#333] text-[20px] font-[800] w-[200px] h-[50px] rounded-[8px] border border-solid border-[#333] flex justify-center items-center mx-auto mb-[50px] mt-[50px]"
          onClick={() => {
            addCards();

            setTimeout(() => {
              bottomRef.current?.scrollIntoView({
                behavior: "smooth",
              }); // ✅ 마지막 카드로 스크롤 이동
            }, 100);
          }}
        >
          더보기
        </button> */}
      </div>
    </>
  );
};

export default App;
