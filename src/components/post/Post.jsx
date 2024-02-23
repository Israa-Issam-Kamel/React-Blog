import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <img
        src="https://d3f86pfw66amx.cloudfront.net/uncode/wp-content/uploads/2021/03/pexels-syed-qaarif-andrabi-6685428.jpg"
        alt=""
        className="postImg"
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla aliquam
        doloribus quibusdam illo, ipsa veritatis eos. Optio nobis sit laborum
        fugiat molestiae in similique, deleniti facilis rerum eaque quos non.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla aliquam
        doloribus quibusdam illo, ipsa veritatis eos. Optio nobis sit laborum
        fugiat molestiae in similique, deleniti facilis rerum eaque quos non.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla aliquam
        doloribus quibusdam illo, ipsa veritatis eos. Optio nobis sit laborum
        fugiat molestiae in similique, deleniti facilis rerum eaque quos non.
      </p>
    </div>
  );
}
