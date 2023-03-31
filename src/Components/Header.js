import React from 'react';
import {Link} from 'react-router-dom';

function Header(props) {
  return (
    <>
      <header>
        <h1>
          <Link to='/'>
            <img src={`${process.env.PUBLIC_URL}/images/logo.svg`} alt="로고" />
          </Link>
        </h1>

        <div>
          <p>마켓컬리 &#x007C; 뷰티컬리</p>
        </div>

        <nav>
          <ul>
            <li>
              <Link to='/Login'>로그인</Link>
            </li>
          </ul>
        </nav>
        
        <nav>
          <ul>
            <li>
              <Link to='/NewProduct'>신상품</Link>
            </li>
            <li>
              <Link to='/Best'>베스트</Link>
            </li>
            <li>
              <Link to='/FleaMarket'>알뜰쇼핑</Link>
            </li>
            <li>
              <Link to='/Sale'>특가 / 혜택</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;