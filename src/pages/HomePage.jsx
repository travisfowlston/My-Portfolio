import profilePic from "../assets/profile.jpg";

export default function HomePage() {
  return (
    <div className="container">
      <div className="mt-4 mb-4">
        <h1>Welcome to my portfolio!</h1>
      </div>
      <div className="mt-4 mb-4">
        <img src={profilePic} alt="Profile Picture" className="profile" />
      </div>
      <div className="mt-4 mb-4">
        <h2>About Me:</h2>
        <p>
          Hello there! I'm a passionate and dedicated web developer with a
          strong foundation in both front-end and back-end technologies. My
          journey in the world of coding has equipped me with a diverse set of
          skills that allow me to bring ideas to life through seamless and
          interactive user experiences. I am a problem solver at heart, always
          seeking elegant solutions to complex challenges. With a keen eye for
          detail and a commitment to staying updated with the latest
          technologies, I bring creativity and functionality together in every
          project I undertake. Let's collaborate to turn your ideas into digital
          realities!
        </p>
      </div>
      <div className="mt-4 mb-4">
        <h3>Front-end Proficiencies:</h3>
        <p>
          In the realm of front-end development, I am well-versed in the trio of
          HTML, CSS, and JavaScript. Crafting visually appealing and intuitive
          interfaces is my forte. I leverage the power of jQuery to enhance user
          interactions and ensure a smooth browsing experience. Responsive
          design is at the core of my approach, ensuring that websites are not
          just visually striking but also accessible across various devices and
          screen sizes. Embracing modern technologies, I have proficiency in
          React, a powerful JavaScript library for building dynamic user
          interfaces. My toolkit also includes Bootstrap, enabling me to create
          sleek and mobile-friendly designs with ease.
        </p>
      </div>
      <div className="mt-4 mb-4">
        <h3>Back-end Proficiencies:</h3>
        <p>
          On the back-end, I thrive in creating robust server-side applications.
          I harness the power of Node.js and Express to build scalable and
          efficient web servers. APIs are my building blocks, connecting
          different parts of a system and enabling seamless data exchange. In
          the database realm, I am adept at working with both relational
          databases using MySQL and Sequelize, as well as NoSQL databases such
          as MongoDB with Mongoose. Whether it's structuring data for optimal
          performance or ensuring data integrity, I've got it covered. I am
          well-versed in RESTful architecture, designing APIs that are not only
          functional but also adhere to best practices in web development.
          Additionally, I have experience in GraphQL, a powerful query language
          that allows for more efficient communication between the front-end and
          back-end.
        </p>
      </div>
    </div>
  );
}
