import Image from "next/image"

export default function Home() {
  return (
  <div className="main-content">
    <section id="intro" className="content-section">
      <Image src="/prof_pic.jpg" alt="Justin Cucuzza's headshot" width="300" height="300"/>
      <h1 className="text-4xl">Junior Full-Stack Developer</h1>
      <h2 className="text-2xl">(Frontend Focus)</h2>
    </section>

    <section id="about" className="content-section">
      <h1 className="text-4xl">About Me</h1>
      <p className="text-xl">I'm a Full-Stack Developer with a focus on 
        Frontend Development. I have obtained a B.S. in Computer Science, 
        with an Emphasis in Data Science, and a Minor in Mathematics. Most of 
        the work I've done has been developing web applications using React, 
        Angular, and Vue, with TypeScript and JavaScript. I've also created 
        Backend RESTful API services using Python with Django and FastAPI. 
      </p>
      <br />
      <p className="text-xl">My previous work experience includes working as a
        Software Developer for KPMG - focusing on Frontend development using
        Typescript. I have also worked as an Application Development Services
        Intern for International Paper working with JavaScript. You can 
        <a href="/Cucuzza_Justin_Resume_11-23.pdf" target="_blank"> read my 
        full resume here</a>
      </p>
    </section>

    <section id="skills" className="content-section">
      <h1 className="text-4xl">Skills</h1>
      <br />
      <div className="row">
        <div className="column">
          <div className="card text-lg">
            <h2 className="text-2xl">Web Development</h2>
            <ul>
              <li>TypeScript (and JavaScript)
              <ul>
              <li>React</li>
              <li>Angular</li>
              <li>Vue</li>
              </ul>
              </li>
              <li>Python
                <ul>
                  <li>Django</li>
                  <li>FastAPI</li>
                </ul>
              </li>
              <li>Java
                <ul>
                  <li>Spring Boot</li>
                </ul>
              </li>

            </ul>
          </div>
        </div>

        <div className="column">
          <div className="card text-lg">
            <h2 className="text-2xl">Scripting / Software</h2>
            <ul>
              <li>C/C++</li>
              <li>C#
                <ul>
                  <li>Godot</li>
                  <li>Unity</li>
                </ul>
              </li>
              <li>SQL
                <ul>
                  <li>MySQL</li>
                  <li>PostgreSQL</li>
                </ul>
              </li>
              <li>R</li>
              <li>ClojureScript (learning)</li>
            </ul>
          </div>
        </div>
        </div>
    </section>
  </div>
  )
}
