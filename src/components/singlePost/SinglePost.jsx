import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://images.unsplash.com/photo-1521575107034-e0fa0b594529?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG9zdHxlbnwwfHwwfHw%3D&w=1000&q=80"
          alt=""
        />
        <h1 className="singlePostTitle">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
            <i className="singlePostIcon fa-regular fa-trash-can"></i>
          </div>
        </h1>

        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author:<b>Vivek</b>
          </span>
          <span className="singlePostDate">1 hour Ago</span>
        </div>

        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          voluptates quis omnis doloremque, facere sit hic quidem? Praesentium
          obcaecati, tempora quam excepturi similique recusandae esse nobis et
          sint eaque assumenda. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Accusantium incidunt totam vero sunt quaerat rerum
          libero cum, omnis aspernatur illo autem quidem voluptatum corrupti
          officiis, quod obcaecati aliquam doloribus ea. Lorem ipsum dolor sit,
          amet consectetur adipisicing elit. Maiores facere culpa, obcaecati
          tempore, omnis beatae, totam dolore fugiat adipisci explicabo expedita
          distinctio. Id quam iusto a tenetur, ipsa nam facilis? Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Accusamus eos excepturi
          quibusdam odit iste culpa? Sequi libero nobis amet rerum dignissimos
          error magnam hic ratione sunt. Excepturi assumenda odio beatae? Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Architecto
          similique hic ipsum possimus excepturi? Nam harum neque quas iste
          consequuntur nesciunt fugit magnam. Nostrum minus illo sequi maiores
          consequatur beatae. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Delectus necessitatibus consequatur exercitationem ea voluptas
          dolor assumenda, accusantium unde. Dignissimos perferendis laboriosam
          aliquid magni iste pariatur asperiores fugit, aperiam id corporis?
        </p>
      </div>
    </div>
  );
}
