import { useNavigate } from "react-router-dom"; // 화면 이동 훅
import { ButtonContainer, TransBtn } from "../component/ButtonContainer";
import imgButton from "../images/nedbank_s.png";

const Home = () => {
  const navigate = useNavigate();

  const onClickBtn = (num) => {
    switch (num) {
      case 1:
        navigate("/MemberList");
        break;
      case 2:
        break;
      case 3:
        navigate("/Profile");
        break;
      case 4:
        navigate("/Setting");
        break;
      default:
    }
  };
  return (
    <>
      <div>
        <ButtonContainer>
          <TransBtn onClick={() => onClickBtn(1)}>회원리스트</TransBtn>
          <TransBtn onClick={() => onClickBtn(2)}>뉴스 보기</TransBtn>
          <TransBtn onClick={() => onClickBtn(3)}>사진 업로드</TransBtn>
          <TransBtn onClick={() => onClickBtn(4)}>테마 변경</TransBtn>
        </ButtonContainer>
      </div>
      <div className="bglogo">
        <img src={imgButton} alt="buttonimg" />
      </div>
    </>
  );
};
export default Home;
