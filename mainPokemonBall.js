import { hong, jo, choi, lee } from "./data.js";

const img_monsterball_1 = document.getElementById("img_monsterball_1");
const img_monsterball_2 = document.getElementById("img_monsterball_2");
const img_monsterball_3 = document.getElementById("img_monsterball_3");
const img_monsterball_4 = document.getElementById("img_monsterball_4");

document.getElementById("modal").addEventListener("load", () => {
  const modalDocument = document.getElementById("modal").contentWindow.document;
  
  const modal_profile_img_tech_1 = modalDocument.getElementById("img_tech_1");
  const modal_profile_img_tech_2 = modalDocument.getElementById("img_tech_2");
  const modal_profile_img_tech_3 = modalDocument.getElementById("img_tech_3");
  const modal_profile_img_tech_4 = modalDocument.getElementById("img_tech_4");

  const modal_profile_name = modalDocument.getElementById("profile_name");
  const modal_profile_img = modalDocument.getElementById("profile_img");
  const modal_profile_appeard_area_1 = modalDocument.getElementById("appeared_area_1");
  const modal_profile_appeard_area_2 = modalDocument.getElementById("appeared_area_2");
  const modal_profile_hobby = modalDocument.getElementById("profile_hoddy");
  const modal_profile_hours = modalDocument.getElementById("profile_hours");
  const modal_profile_mbti = modalDocument.getElementById("profile_mbti");

  img_monsterball_1.addEventListener("mouseover", () => {
    setInfo(hong.data);
    console.log(hong.data.name);
  });
  img_monsterball_2.addEventListener("mouseover", () => {
    setInfo(jo.data);
    console.log(jo.data.name);
  });
  img_monsterball_3.addEventListener("mouseover", () => {
    setInfo(choi.data);
    console.log(choi.data.name);
  });
  img_monsterball_4.addEventListener("mouseover", () => {
    setInfo(lee.data);
    console.log(lee.data.name);
  });

  function setInfo(personInfo) {
    modal_profile_name.textContent = `${personInfo.name} ${personInfo.github}`;
    modal_profile_img.src = personInfo.profile_img;
    modal_profile_hobby.textContent = personInfo.hobby;
    modal_profile_hours.textContent = personInfo.hours;
    modal_profile_mbti.textContent = personInfo.mbti;
    modal_profile_img_tech_1.src = personInfo.tech_stack[0];
    modal_profile_img_tech_2.src = personInfo.tech_stack[1];
    modal_profile_img_tech_3.src = personInfo.tech_stack[2];
    modal_profile_img_tech_4.src = personInfo.tech_stack[3];

    modal_profile_appeard_area_1.style.backgroundColor = personInfo.stations[0].station_color;
    modal_profile_appeard_area_1.textContent = personInfo.stations[0].name;
    modal_profile_appeard_area_2.style.backgroundColor = personInfo.stations[1].station_color;
    modal_profile_appeard_area_2.textContent = personInfo.stations[1].name;
  }
});
