import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./details.css"
import "../../components/header/Header.css"
import { blog } from "../../assets/data/data";
import { BsPencilSquare } from "react-icons/bs"
import { AiOutlineDelete } from "react-icons/ai"


export const Details = () => {
    const {id} = useParams()

    const[blogs,setBlogs] = useState(null)

    useEffect(() =>{
        let blogs = blog.find((blogs) => blogs.id === parseInt(id))
        if(blogs){
            setBlogs(blogs)
        }
    }, [])

    return (
    <>
    {blogs ? (

        <section className="singlePost">
            <div className="container">
                <div className="left">
                </div>
                <div className='right'>
             
              </div>
              <h1>Об инситуте </h1>
              <p>{blogs.desc}</p>
              <h3>Республиканское государственное предприятие на праве хозяйственного ведения "Институт ботаники и фитоинтродукции" Комитета лесного хозяйства и животного мира Министерства экологии и природных ресурсов Республики Казахстан.</h3>
              <h3>Институт организован в 1932 году. Целью деятельности Института является проведение фундаментальных и прикладных инновационных исследований в области ботаники и фитоинтродукции с учетом достижений мировой науки.
Институт включает в себя Главный Ботанический сад площадью 103,6 га, Жезказганский и Илийский Ботанические сады, а также созданный в 2018 году Ботанический сад в Астане.
Главный Ботанический сад — особо охраняемая природная территория Республиканского значения со статусом природоохранной и научной организации, предназначенная для проведения исследований и научных разработок по охране, защите, воспроизводству и использованию растительного мира, в том числе редких и находящихся под угрозой исчезновения видов растений.</h3>
            </div>
            <div className='buttons'>
                <button className='button'>
                  <BsPencilSquare/>
                </button>
                <button className='button'>
                  <AiOutlineDelete />
                </button>
            </div>
        </section>): null}
    </>
    )
}

export default Details
