// import { useState } from 'react';
import BlogPost from './BlogPost';

function Blog(){
    // const [blogs, setBlogs] = useState([]);
    const data = {
        title: 'Blog Title', body: 'this blog is about my....', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ432ju-gdS2nl6CEobTaFXEe6_gRmK5DkWuQ&s'
    };
    return(
        <section>
            <article className='blog-lists'>
                <BlogPost data={data} />
                <BlogPost data={data} />
                <BlogPost data={data} />
                <BlogPost data={data} />
                <BlogPost data={data} />
                <BlogPost data={data} />
                <BlogPost data={data} />
            </article>
        </section>
    );
}

export default Blog;