import "./message.css";

const Message = ({ own }) => {
  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
        <img
          src="./assets/person/user2.jpg"
          alt="user"
          className="messageImg"
        />
        <p className="messageText">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non culpa
          accusantium velit reprehenderit quos provident ullam quo accusamus,
          nam aut dicta? Perspiciatis iusto odit ipsa sed optio! Fuga, quas
          repellendus?
        </p>
      </div>
      <div className="messageBottom">Just now</div>
    </div>
  );
};

export default Message;
