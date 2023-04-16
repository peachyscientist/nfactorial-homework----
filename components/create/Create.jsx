import React from 'react'
import "./create.css"
import { IoIosAddCircleOutline } from "react-icons/io"


const Create = () => {
  return (
    <>
        <section className='newPost'>
            <div className="container boxItems">
                <div className='img'>
                </div>
                <form>
                <div className='inputfile flexCenter'>
              <input type='file' accept='image/*' alt='img' />
            </div>
            <input type='text' placeholder='Заголовок' />

            <textarea name='' id='' cols='30' rows='10' placeholder='Текст заметки'></textarea>

            <button className='button'>Создать заметку</button>
            </form>

            </div>

        </section>
    </>
  )
}

export default Create
