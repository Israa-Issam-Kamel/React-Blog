import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img
        src="https://scontent-hbe1-1.xx.fbcdn.net/v/t1.6435-9/101271569_2988779874542934_3952983136396115968_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=2rQ9NH-WTI4AX9nry0r&_nc_ht=scontent-hbe1-1.xx&oh=00_AfCis0V3Qj3-2Iy_yA2GLxuj36vSGLHqxPhIsI5KtRvSTw&oe=65DF4FBE"
        alt=""
        className="headerImg"
      />
    </div>
  );
}
