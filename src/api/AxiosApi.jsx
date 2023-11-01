import axios from "axios";
const KH_DOMAIN = "http://localhost:8111";

const AxiosApi = {
  // 로그인 기능
  memberLogin: async (id, pw) => {
    const login = {
      id: id,
      pwd: pw,
    };
    // post는 내부로 데이터를 숨겨서 json으로 날려줌)
    return await axios.post(KH_DOMAIN + "/users/login", login);
  },
};

export default AxiosApi;
