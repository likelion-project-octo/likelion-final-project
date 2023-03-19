import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

export function Product(props) {
  return (
    <StyledProductContainer>
      <Link to="/">
        <img src={props.imgUrl} alt="상품 이미지"></img>
      </Link>
      <span className="title">{props.title}</span>
      <span className="price">{props.price}벨</span>
      <span className="location">{props.location}</span>
      <span className="interest">관심 {props.interest}</span>
    </StyledProductContainer>
  );
}

const StyledProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 212px;
  height: 320px;

  & img {
    border-radius: 12px;
    box-shadow: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.15);
    display: block;
    width: 100%;
    height: 212px;
    object-fit: cover;
  }

  & .title {
    font-style: normal;
    margin-top: 12px;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #212529;
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
  }

  & .price {
    display: block;
    font-style: normal;
    color: #212529;
    margin-top: 3px;
    font-weight: 700;
    font-size: 15px;
    line-height: 22px;
  }

  & .location {
    display: block;
    font-style: normal;
    color: #212529;
    margin-top: 3px;
    font-size: 13px;
    line-height: 20px;
  }

  & .interest {
    display: block;
    font-style: normal;
    margin-top: 3px;
    font-size: 12px;
    line-height: 14px;
    color: #868e96;
  }
`;
