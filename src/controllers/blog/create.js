const Blog = require("../../model/blog")
const createBlog = async(req,res) =>{
  try{

                const blogObj = new Blog({
                    title:"test",
                    body:"This is body",
                    slug:"This is slug",
            });

            const blog = await blogObj.save();

            res.status(201).send({
                data: blog
            })
     } catch (e) {
        res.status(400).send({
            data:e.message ? e.message : "Failed to create user",
        })
     }
 
};

module.exports = createBlog;