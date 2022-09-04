import React from "react";
import Container from "../../helpers/Container";
import Card from "./Card";
import aboutus from "./svgs/aboutus.svg";
import getInvolved from "./svgs/getInvolved.svg";
import givingBack from "./svgs/givingBack.svg";

const cards = [
  {
    title: "ABOUT US",
    svg: aboutus,
    text: "We are a Family of God, and we are One, no matter your color or race, the background you are from, through His love we are in order joined with a cord that cant be broken, we are called to please one another, sharing our lives to please one another agape LOVE God's Love is what we operate in this great RCF Family.",
  },
  {
    title: "GET INVOLVED",
    svg: getInvolved,
    text: "Get involved in the community, get involved, get informed!, be a part of the family, ",
  },
  {
    title: "GIVING BACK",
    svg: givingBack,
    text: " Test me in this,” says the Lord Almighty, “and see if I will not throw open the floodgates of heaven and pour out so much blessing that there will not be room enough to store it... sow into God's work and watch Him work for You.",
  },
];

const WhatWeAre = () => {
  return (
    <section className="flex flex-col items-center mt-[8rem]">
      <Container>
        <div className="w-full">
          <div className="text-center">
            <h3 className="font-bold tracking-[.5rem] text-[1.2rem]">
              RCF FEDPOFFA
            </h3>
            <h1 className="md:text-[64px] text-[42px] font-[700] md:leading-[82px] leading-[60px] my-[1.8rem]">
              A CHURCH THAT'S RELEVANT
            </h1>
          </div>

          <div className="mb-[2rem] md:justify-between flex md:flex-row flex-col gap-5 w-full">
            {cards.map((card) => (
              <Card title={card.title} svg={card.svg} text={card.text} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WhatWeAre;
