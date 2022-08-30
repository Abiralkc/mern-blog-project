const Blog = require("../../model/blog")
const createBlog = async(req,res) =>{
    console.log(req.body);
    const {title, body  } = req.body;

    if (!title || !body){
        return res.status(400).send({
            message:"Some field are missing"
        })
    }
  try{

                const blogObj = new Blog({
                    title: title,
                    body: body,
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