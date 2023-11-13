import React from 'react';

function ProfileAlert(props) {

  const success = (
    <div>
      <div
        style={{ borderColor: "#93D788", backgroundColor: "#ADFF9F", borderStyle: "solid", borderWidth: "1px" }}
        className='flex text-xl p-8 justify-center mt-10 mb-10'
      >
        <h1 style={{ color: "#489547" }}>Changes were made successfully!</h1>
      </div>
    </div>
  );

  const error = (
    <div>
      <div
        style={{ borderColor: "#CC6464", backgroundColor: "#FF6868", borderStyle: "solid", borderWidth: "1px" }}
        className='flex text-xl p-8 justify-center mt-10 mb-10'
      >
        <h1 style={{ color: "white" }}>An error occurred!</h1>
      </div>
    </div>
  );

  return (
    <div>
      {props.type === "success" && success}
      {props.type === "error" && error}
    </div>
  );
}

export default ProfileAlert;
