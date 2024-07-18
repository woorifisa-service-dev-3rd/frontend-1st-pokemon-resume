import { hong, jo, choi, lee } from "./data.js";

const img_monsterball_1 = document.getElementById("img_monsterball_1");
const img_monsterball_2 = document.getElementById("img_monsterball_2");
const img_monsterball_3 = document.getElementById("img_monsterball_3");
const img_monsterball_4 = document.getElementById("img_monsterball_4");

const modal_profile_img_tech_1 = document
  .getElementById("modal")
  .contentWindow.document.getElementById("img_tech_1");
const modal_profile_img_tech_2 = document
  .getElementById("modal")
  .contentWindow.document.getElementById("img_tech_2");
const modal_profile_img_tech_3 = document
  .getElementById("modal")
  .contentWindow.document.getElementById("img_tech_3");
const modal_profile_img_tech_4 = document
  .getElementById("modal")
  .contentWindow.document.getElementById("img_tech_4");

// iframe속 변수
const modal_profile_name = document
  .getElementById("modal")
  .contentWindow.document.getElementById("profile_name");

const modal_profile_img = document
  .getElementById("modal")
  .contentWindow.document.getElementById("profile_img");

const modal_profile_appeard_area_1 = document
  .getElementById("modal")
  .contentWindow.document.getElementById("appeared_area_1");

const modal_profile_appeard_area_2 = document
  .getElementById("modal")
  .contentWindow.document.getElementById("appeared_area_2");

const modal_profile_hobby = document
  .getElementById("modal")
  .contentWindow.document.getElementById("profile_hoddy");

const modal_profile_hours = document
  .getElementById("modal")
  .contentWindow.document.getElementById("profile_hours");

const modal_profile_mbti = document
  .getElementById("modal")
  .contentWindow.document.getElementById("profile_mbti");

img_monsterball_1.addEventListener("mouseover", () => {
  setInfo(hong.data);
  console.log("여기자나" + hong.data.hobby);
});
img_monsterball_2.addEventListener("mouseover", () => {
  setInfo(jo.data);
});
img_monsterball_3.addEventListener("mouseover", () => {
  setInfo(choi.data);
});
img_monsterball_4.addEventListener("mouseover", () => {
  setInfo(lee.data);
});

function setInfo(personInfo) {
  modal_profile_name.textContent = `${personInfo.name} ${personInfo.github}`;
  modal_profile_img.src = personInfo.profile_img;
  // modal_profile_station = personInfo.stations;
  modal_profile_hobby.textContent = personInfo.hobby;
  modal_profile_hours.textContent = personInfo.hours;
  modal_profile_mbti.textContent = personInfo.mbti;
  modal_profile_img_tech_1.textContent = personInfo.tech_stack[0];
  modal_profile_img_tech_2.textContent = personInfo.tech_stack[1];
  modal_profile_img_tech_3.textContent = personInfo.tech_stack[2];
  modal_profile_img_tech_4.textContent = personInfo.tech_stack[3];
  //색상, 텍스트 넣기
  modal_profile_appeard_area_1.style.backgroundColor =
    personInfo.stations[0].station_color;
  modal_profile_appeard_area_1.textContent = personInfo.stations[0].name;

  modal_profile_appeard_area_2.style.backgroundColor =
    personInfo.stations[1].station_color;
  modal_profile_appeard_area_2.textContent = personInfo.stations[1].name;
}
