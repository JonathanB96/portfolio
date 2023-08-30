import React from 'react'
import '../styles/Projects.css'
import project1 from '../images/instrument-rental.png'
import project2 from '../images/phase-5-gif.gif'
import project3 from '../images/Phase-4-gif.gif'


export default function Projects() {

  
  return (
    <div className='portfolio'>
      <h3>PORTFOLIO</h3>
      <h2>Each project is a unique piece of development 🧩</h2>

                <div id="carouselExampleIndicators" class="carousel slide">
                <div class="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src={project1} class="d-block w-100" alt="..."/>
                  </div>
                  <div class="carousel-item">
                    <img src={project2} class="d-block w-100" alt="..."/>
                  </div>
                  <div class="carousel-item">
                    <img src={project3} class="d-block w-100" alt="..."/>
                  </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>

              <div className='projects'>

                            <div className='section'>
                      
                      <div className='project-div'>
                        <h4>INTSTRUMENT RENTAL 🎸</h4>
                        <p>A music instrument rental website is an online platform that allows users to rent instruments 
                          for personal or business use.
                           The website provides an interface for searching, comparing, and renting instruments.</p>       

                        <div> <button className= "btn btn-dark">
                          <a href='https://github.com/JonathanB96/instrument-rental-app'  target="_blank">Code 💻</a>
                          </button> 
                          
                              {/* <button className= "btn btn-light"><a href='https://instrumentrental.onrender.com/' target="_blank">Live Demo ↗️</a></button> */}
                        </div>
                      </div>

                    </div>

                    
                     <div className='section'>       

                      <div className='project-div'>
                        <h4>Mini eCommerce</h4>
                        <p>This is a minimalist e-commerce website built with React and CSS. This website features a modern and intuitive design, with easy-to-use navigation and a simple shopping experience that puts the focus on the products.</p>

                            

                        <div> <button className= "btn btn-dark"><a href='https://github.com/JonathanB96/minimalist-ecom/tree/main/portfolio-projects/mini-e-commerce'  target="_blank">Code 💻</a></button> 
                              <button className= "btn btn-light"><a href='https://minimalist-e-commerce.vercel.app/' target="_blank">Live Demo ↗️</a></button>
                        </div>
                      </div>

                    </div>

                     

                    <div className='section'>
                      
                      <div className='project-div'>
                        <h4>GAMELAND 🎮</h4>
                        <p>Gameland is an application that creates a review for a new or existing user. They can choose what game they need to leave a review for.
                           And upon creating their review they can edit, or delete each review. </p>
                        <div> <button className= "btn btn-dark"><a href='https://github.com/JonathanB96/my-phase-4-project'  target="_blank">Code 💻</a></button> 
                              
                        </div>
                      </div>

                    </div>

                    <div>
                      
                      {/* <div className='project-div'>
                        <h4>PLANTSY 🥀</h4>
                        <p>App description here</p>
                        <div> <button className= "btn btn-dark"><a href='https://github.com/JonathanB96/my-phase-4-project' target="_blank">Code 💻</a></button> 
                              <button className="btn btn-light"><a href='' target="_blank">Live Demo ↗️</a></button>
                        </div>
                      </div> */}

                     
                      </div>

              </div>

      


      
    </div>

  )
}
