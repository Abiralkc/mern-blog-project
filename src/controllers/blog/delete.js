const Blog = require("../../model/blog")
const deleteBlog = async(req,res) =>{
  
  try{
        const {id} = req.params;
       

        const deletedBlog = await Blog.findByIdAndDelete(id);

        if (!deletedBlog){
            return res.status(400).send({
                message: `${id} blog not found`
            });
        }

       

        res.status(200).send();
     } catch (e) {
        res.status(400).send({
            data:e.message ? e.message : "Failed to get blogs",
        });
     }
 
};

module.exports = deleteBlog;