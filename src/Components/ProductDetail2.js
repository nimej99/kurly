import React, {useState, useEffect} from 'react';
import './css/Product.css';

function ProductDetail2(props) {
  const price = 13875; //제품가격 기본값
  //state변수
  const[num, setNum] = useState(1);

  //입력요소에 사용자가 직적 입력하면 데이터 변경
  const onDataChange=(e)=>{
    setNum(e.target.value);
  }
  //1씩 증가
  const onIncrease = () => {
    setNum(Number(num) + 1);
    console.log(num);
  }

  //1씩 감소
  const onDecrease = () => {
    if(num > 1){
      setNum(num - 1);
    }
    console.log(num);
  }

  useEffect(() =>{
    //모든 렌더링에서 실행
    console.log(num);
  },[num]); //state만 호출하여 출력함.
  
  //  //빈 배열
  //  useEffect(() => {
  //   //첫번쨰 렌더링에서만 실행
  //  }, []);
  
  //  //props과 state 사용
  //  useEffect(() => {
  //   //첫번째 렌더링에서 실행
  //   //종속된 값이 변경될 때마다도 사용
  //  }, [props, state]);

  return (
    <>
      <div className='wrap'>
        <div className='left'>
        <img src={`${process.env.PUBLIC_URL}/images/tiramisu.jpg`} alt="이미지" />
        </div>
        <div className='right'>
          <ul className='right_wrap'>
            <li>
              샛별배송
            </li>
            <li>
              <span>[몽상클레르] 마스카포네 티라미수 케이크</span>
              <img src={`${process.env.PUBLIC_URL}/images/share.svg`} alt="이미지" />
            </li>
            <li>
              섬세한 손길로 구현한 짙은 풍미
            </li>
            <li>
              <span className='red'>25%</span> 13,875 원
            </li>
            <li className='grey'>
              18,500원
            </li>
            <li className='purple'>
              로그인 후, 할인 및 적립 혜택이 제공됩니다.
            </li>
            <li>
              <span className='r_title'>배송</span> 샛별배송
            </li>
            <li>
              <span className='r_title'>판매자</span> 컬리
            </li>
            <li>
              <span className='r_title'>포장타입</span> 냉동(종이포장)
            </li>
            <li>
              <span className='r_title'>판매단위</span> 1박스
            </li>
            <li>
              <span className='r_title'>중량/용량</span> 230g
            </li>
            <li>
              <strong><span className='r_title'>원산지</span> 상품설명/상세정보 참조</strong>
            </li>
            <li>
              <span className='r_title'>알레르기정보</span> -계란, 밀, 우유, 돼지고기 함유
            </li>
            <li>
              <span className='r_title'>유통기한</span> 수령일 포함 35일 이상 남은 상품을 보내드립니다.
            </li>
            <li>
              <span className='choose'>상품선택</span>
              <button onClick={onDecrease}>-</button>
              <input type="text" value={num} onChange={onDataChange}/>
              <button onClick={onIncrease}>+</button>
              <span className='price'>{price}원</span>
            </li>
          </ul>
          <div className='total'>
            <p className='total_p'><span>{num} 개 총 상품금액 :</span> <strong>{num*price} 원</strong></p>
            <p className='save'>
              <span className='orange'>적립</span> 로그인 후, 할인 및 적립 혜택 제공
            </p>
            <p className='btn_wrap'>
              <button className='fav_btn'>
                <span>
                  <img src={`${process.env.PUBLIC_URL}/images/heart.svg`} alt="이미지" />
                </span>
              </button>
              <button className='fav_btn'>
                <span>
                  <img src={`${process.env.PUBLIC_URL}/images/bell.svg`} alt="이미지" />
                </span>
              </button>
              <button className='cart'>장바구니</button>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetail2;