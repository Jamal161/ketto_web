import React, { useState } from 'react'
import styles from "./Crowd.module.css";
import { CrowdVideo } from './CrowdVideo';
import data from "./work.json"
import { Raisefund } from './Raisefund';
import data1 from "./work.json"
import Carousel from 'react-elastic-carousel';



export const Test = () => {
    const [details,] = useState(data);
    const [details1,] = useState(data1);
    const st = JSON.parse(localStorage.getItem("user"))
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 1, itemsToScroll: 2, pagination: false },
        { width: 850, itemsToShow: 1 },
        { width: 1150, itemsToShow: 2, itemsToScroll: 2 },

    ]
    var user;
    if (st) {
        user = st.status;

    }
    else {
        user = false
    }


    return (
        <>
            
            <div className={styles.feature}>
                <Carousel className='inline-flex'>

                    <div>
                        {details1.map((item) => {
                            return <Raisefund data1={item} />
                        })}

                    </div>
                    <div>
                        {details1.map((item) => {
                            return <Raisefund data1={item} />
                        })}

                    </div>
                    <div>
                        {details1.map((item) => {
                            return <Raisefund data1={item} />
                        })}

                    </div>
                    <div>
                        {details1.map((item) => {
                            return <Raisefund data1={item} />
                        })}

                    </div>

                    <div>
                        {details1.map((item) => {
                            return <Raisefund data1={item} />
                        })}

                    </div>


                    <div>
                        {details1.map((item) => {
                            return <Raisefund data1={item} />
                        })}

                    </div>

                </Carousel>


            </div>
          



        
          
        </>
    )
}

export default Test;