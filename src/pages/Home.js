import React, { useContext, useEffect, useState } from "react";
import { DiaryStateContext } from "../App";
import DiaryList from "../components/DiaryList";
import MyButton from "../components/MyButton";
import MyHeader from "../components/MyHeader";

const Home = () => {
  const diaryList = useContext(DiaryStateContext);

  const [data, setData] = useState([]);
  const [curDate, setCurDate] = useState(new Date());

  const headText = `${curDate.getFullYear()}년 ${curDate.getMonth() + 1}월`;

  const decreaseMonth = () => {
    const leftMonth = new Date(
      curDate.getFullYear(),
      curDate.getMonth() - 1,
      curDate.getDate()
    );

    setCurDate(leftMonth);
  };

  const increaseMonth = () => {
    const rightMonth = new Date(
      curDate.getFullYear(),
      curDate.getMonth() + 1,
      curDate.getDate()
    );

    setCurDate(rightMonth);
  };

  useEffect(() => {
    if (diaryList.length >= 1) {
      const firstDay = new Date(
        curDate.getFullYear(),
        curDate.getMonth(),
        1
      ).getTime();

      const lastDay = new Date(
        curDate.getFullYear(),
        curDate.getMonth() + 1,
        0
      ).getTime();

      console.log(new Date(firstDay));
      console.log(new Date(lastDay));

      setData(
        diaryList.filter(
          (date) => firstDay <= date.date && date.date <= lastDay
        )
      );
    }
  }, [curDate, diaryList]);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div>
      <MyHeader
        headText={headText}
        leftChild={<MyButton text={"<"} onClick={decreaseMonth}></MyButton>}
        rightChild={<MyButton text={">"} onClick={increaseMonth}></MyButton>}
      ></MyHeader>

      <DiaryList diaryList={data}></DiaryList>
    </div>
  );
};

export default Home;
