import React from 'react'

const About: React.FC = () => {
  return (
    <div className="bg-primary py-12 lg:h-[500px]">
      <div className="container px-4 lg:px-0">
        <div className="lg:ml-[420px] text-white sm:m-12 lg:mx-0">
          <span className="text-4xl font-bold text-rose-400 block sm:inline">KNOW SARIKA</span>
          <div className="mt-2">
            <p className="text-white text-xl lg:text-2xl lg:w-[780px] sm:m-4 lg:ml-[0px]">
              Hi, this is Sarika Ghimire. I am a Computer Science undergraduate student from Pokhara. 
              <br />
              <br />
              In tech, I would introduce myself as a frontend developer pursuing full stack development based on JavaScript. I learn about secure web development as well.
              <br />
              <br />
              I love attending events, workshops and conferences as well as organizing them. I like learning and growing in a team and community. I love reading fictional and non-fictional books.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
