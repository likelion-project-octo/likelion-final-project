import styled from "styled-components";
import {Link} from "react-router-dom";
import {Image, Heading1, Button, Input} from "@/components";
import sajaLogo from "@/assets/Home/logo.png";
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/firebase/app';
import {signOut} from "firebase/auth";
import { atom, useRecoilState } from 'recoil';

const checkCurrentUserStateAtom = atom({
  key: "checkCurrentUserStateAtom",
  default: false
})

export function Header() {  

  const [checkCurrentUserState, setCheckCurrentUserState] = useRecoilState(checkCurrentUserStateAtom);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      setCheckCurrentUserState(true);
      console.log(uid, "사용자 로그인", checkCurrentUserState);
    } else {
      setCheckCurrentUserState(false);
      console.log("사용자 로그아웃", checkCurrentUserState);
    }
  });

  async function handleLogout() {
    try {
      await signOut(auth);
      console.log("로그아웃!");
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <StyledHeader>
      <Heading1>
        <Link to="/" className="imgContainer">
          <Image src={sajaLogo} alt="사자 마켓" />
        </Link>
      </Heading1>

      <nav>
        <ul>
          <li>
            <Link to="/">중고거래</Link>
          </li>
          <li>
            <Link to="/">동네가게</Link>
          </li>
          <li>
            <Link to="/">인기매물</Link>
          </li>
        </ul>
      </nav>
      <Input type="text" placeholder="물품이나 동네를 검색해보세요"></Input>
      <div className="buttonContainer">
        {
          !checkCurrentUserState &&
          <>
            <Button type="button" aria-label="로그인" className="loginButton">
              로그인
            </Button>
            <Button type="button" aria-label="회원가입" className="registerButton">
              회원가입
            </Button>
          </>
        }
        {
          checkCurrentUserState && 
          <>
            <Button type="button" aria-label="로그아웃" className="loginButton" onClick={handleLogout}>
              로그아웃
            </Button>
          </>
        }
      </div>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  background-color: white;
  display: flex;
  width: 100%;
  height: 64px;
  justify-content: center;
  top: 0;
  line-height: 64px;
  position: fixed;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 999;

  & img {
    width: 180px;
    height: 64px;
    margin-left: 0;
  }

  & nav {
    margin-left: 20px;
    min-width: 310px;
  }

  & li {
    float: left;
    margin: 0;
  }

  & button {
    width: 100px;
    height: 40px;
    margin: 12px 16px;
    margin: 0;
    border-radius: 8px;
    border: none;
    font-weight: 600;
    font-size: 18px;
  }

  & .buttonContainer {
    min-width: 200px;
  }

  & .loginButton {
    color: black;
    background-color: white;
  }
  & .registerButton {
    background-color: #6c816d;
    color: white;
  }

  & input {
    width: 400px;
    height: 40px;
    margin: 0 24px;
    margin-top: 12px;
    border-radius: 6px;
    border: none;
    background-color: #f2f3f6;
    padding-left: 10px;
    font-weight: 400;
    font-size: 16px;
  }

  & a {
    text-decoration-line: none;
    color: black;
    width: 64px;
    height: 24px;
    font-weight: 700;
    font-size: 18px;
    margin: 0 20px;
  }

  & a:hover {
    color: #eca997;
  }

  & .imgContainer {
    width: 150px;
    height: 64px;
    margin-left: 0;
  }
`;
