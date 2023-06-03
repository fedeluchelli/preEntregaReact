import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";

const TitlebarBelowImageList = () => {
  return (
    <ImageList sx={{ width: 500, height: 450 }}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={<span>by: {item.author}</span>}
            position="below"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default TitlebarBelowImageList;

const itemData = [
  {
    img: "http://admin.digitalsport.com.ar/files/uploads/DIO%20AGOSTO%2021/Jordan%201%20Retro%20High%20Shadow%202-0.png",
    title: "Air Jordan 1",
    author: "NIKE",
  },
  {
    img: "https://www.si.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_xy_center%2Cq_auto:good%2Cw_1200%2Cx_482%2Cy_649/MTkyMjExNTYwODgwNDE1OTgw/shaq-attack.jpg",
    title: "Shaq Attack",
    author: "REEBOK",
  },
  {
    img: "https://www.greyflannelauctions.com/ItemImages/000032/0111b_Auc42_lg.jpeg",
    title: "Manu Ginobilli '06",
    author: "NIKE",
  },
  {
    img: "https://media.jdsports.com/i/jdsports/DM0825_400_P2?$default$&w=670&h=670&bg=rgb(237,237,237)",
    title: "Giannis Aantetokounmpo",
    author: "NIKE",
  },
];
