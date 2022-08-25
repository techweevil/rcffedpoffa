import React from 'react'
import { motion } from 'framer-motion'
import Container from '../../helpers/Container'
import Button from '../../helpers/Button'
import person1 from '../../../images/person1.png'
import person2 from '../../../images/person2.png'
import person3 from '../../../images/person3.png'


const AboutUs = () => {
    return (
      <section className={`flex flex-col items-center `}>
        <Container>
          <div className="my-[4rem] ">
            <div className="text-center">
              <h3 className="font-bold tracking-[.5rem] text-[1.2rem]">
                RCF FEDPOFFA
              </h3>
              <h1 className="md:text-[64px] text-[42px] font-[700] md:leading-[82px] leading-[60px] my-[1.8rem]">
                LOVE AND COMPASSION
              </h1>
              <p className="md:text-[1.2rem]">
                <span>
                  <b>
                    <i>“Love your neighbor as yourself.” (Mark 12:31)</i>
                  </b>
                </span>{" "}
                God created us to love others and to be loved by others. It’s
                one of the core principles of Christianity. When we love our
                neighbors, we are following God’s will for us. Love and
                compassion are definitely the essences of human life.
              </p>
            </div>
            <div className="flex flex-col gap-3 items-center my-[2rem]">
              <button onClick={() => alert("coming soon!")}>
                <Button name={"READ MORE"} />
              </button>

              <div className="  flex md:flex-row flex-col md:gap-10 gap-2">
                <motion.div whileHover={{ scale: 1.09 }}>
                  <img
                    className=" shadow-2xl w-[290px] "
                    src={person1}
                    alt=""
                  />
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.09 }}
                  className="md:mt-[3rem] shadow-2xl "
                >
                  <img className="w-[290px] " src={person2} alt="" />
                </motion.div>
                <motion.div whileHover={{ scale: 1.09 }}>
                  <img
                    className=" shadow-2xl w-[290px] "
                    src={person3}
                    alt=""
                  />
                </motion.div>
              </div>
            </div>

            {/* <div className="text-center">
              <h3 className="font-bold tracking-[.5rem] text-[1.2rem]">
                OUR VISION AND MISSION
              </h3>
              <h1 className="md:text-[64px] text-[42px] font-[700] md:leading-[82px] leading-[60px] my-[1.8rem]">
                CELEBRATE WITH US
              </h1>
              <p className="md:text-[1.2rem]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nis
              </p>
              <button onClick={() => alert("coming soon!")}>
                <Button name={"READ MORE"} />
              </button>
            </div> */}
          </div>
        </Container>
      </section>
    );
}

export default AboutUs