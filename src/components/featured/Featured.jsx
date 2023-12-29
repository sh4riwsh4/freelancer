import React from 'react'
import "./Featured.scss"

const Featured = () => {
  return (
    <div className='featured'>
      <div className="container">
        <div className="left">
            <h1>Gasflşiwgqgaşklwgaklwg</h1>
            <div className="search">
                <div className="searchInput">
                    <img src="" alt="" />
                    <input type="text" placeholder='Deneme' />
                </div>
                <button>Search</button>
            </div>
            <div className="popular">
                <span>Popular:</span>
                <button>Web Design</button>
                <button>Grafik Tasarım</button>
                <button>Mobil Geliştirme</button>
                <button>Yapay Zeka</button>
            </div>
        </div>
        <div className="rigth"></div>
      </div>
    </div>
  )
}

export default Featured