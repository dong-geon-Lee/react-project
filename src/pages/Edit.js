import React from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

const Edit = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const id = searchParams.get("id");
  const mode = searchParams.get("ask");

  console.log(id, mode);

  return (
    <div>
      <h1>Edit</h1>
      <p>이곳은 일기 수정 페이지 입니다.</p>
      <button onClick={() => setSearchParams({ id: "a15jk", ask: "ask" })}>
        QS 바꾸기
      </button>

      <button onClick={() => navigate("/")}>HOME으로 가기</button>
      <button onClick={() => navigate(-1)}>뒤로가기</button>
    </div>
  );
};

export default Edit;
