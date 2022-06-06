const bars = document.querySelectorAll(".bar > div");
const values = document.querySelectorAll(".hover");

const getData = async () => {
  const res = await fetch("./data.json");
  const data = await res.json();
  console.log(data);

  bars.forEach((bar, index) => {
    bar.addEventListener("mouseover", () => {
      values[index].innerHTML = "$" + data[index].amount;
    });
  });
};

getData();
