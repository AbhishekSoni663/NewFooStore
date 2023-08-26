import React from 'react'
import '../About/NewAbout.css'

const NewAbout = () => {
  return (
    <div>
        <div className="page">
  <h1></h1>
  <div className="pcss3t pcss3t-effect-scale pcss3t-theme-1">
    <input
      type="radio"
      name="pcss3t"
      defaultChecked
      id="tab1"
      className="tab-content-first"
    />
    <label htmlFor="tab1">
      <i className="icon-bolt"></i>MySelf
    </label>
    <input
      type="radio"
      name="pcss3t"
      id="tab2"
      className="tab-content-2"
    />
    <label htmlFor="tab2">
      <i className="icon-picture"></i>Key Feature
    </label>
    <input
      type="radio"
      name="pcss3t"
      id="tab3"
      className="tab-content-3"
    />
    <label htmlFor="tab3">
      <i className="icon-cogs"></i>Short Review
    </label>
    <input
      type="radio"
      name="pcss3t"
      id="tab5"
      className="tab-content-last"
    />
    <label htmlFor="tab5">
      <i className="icon-globe"></i>Thanks Note
    </label>
    <ul>
      <li className="tab-content tab-content-first typography">
        <h1>About Myself</h1>
        <p>
          "Passionate FullStack developer eager to embark on an exciting
          journey in the world of software development. Equipped with a
          solid foundation in both front-end and back-end technologies, I
          possess a strong understanding of modern web development
          practices. During my studies and personal projects, I have
          gained experience in building responsive and user-friendly web
          applications using technologies such as HTML, CSS, JavaScript,
          React, Node.js, and databases like and MongoDB.
        </p>
        <p>
          I thrive in collaborative environments where I can contribute my
          problem-solving skills and attention to detail to create
          innovative solutions. With a constant thirst for knowledge and a
          drive to stay updated with the latest industry trends, I am
          dedicated to continuous learning and professional growth. As a
          self-motivated individual, I enjoy taking ownership of projects,
          working in agile teams, and delivering high-quality results. I
          am excited to leverage my skills to tackle new challenges and
          contribute to the success of a dynamic organization.
        </p>
        <p className="text-right">
          <em>Abhishek Soni</em>
        </p>
      </li>
      <li className="tab-content tab-content-2 typography">
        <h1>Feature</h1>
        <p>
          One key feature of developing a food app in React using context
          is centralized state management. By utilizing React's context
          API, you can create a global state that can be accessed and
          updated by multiple components throughout your application. This
          eliminates the need for prop drilling (passing data through
          multiple components) and simplifies the process of sharing data
          between different parts of your app.
        </p>
        <p>
          With context, you can store important data related to your food
          app, such as user authentication status, shopping cart items, or
          user preferences. Any component that needs access to this data
          can simply consume the relevant context and retrieve or update
          the state as required, without having to pass props through
          multiple levels of the component tree.
        </p>
        <p>
          <em>
            This centralized state management approach improves code
            organization, reduces redundancy, and enhances reusability,
            making it easier to maintain and scale your food app in the
            long run.
          </em>
        </p>
      </li>
      <li className="tab-content tab-content-3 typography">
        <h1>Review</h1>
        <p>
          I recently had the pleasure of using "Good Mood," a React-based
          food app powered by Context, and I must say it exceeded all my
          expectations. This app is a true game-changer for anyone
          passionate about food and cooking.From the moment I opened the
          app, I was captivated by its impressive features.The user
          experience was seamless and intuitive. Navigating through
          recipes, tutorials, and the vibrant community was a breeze.
          Thanks to React's Context, the app was lightning fast and
          responsive, enhancing my overall experience.{" "}
        </p>
        <p>
          The responsive design allowed me to access the app seamlessly on
          various devices. Whether I was cooking in the kitchen or
          planning meals on the go, I could rely on the app's consistency
          and adaptability.
        </p>
        <p>
          <em>
            In conclusion, "Good Mood" is a remarkable app that has
            revolutionized my culinary journey. With its impressive
            features, seamless user experience, and the power of React and
            Context, it has become an essential tool for anyone passionate
            about food.
          </em>
        </p>
      </li>
      <li className="tab-content tab-content-last typography">
        <div className="typography">
          <h1>Thank You</h1>
          <p></p>
          <p>
            Thank you for exploring our React-based food app, "Good Mood"!
            We appreciate your time and interest in experiencing the
            innovative features and functionalities we have to offer. We
            hope you enjoyed discovering our vast collection of recipes,
            personalized recommendations, and seamless user experience.
            Our goal is to provide a delightful and convenient platform
            for food enthusiasts like you to explore new dishes, improve
            culinary skills, and connect with a vibrant community of
            fellow food lovers. Your feedback and support mean a lot to us
            as we strive to continuously enhance the app and make it even
            better.
          </p>
          <p>
            We value your input and encourage you to share any suggestions
            or ideas that could further enhance your experience with "Good
            Mood." We are dedicated to providing a top-notch culinary
            journey with the power of React and Context. We believe that
            cooking should be a joyous and fulfilling experience, and we
            hope our app brings that joy to your kitchen. Once again,
            thank you for visiting "Food Delight." We look forward to
            serving you with more exciting recipes, interactive tutorials,
            and a thriving community of food enthusiasts. Happy cooking!
          </p>
          <p className="text-right">
            <em>
              Best regards,
              <br />
              The "Good Mood" Team
            </em>
          </p>
        </div>
      </li>
    </ul>
  </div>
</div>
      
    </div>
  )
}

export default NewAbout
