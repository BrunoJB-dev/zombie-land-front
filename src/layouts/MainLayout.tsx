import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

import "../styles/index.scss"

function MainLayout (){
  return(
    <div>
      <Header />
      <h1>Je suis un H1</h1>
      <h2>Je suis un H2</h2>
      <h3>Je suis un H3</h3><br></br>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ratione, voluptatem neque voluptates totam perspiciatis ea delectus dolorem eveniet! A expedita architecto temporibus rerum ut nobis eaque sint sapiente quod.
      Magnam rem eaque dicta quod vero quibusdam tempore, nemo quam numquam odit cum, nostrum laboriosam, nisi est consequuntur quia facere perferendis! Maiores laudantium sequi, sapiente eveniet voluptate repudiandae porro laboriosam?
      Odit perspiciatis illum deleniti repellat ipsum iste est, error saepe eum expedita non voluptates, incidunt quae molestias optio nisi quam, corporis dolore. Molestias, qui? Eius non modi nemo fugiat sequi.
      Ratione porro, minima dolore deleniti quia inventore tempora animi soluta cumque vitae reprehenderit assumenda quos nihil culpa tenetur id rem quaerat vel doloremque veniam velit! Ea commodi explicabo ducimus saepe.
      Ex incidunt sequi, ullam animi quis voluptatum ipsam quod provident saepe officia aliquam error optio et dolorum quisquam voluptate, assumenda odit architecto explicabo. Beatae quo suscipit perferendis, quos placeat aliquam.</p><br></br>
      <a href="/">Je suis un lien</a><br></br>
      <button type="submit">Je suis un bouton</button><br></br>
      <input type="text" placeholder="Je suis un input"/>
      
      <Outlet />
      <Footer />
    </div>
  )
}
export default MainLayout;