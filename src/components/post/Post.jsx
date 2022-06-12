import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.unsplash.com/photo-1521575107034-e0fa0b594529?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG9zdHxlbnwwfHwwfHw%3D&w=1000&q=80"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione, commodi sapiente eius id odio asperiores recusandae dolore maiores pariatur distinctio temporibus consequatur veritatis vel consectetur debitis nostrum itaque aut optio?
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
        consequuntur doloribus. Esse commodi laboriosam facilis vitae ipsa
        cupiditate error aut, voluptates quo odit numquam ea eaque cumque? Vel,
        harum veritatis.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
        consequuntur doloribus. Esse commodi laboriosam facilis vitae ipsa
        cupiditate error aut, voluptates quo odit numquam ea eaque cumque? Vel,
        harum veritatis.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
        consequuntur doloribus. Esse commodi laboriosam facilis vitae ipsa
        cupiditate error aut, voluptates quo odit numquam ea eaque cumque? Vel,
        harum veritatis.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
        consequuntur doloribus. Esse commodi laboriosam facilis vitae ipsa
        cupiditate error aut, voluptates quo odit numquam ea eaque cumque? Vel,
        harum veritatis.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
        consequuntur doloribus. Esse commodi laboriosam facilis vitae ipsa
        cupiditate error aut, voluptates quo odit numquam ea eaque cumque? Vel,
        harum veritatis.
        
      </p>
    </div>
  );
}
