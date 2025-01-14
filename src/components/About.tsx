import React from 'react'

const About: React.FC = () => {
  return (
    <div className="bg-primary py-12 lg:h-[500px]">
      <div className="container px-4 lg:px-0">
        <div className="lg:ml-[420px] text-white sm:m-12 lg:mx-0">
          <span className="text-4xl font-bold text-rose-400 block sm:inline">KNOW SARIKA</span>
          <div className="mt-2">
            <p className="text-white text-xl lg:text-2xl lg:w-[780px] sm:m-4 lg:ml-[0px]">
               I am a senior Computer Science undergraduate student from Pokhara, Nepal.
              <br />
              <br />
              In tech, I would introduce myself as a fullstack developer based on JavaScript. I learn about secure web development as well. I love attending events, workshops and conferences as well as organizing them.
              <br />
              <br />
              I like to know and understand the world I see better through science. I like learning and growing in a team and community. I love reading fictional and non-fictional books and exploring other fields in tech as well.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
