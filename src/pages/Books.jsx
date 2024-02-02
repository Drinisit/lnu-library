import React from 'react'
import Navbar from '../components/Navbar'
import Search from '../components/Search'
import BookList from '../data'

const Books = () => {
  return (
    <div>
      <Navbar />
      <Search />

        <div className='w-full'>

          <div className='max-w-[1240px] mx-auto px-4 py-6'>

          <h1>Books display here!</h1>

              <div className='bg-amber-500 p-2'>
                <div className='bg-amber-200 p-4 grid grid-cols-4'>
                  {BookList.map( (booklist) => {
                    return (
                      <div key={booklist.id}>
                        <div>
                          <div>
                            <img src={booklist.image} alt="" />
                          </div>
                          <div>
                            <h1>{booklist.title}</h1>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

          </div>

        </div>

    </div>
  )
}

export default Books