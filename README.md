// 1. 컴포넌트를 props로 넘겨준다는 점 (MyButton 재사용성 극대화)
{
/_ <MyHeader
headText={"App"}
leftChild={
<MyButton
text={"왼쪽 버튼"}
onClick={() => alert("왼쪽 클릭")} ></MyButton>
}
rightChild={
<MyButton
text={"오른쪽 버튼"}
onClick={() => alert("오른쪽 클릭")} ></MyButton>
} ></MyHeader> _/
}

{
/_ <MyButton
text={"버튼"}
onClick={() => alert("버튼 클릭")}
type={"positive"} ></MyButton>
<MyButton
text={"버튼"}
onClick={() => alert("버튼 클릭")}
type={"negative"} ></MyButton>
<MyButton
text={"버튼"}
onClick={() => alert("버튼 클릭")}
type={""} ></MyButton> _/
}
