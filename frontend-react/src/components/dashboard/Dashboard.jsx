import {useEffect} from 'react'

import axios from '../../api/axiosConfig'

const Dashboard = () => {
const accessToken = localStorage.getItem('access_token')
  useEffect(() => {
    const fetchProtectedData = async() => {
      try{
        const response = await axios.get('/protected-view/',
        //   {
        //   // headers:{
        //   //   Authorization:`Bearer ${accessToken}`
        //   // }
        // }
      )
        console.log("working fine",response.data)
      }catch(err){
        console.error("Error Fetching Data : ",err)
      }


    }
    fetchProtectedData()
  
   
  },[])
  
  return (
    <div >Dashboard Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quae perferendis voluptatem similique molestias omnis distinctio, consequatur exercitationem temporibus mollitia. Temporibus debitis fugiat necessitatibus eveniet, nam doloremque corporis perferendis voluptatum numquam harum culpa dolorem quas, laboriosam quasi odio itaque vitae recusandae, soluta libero? Voluptas exercitationem excepturi cupiditate. Sequi, soluta beatae in placeat, dicta eveniet quaerat saepe aliquid facilis repellat neque commodi dignissimos magni odio iste iusto ipsum ducimus reiciendis suscipit tempore perspiciatis esse fugiat, aut impedit. Earum, harum asperiores? Inventore, cum aliquam tenetur assumenda deserunt ex odio sit. Incidunt dicta aspernatur vero amet ab fugiat expedita dolor mollitia tempora itaque quo tempore repellendus, maiores exercitationem quam reprehenderit sunt possimus et blanditiis quidem iusto delectus facilis est! Cum provident ea corporis asperiores molestias reiciendis suscipit, facere iure quos sint veniam labore porro omnis modi a! Sed consequuntur non explicabo quia ex quis a asperiores, vel laudantium consequatur impedit totam minima inventore eveniet illo eum quo ad incidunt fugit alias odio ut nulla numquam assumenda. Molestias illo consequuntur molestiae tempore unde, earum, sit maxime voluptatem, quidem facere repudiandae voluptate modi animi quo id quis fuga! Obcaecati ea doloribus cupiditate ab rem. Omnis similique provident pariatur laborum saepe maxime! Corrupti odit distinctio laudantium!</div> 
  )
}

export default Dashboard