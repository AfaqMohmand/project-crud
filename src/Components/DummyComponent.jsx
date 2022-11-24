import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "../App.css";

const DummyComponent = () => {
  const { state } = useLocation();
  const { friends } = state;
  const [list, setList] = useState([friends]);

  const deletehandler = (index) => {
    const filteredItem = list.filter((_, i) => {
      if (i !== index) {
        list(friends);
      } else {
        setList({ ...friends, filteredItem });
      }
    });
  };

  return (
    <div className="d-flex justify-content-center align-items-center p-5 w-50">
      <table className="table border w-75 border-bottom-none ">
        <thead className="w-75">
          <tr>
            <th scope="col ">USAID</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          {friends.map((ind, index) => {
            return (
              <div className="d-flex justify-content-roundly" key={index}>
                <td className=" col col-lg-6 pr-3">{ind.fundingName}</td>
                <td className="externalSecondCol">{ind.fundingPrice}</td>

                <button
                  type="button"
                  className="btn btn-secondary text-dark px-3 my-1 ms-5"
                  onClick={() => deletehandler(index)}
                >
                  Delete
                </button>
              </div>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DummyComponent;
