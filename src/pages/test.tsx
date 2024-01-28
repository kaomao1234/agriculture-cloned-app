import React, { FC } from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button, IconButton } from "@mui/material";
import { IoIosArrowForward } from "react-icons/io";

interface itemProps {
  item: {
    name: string;
    description: string;
  };
}

export default function Example() {
  var items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
    },
    {
      name: "Random Name #3",
      description: "Hello World!",
    },
  ];

  return (
    <Carousel
      //   indicators={true}
      //   navButtonsAlwaysVisible={true}
      animation="slide"
      swipe={true}
      indicators={false}
      cycleNavigation={false}
      fullHeightHover={true}
      autoPlay={false}
      navButtonsProps={{
       style:{
        backgroundColor:"transparent",
        textDecorationColor:"white",
        opacity:"1",
        top:"0"
       }
      }}
      navButtonsAlwaysVisible
    >
      {items.map((item, i) => (
        <div className="bg-red-400 p-10" key={i}>
          <Item key={i} item={item} />
        </div>
      ))}
    </Carousel>
  );
}

const Item: FC<itemProps> = (props) => {
  return (
    <Paper>
      <h2>{props.item.name}</h2>
      <p>{props.item.description}</p>

      <Button className="CheckButton">Check it out!</Button>
    </Paper>
  );
};
