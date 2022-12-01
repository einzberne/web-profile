import styled from "styled-components";

export default styled.div`
  .btn-shadow {
    box-shadow: var(--outer-shadow);

    &:hover {
      box-shadow: var(--inner-shadow);
    }
  }

  // profile img

  .home-text,
  .home-img {
    flex: 0 0 50%;
    // max-width: 50%;
    // padding: 0 15px;
  }

  .home-img .img-box {
    // max-width: 450px;
    display: block;
    margin: auto;
    border-radius: 50%;
    padding: 15px;
  }

  .inner-shadow {
    box-shadow: var(--inner-shadow);
  }

  .home-img .img-box img {
    // width: 100%;
    border-radius: 50%;
    border: 10px solid transparent;
  }

  .profileImg {
    width: 350px;
    height: 350px;
  }

  // tab

  .about-tabs {
    padding: 60px 15px 50px;
    flex: 0 0 100%;
    max-width: 100%;
    text-align: center;
  }

  .about-tabs .tab-item {
    display: inline-block;
    margin: 0 5px 10px;
    cursor: pointer;
    padding: 5px 10px;
    border-radius: 30px;
    transition: all 0.3s ease;
    font-style: 16px;
    // color: var(--text-black-600);
    font-weight: 500;
    text-transform: capitalize;
  }
`;
