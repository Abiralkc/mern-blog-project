const Blog = require("../../model/blog")
const updateBlog = async(req,res) =>{
  
  try{
        const {id} = req.params;
        const {title,body} = req.body;

        const blog = await Blog.findById(id);

        blog.title = title || blog.title;
        blog.body = body || blog.body;

        const updatedBlog = await blog.save()

        res.status(200).send({
            data : updatedBlog,
        });
     } catch (e) {
        res.status(400).send({
            data:e.message ? e.message : "Failed to get blogs",
        });
     }
 
};

module.exports = updateBlog;