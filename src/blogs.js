import axios from "axios";
import React from "react";

const baseURL = "http://127.0.0.1:8000/header/";

export default function Blogs() {
  const [post, setPost] = React.useState(null);module.exports = {
    
  };
  
  
  React.useEffect(() => {
    axios.get(baseURL).then((response) => {      
        console.log(response.data);
      setPost(response.data);       
    });  
  }, []);
  
  if (!post) return null;

  return (
    <div>
    <h1>blogs</h1>
    {
        post.map(pst =>  
            <div><h1>{pst.title}</h1>
            <p>{pst.author}</p> </div>          

        )
        
    }
      
    </div>
  );
}