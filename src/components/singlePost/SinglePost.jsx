import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://d3f86pfw66amx.cloudfront.net/uncode/wp-content/uploads/2021/03/pexels-syed-qaarif-andrabi-6685428.jpg"
          alt=""
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet.
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
            <i className="singlePostIcon fa-regular fa-trash-can"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Israa</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          facere alias eveniet natus cum quas sunt delectus culpa consequuntur?
          In consequatur distinctio deleniti velit, unde commodi natus sequi
          exercitationem iure!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          facere alias eveniet natus cum quas sunt delectus culpa consequuntur?
          In consequatur distinctio deleniti velit, unde commodi natus sequi
          exercitationem iure!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          facere alias eveniet natus cum quas sunt delectus culpa consequuntur?
          In consequatur distinctio deleniti velit, unde commodi natus sequi
          exercitationem iure!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          facere alias eveniet natus cum quas sunt delectus culpa consequuntur?
          In consequatur distinctio deleniti velit, unde commodi natus sequi
          exercitationem iure!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          facere alias eveniet natus cum quas sunt delectus culpa consequuntur?
          In consequatur distinctio deleniti velit, unde commodi natus sequi
          exercitationem iure!
        </p>
      </div>
    </div>
  );
}
