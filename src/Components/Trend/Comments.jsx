import React, { useEffect, useState } from 'react'
import styles from "./Trend.module.css";
import {Test} from "../Work/test"


const Comments = () => {

    const [users, Setusers] = useState([])
    const [mydetails, setMydetails] = useState(true)
    const [update, setupdate] = useState(false)
    const [doc, setdoc] = useState(false)
    const [about1, setabout] = useState(false)







    const getUsers = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/comments')
        Setusers(await res.json())
        //    console.log(res)

    }
    useEffect(() => {

        getUsers()
    }, [])


    const handledetails = () => {
        setMydetails(!mydetails)
        setupdate(false)
        setdoc(false)
        setabout(false)



    }
    const handledeupdata = () => {
        setupdate(!update)
        setMydetails(false)
        setdoc(false)
        setabout(false)

    }

    const handlededocument = () => {
        setdoc(!doc)
        setMydetails(false)
        setupdate(false)
        setabout(false)


    }
    const handledeabout = () => {
        setabout(!about1)
        setdoc(false)
        setMydetails(false)
        setupdate(false)


    }



    return (

        <div className={styles.apiContainer}>
            <div className={styles.left1}>
                <p onClick={() => handledeabout()}> <i style={{ color: "#01bfbd" }} className="fas fa-globe"></i>  About</p>
                <p onClick={() => handlededocument()}> <i className="far fa-file-alt"></i> Documents</p>
                <p onClick={() => handledeupdata()}>
                    <i className="fas fa-history"></i>  Updates</p>

                <p onClick={() => handledetails()}>
                    <i style={{ color: "grey" }} className="fas fa-comment"></i>
                    Comments</p>
  
             
            </div>

            <hr className='bg-info items-sm top-5'></hr>
           <div>
             <h1 className='text-center'>About the Fundraiser</h1>
             <p>My son has been fighting for his life since he was a 5-year-old. Now years later, he is still fighting. However, the cancer seems to take more and more control of his body.

I can’t help but think, will God spare my child this time or will cancer actually take him away from me?</p>
<img src="/pic.png" alt="Fundraisers" /><br></br>
<p>What goes on in a mother’s mind when any time she visits the hospital with her son, she is informed that his cancer has relapsed?

Having faced that situation thrice, I pray to God none of the parents ever have the ill fortune to witness their own child suffering from cancer from time and again.

My family's happiness lies in Abir. Him being the youngest member of my family of four, all of us are accustomed to his joyous and playful. When he became extremely sick the first time, he was scared and sad. Yet he tried to cheer all of us up as much as he could.</p>
           </div>
           <br></br>
            <div className={styles.inputget}>
                <input type="text" placeholder="write something" />
                <button >POST</button>

            </div>

            <div className={styles.displayitem}>


                {mydetails &&
                    users.slice(1,3).map((item, i) => {
                        if (i > 5) {
                            return "";
                        }

                        const com = "https://picsum.photos/200/300"


                        return (

                            <>
                                <div className={styles.designheadget} key={item.id} >

                                    <div className={styles.getimg}>
                                        <img height="50px" width="50px" src={com} alt="" />
                                    </div>
                                    <div className={styles.apiget}>
                                        {item.email}
                                        <div className={styles.bodyget}>
                                            {item.body}

                                        </div>
                                    </div>
                                </div>


                          <br></br>


                            </>


                        )

                    })

                }







                {/*------------------------------- document */}

                {doc &&
                    <div>
                        <h3 style={{ textAlign: "center", fontFamily: "sans-serif", marginTop: "-10px" }}>Documents</h3>
                        {

                            users.slice(1,3).map((item, i) => {
                                if (i > 0) {
                                    return ""
                                }
                                return (

                                    <>
                                        <div className={styles.designheadget} key={item.id} >

                                            <div className={styles.getdoc}>
                                                <img src="https://kettocdn.gumlet.io/media/campaign/167000/167947/image/5e60cd208b52f.png?w=750&dpr=1.0" alt="" />

                                                <img src="https://kettocdn.gumlet.io/media/campaign/167000/167947/image/5e60cd208b52f.png?w=750&dpr=1.0" alt="" />

                                            </div>


                                        </div>

                                    </>


                                )





                            })

                        }
                    </div>

                }


                {/*------------------------------------------------------------ about */}


                {about1 &&


                    <div>
                        <h3 style={{ textAlign: "center", fontFamily: "sans-serif" }}>About the Fundraiser</h3>
                        {

                            users.slice(1,3).map((item, i) => {
                                if (i > 5) {
                                    return "";
                                }
                                return (

                                    <>
                                        {/* <div className={styles.designheadget}> */}


                                        <div className={styles.aboutget} key={item.id} >
                                            {item.body}


                                        </div>
                                        {/* </div> */}






                                    </>


                                )

                            })
                        }


                    </div>

                }

                {/*---------------------------- update------------------------ */}
                {update &&

                    <div>
                        <h3 style={{ textAlign: "center", fontFamily: "sans-serif", marginTop: "-10px" }}>Thank You For Your Support!</h3>
                        {


                            users.slice(1,3).map((item, i) => {
                                if (i > 5) {
                                    return ""
                                }
                                return (

                                    <>
                                        <div className={styles.designheadget} key={item.id}>

                                            <div className={styles.getimgupdate1}>

                                                <img src="https://picsum.photos/200/300" alt="" />
                                            </div>
                                            <div className={styles.apiget}>
                                                <div className={styles.bodyget}>
                                                    {item.body}

                                                </div>
                                            </div>
                                        </div>





                                    </>



                                )

                            })
                        }
                    </div>

                }





            </div>

         
        </div>


    )
}

export { Comments }