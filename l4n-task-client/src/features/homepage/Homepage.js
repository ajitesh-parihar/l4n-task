import { useState } from "react";
import { useGetDataQuery, usePostDataMutation } from "./dataApi";
import styles from "./Homepage.css";

export const Homepage = () => {
  const { data, error, isLoading, isFetching, isSuccess } = useGetDataQuery();
  const [addData] = usePostDataMutation();
  const [inputFields, setInputFields] = useState([{ text: "" }]);
  const addField = () => {
    //return if previous field is empty
    if (inputFields[inputFields.length - 1]?.text === "") {
      alert("Please fill the last input before adding more.");
      return;
    }
    setInputFields([...inputFields, { text: "" }]);
  };
  const handleInputChange = (index, event) => {
    let inputData = [...inputFields];
    inputData[index].text = event.target.value;
    setInputFields(inputData);
  };
  const onSubmit = () => {
    //return if last field is empty
    if (inputFields[inputFields.length - 1]?.text === "") {
      alert("Please fill the last input before submitting");
      return;
    }

    addData(inputFields);
    setInputFields([{ text: "" }]);
  };

  return (
    <div className="container">
      {isLoading && <h2>"Loading..."</h2>}
      {/* {isFetching && <h2>"Loading..."</h2>} */}
      {error && <h2>{error.message}</h2>}
      {isSuccess && (
        <>
          {!!data.length && (
            <>
              <h1>Fetched Data:</h1>
              <div className="data-container">
                {data?.map((item, index) => (
                  <div className="data-item" key={index}>
                    {item.text}
                  </div>
                ))}
              </div>
            </>
          )}
          <div>
            <h1>Add new data:</h1>
            <div className="inputs-container">
              {inputFields.map((input, index) => (
                <div key={index}>
                  <input
                    className="input-field"
                    placeholder="Type here"
                    value={input.text}
                    onChange={(event) => {
                      handleInputChange(index, event);
                    }}
                  ></input>
                </div>
              ))}
              {/* <input placeholder="Type here"></input> */}
            </div>
            <div className="buttons-container">
              <button onClick={addField} className="button add-button">
                Add more
              </button>
              <button onClick={onSubmit} className="button submit-button">
                Submit
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
