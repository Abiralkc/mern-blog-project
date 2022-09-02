const Blog = require("../../model/blog")
const updateBlog = async(req,res) =>{

  console.log("update running")
  
  try{
        const {id} = req.params;
        console.log(id);
        const {title,body} = req.body;
        console.log(req.body);

        const blog = await Blog.findById(id);

        blog.title = title || blog.title;
        blog.body = body || blog.body;

        const updatedBlog = await blog.save()

        // res.redirect('/blogs')

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