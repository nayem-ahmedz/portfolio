export default function BlogPost({data}){
    return(
        <div>
            <div>
                <img src={data.img} alt="imgae" />
            </div>
            <div>
                <h3>{data.title}</h3>
                <p>{data.body}</p>
                <button>Read more...</button>
            </div>
        </div>
    );
}