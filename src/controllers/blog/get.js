const Blog = require("../../model/blog")
const getALLBlogs = async(req,res) =>{
  
  try{
        const blogs = await Blog.find();
        
        res.status(200).send({
            data : blogs
        })
     } catch (e) {
        res.status(400).send({
            data:e.message ? e.message : "Failed to get blogs",
        })
     }
 
};

module.exports = getALLBlogs;