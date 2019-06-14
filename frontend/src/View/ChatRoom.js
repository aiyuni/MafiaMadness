import React from 'react';

function ChatRoom() {
    return (
      <div className="ChatRoomDiv">
        hi oscars
        <div>
            text goes here: 
            </div>
        <form className = "ChatRoomForm" onSubmit = {handleFormSubmit}>
            Enter text: 
            <input type="text" name="chatMsg"></input>
            <br></br>
            <input /> {/*Name of User */}
    
        </form>
            
      </div>
    );
  }

  function handleFormSubmit(){
      console.log("hello");
  }
  function ChatRoom2(){
    return (
        <div className="App">
          hi oscar2
        </div>
      );
  }

  export default ChatRoom;