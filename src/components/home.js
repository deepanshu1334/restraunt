import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import Fooddata from "./data"


const Home = () => {

    //creating state , setmenu to update the menu
    const [menu, setMenu] = useState(Fooddata);
    // console.log(menu);

    //fileter on the bassis of categories, passing categories on the onclick 
    const filteritems=(curiteams)=>{
        // console.log(curiteams)
        const updateitems= Fooddata.filter((cur,ind)=>{
            return cur.category === curiteams;
        })
        //updating the menu 
        setMenu(updateitems);
    }

    return (
        <>
            <section className='container mt-2'>
                <h2 className='text-center mb-2' style={{ fontWeight: 400 }}>Search Your Food</h2>

{/* onclick the button we provide categories */}
                <div className='btn-container d-flex justify-content-around mt-2'>
                    <Button variant="primary" onClick={()=>filteritems("punjabi")}>Punjabi</Button>{' '}
                    <Button variant="success" onClick={()=>filteritems("vadapav")} >vadapav</Button>{' '}
                    <Button variant="danger" onClick={()=>filteritems("pizza")} >Pizza</Button>{' '}
                    <Button variant="primary" onClick={()=>filteritems("Chai")} >Chai</Button>{' '}
                    <Button variant="success" onClick={()=>filteritems("Frankie")}>Franki</Button>{' '}
                    <Button variant="primary" onClick={()=>setMenu(Fooddata)}>All</Button>{' '}

                </div>

                <div className='container mt-3'>
                    <div className='row d-flex justify-content-around align-items-center'>
                        {
                            menu.map((el, ind) => {
                                return (
                                    <>

                                        <Card style={{ width: '22rem',border:"none" }} className='mx-2 mt-4'>
                                            <Card.Img variant="top" src={el.imgdata} style={{height:"16rem"}} className='mt-3'/>
                                            <Card.Body>
                                                <Card.Title>{el.rname}</Card.Title>
                                                <Card.Text>
                                                    price:{el.price}
                                                </Card.Text>
                                                <Button variant="primary">Go somewhere</Button>
                                            </Card.Body>
                                        </Card>
                                    </>
                                )
                            })
                        }



                    </div>
                </div>






            </section>

        </>
    )
}

export default Home