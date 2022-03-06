import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DiaryItem from "./DiaryItem";
import MyButton from "./MyButton";

const sortOptionList = [
  { value: "latest", name: "최신순" },
  { value: "oldest", name: "오래된 순" },
];

const filterOptionList = [
  { value: "all", name: "전부다" },
  { value: "good", name: "좋은 감정만" },
  { value: "bad", name: "안좋은 감정만" },
];

const ControlMenu = ({ value, onChange, optionList }) => {
  return (
    <select
      className="ControlMenu"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      {optionList.map((data, idx) => (
        <option key={idx} value={data.value}>
          {data.name}
        </option>
      ))}
    </select>
  );
};

const DiaryList = ({ diaryList }) => {
  const [sortType, setSortType] = useState("lastest");
  const [filter, setFilter] = useState("all");
  const navigate = useNavigate();

  const getProcessDiaryList = () => {
    const filterCallBack = (item) => {
      if (filter === "good") {
        return parseInt(item.emotion) <= 3;
      } else {
        return parseInt(item.emotion) > 3;
      }
    };

    const compare = (a, b) => {
      if (sortType === "latest") {
        return parseInt(b.date, 10) - parseInt(a.date, 10);
      } else {
        return parseInt(a.date, 10) - parseInt(b.date, 10);
      }
    };

    // const copyList = JSON.parse(JSON.stringify(diaryList));
    const copyList = diaryList.slice();
    const filteredList =
      filter === "all"
        ? copyList
        : copyList.filter((data) => filterCallBack(data));
    const sortedList = filteredList.sort(compare);

    return sortedList;
  };

  return (
    <div className="DiaryList">
      <div className="menu_wrapper">
        <div className="left_col">
          <ControlMenu
            value={sortType}
            onChange={setSortType}
            optionList={sortOptionList}
          ></ControlMenu>
          <ControlMenu
            value={filter}
            onChange={setFilter}
            optionList={filterOptionList}
          ></ControlMenu>
        </div>

        <div className="right_col">
          <MyButton
            type={"positive"}
            text={"새 일기쓰기"}
            onClick={() => navigate("/new")}
          ></MyButton>
        </div>
      </div>

      {getProcessDiaryList().map((data) => (
        <DiaryItem key={data.id} {...data}></DiaryItem>
      ))}
    </div>
  );
};

export default DiaryList;
