import React from "react";
import "./Team.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="services">
      <h5>What Skils I have</h5>
      <h2>My Experience</h2>
      <div className="container experience_container">
        <div className="profiles">
          <div class="card">
            <h3 class="title">Adarsh</h3>
            <h3 className="sub-title">Backend Developer</h3>
            <div className="circle">
              <img className="round" src="https://randomuser.me/api/portraits/women/79.jpg" alt="Profile Image" />
              <circle class="stroke" cx="60" cy="60" r="50" />
            </div>
          </div>
          <div class="card">
            <h3 class="title">Rishal Bazim</h3>
            <h3 className="sub-title">Frondend Developer</h3>
            <div class="circle">
              <img class="round" src="https://randomuser.me/api/portraits/women/79.jpg" alt="Profile Image" />
              <circle class="stroke" cx="60" cy="60" r="50" />
            </div>
          </div>
          <div class="card">
            <h3 class="title">SURAJ</h3>
            <h3 className="sub-title">Backend Developer</h3>
            <div class="circle">
              <img class="round" src="https://randomuser.me/api/portraits/women/79.jpg" alt="Profile Image" />
              <circle class="stroke" cx="60" cy="60" r="50" />
            </div>
          </div>
          <div class="card">
            <h3 class="title">Ajay</h3>
            <h3 className="sub-title">Backend Developer</h3>
            <div class="circle">
              <img class="round" src="https://randomuser.me/api/portraits/women/79.jpg" alt="Profile Image" />
              <circle class="stroke" cx="60" cy="60" r="50" />
            </div>
          </div>
          <div class="card">
            <h3 class="title">Nandha Kishore</h3>
            <h3 className="sub-title">Backend Developer</h3>
            <div class="circle">
              <img class="round" src="https://randomuser.me/api/portraits/women/79.jpg" alt="Profile Image" />
              <circle class="stroke" cx="60" cy="60" r="50" />
            </div>
          </div>
          <div class="card">
            <h3 class="title">Muhammad Sufiyan</h3>
            <h3 className="sub-title">Backend Developer</h3>
            <div class="circle">
              <img class="round" src="https://randomuser.me/api/portraits/women/79.jpg" alt="Profile Image" />
              <circle class="stroke" cx="60" cy="60" r="50" />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsPatchCheckFill  className='experience_details-icons'/>
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className='experience_details-icons'/>
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className='experience_details-icons' />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className='experience_details-icons'/>
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className='experience_details-icons'/>
              <div>
                <h4>React</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className='experience_details-icons'/>
              <div>
                <h4>Redux</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience_backend">
          <h3>Backend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsPatchCheckFill className='experience_details-icons'/>
              <div>
                <h4>Node JS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className='experience_details-icons'/>
              <div>
                <h4>MonogoDB</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className='experience_details-icons'/>
              <div>
                <h4>Express JS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className='experience_details-icons'/>
              <div>
                <h4>Firebase</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className='experience_details-icons'/>
              <div>
                <h4>Git/Github</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default Experience;
