import React from "react";
import Image from "next/image";

import left_cloud from "../../public/left_cloud.png";
import right_clouds from "../../public/right_clouds.png";
import mobiles from "../../public/mobiles2.png";
const Promotion = () => {
  return (
    <section className="relative overflow-hidden bg-red-200/20 h-[40rem]">

      <Image src={left_cloud} alt="left cloud" className="absolute bottom-0 w-[13%]" />

      <div className="container-box text-primary-blue">
        <div className="absolute top-[50%] left-40 w-[50%] text-end space-y-4">            
          <h2 className="text-4xl font-bold"> احصل على تجربتك المثالية مع تطبيقتنا</h2>
          <p className=" text-2xl font-normal"> اكتشف تجربة سلسة ومخصصة مع كل الأدوات التي تحتاجها في متناول يدكو سواء كنت في المنزل أول في الخارج , فإن تطبيقنا يبقيك على اتصال ويبقيك تحت السيطرة في اي وقت وفي اي مكان</p>
          
        </div>
          <Image src={mobiles} alt="mobiles" className="absolute right-40 top-20 "/>
     </div> 

      <Image src={right_clouds} alt="right cloud" className="absolute right-0 bottom-0 w-[10%]" />

    </section>
  );
};
export default Promotion;

