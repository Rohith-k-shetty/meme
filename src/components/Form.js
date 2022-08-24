import React from "react";

const Form = ({ form, setForm, getmeme }) => {
  const handlechange = (e) => {
    const { name, value } = e.target;
    setForm((prevform) => {
      return {
        ...prevform,
        [name]: value,
      };
    });
  };

  return (
    <form className="form">
      <div className="form-input">
        <input
          type="text"
          placeholder="welcome to"
          name="memes1"
          value={form.memes1}
          onChange={handlechange}
        />
        <input
          type="text"
          placeholder="memes World"
          name="memes2"
          value={form.memes2}
          onChange={handlechange}
        />
      </div>
      <button onClick={getmeme}>submit</button>
    </form>
  );
};

export default Form;
