import React from "react";
import "./Home.css";
import { HomeHeader } from "../../components/Home/HomeHeader";
import { HomeMain } from "../../components/Home/HomeMain";
import { HomeFooter } from "../../components/Home/HomeFooter";

/*
- 사용자 회원가입
- 로그인
- 로그인한 사용자 정보 표시(아이디, 이름)
- 글 등록, 조회(페이지네이션), 수정, 삭제
*/

const Home = () => {
  return (
    <div className="container">
      <HomeHeader />

      <section>
        <HomeMain />
      </section>

      <section>
        <HomeFooter />
      </section>
    </div>
  );
};

export default Home;
