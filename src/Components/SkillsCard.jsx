import React from 'react'

const SkillsCard = () => {
  return (
    <div>
      <div className='skill-card'>

        <div className='skill-item'>
          <h1>Skills Overview</h1>
          <h5 className='project-item'>
            I have more than 1 years' experience building rich web applications for clients all over the world. Below is a quick overview of my main technical skill sets and tools I use.</h5>
        </div>

      </div>
      <div className='skills'>
        <div className='skill-element'>
          <div className='image-filed'></div>
          <h3>Front-end</h3>

          <div className='skill-val'>
            <div style={{ 'color': 'blue', 'font-size': '25px' }} className='item-12'> &#10004;</div>
            <div className='item-12'> <h4>React</h4></div>
          </div>
          <div className='skill-val'>
            <div style={{ 'color': 'blue', 'font-size': '25px' }} className='item-12'> &#10004;</div>
            <div className='item-12'> <h4>JavaScript</h4></div>
          </div>
          <div className='skill-val'>
            <div style={{ 'color': 'blue', 'font-size': '25px' }} className='item-12'> &#10004;</div>
            <div className='item-12'> <h4>HTML/CSS</h4></div>
          </div>
          
        </div>
        <div className='skill-element'>
          <h3>Backend</h3>
          <div className='skill-val'>
            <div style={{ 'color': 'blue', 'font-size': '25px' }} className='item-12'> &#10004;</div>
            <div className='item-12'> <h4>Python/Django</h4></div>
          </div>
          <div className='skill-val'>
            <div style={{ 'color': 'blue', 'font-size': '25px' }} className='item-12'> &#10004;</div>
            <div className='item-12'> <h4>SQL/MySQL</h4></div>
          </div>
        </div>
        <div className='skill-element'>
          <h3>Others</h3>
          <div className='skill-val'>
            <div style={{ 'color': 'blue', 'font-size': '25px' }} className='item-12'> &#10004;</div>
            <div className='item-12'> <h4>Cricket</h4></div>
          </div>
          <div className='skill-val'>
            <div style={{ 'color': 'blue', 'font-size': '25px' }} className='item-12'> &#10004;</div>
            <div className='item-12'> <h4>Chess</h4></div>
          </div>
          
        </div>

      </div>
    </div>
  )
}

export default SkillsCard