import React from "react";
import Story from "./Story";
import "./Story.css";

function Stories() {
  return (
    <div className=" flex">
      <Story
        image="https://images.pexels.com/photos/18958469/pexels-photo-18958469/free-photo-of-smiling-woman-with-tinsel-garland-around-her-neck-and-christmas-bubble-on-her-head.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        title="Margarida da Mota"
        profileSrc="https://images.pexels.com/users/avatars/342801918/margarida-da-mota-274.jpeg?auto=compress&fit=crop&h=50&w=50&dpr=1"
      />
      <Story
        image="https://images.pexels.com/photos/11331357/pexels-photo-11331357.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        title="Caique Araujo"
        profileSrc="https://images.pexels.com/users/avatars/101156227/caique-araujo-878.jpeg?auto=compress&fit=crop&h=50&w=50&dpr=1"
      />
      <Story
        image="https://images.pexels.com/photos/19381548/pexels-photo-19381548/free-photo-of-portrait-of-a-young-woman-with-pink-dyed-hair.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        title="Carlos Santiago"
        profileSrc="https://images.pexels.com/users/avatars/421908853/carlos-santiago-316.jpeg?auto=compress&fit=crop&h=50&w=50&dpr=1"
      />
      <Story
        image="https://images.pexels.com/photos/19329216/pexels-photo-19329216/free-photo-of-a-dog-sitting-on-a-table-with-food-and-a-beer.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        title="Efe Esroy"
        profileSrc="https://images.pexels.com/users/avatars/393937500/efe-ersoy-951.jpeg?auto=compress&fit=crop&h=130&w=130&dpr=1"
      />
      <Story
        image="https://images.pexels.com/photos/19328647/pexels-photo-19328647/free-photo-of-hot-air-balloons-flying-over-cappadocia-turkey.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        title="Ahmed"
        profileSrc="https://images.pexels.com/users/avatars/3479092/ahmed-157.jpeg?auto=compress&fit=crop&h=50&w=50&dpr=1"
      />
    </div>
  );
}

export default Stories;
