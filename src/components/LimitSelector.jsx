<<<<<<< HEAD
=======
import React from "react";
>>>>>>> 0f4af0f20450de238b5e65cdcb25012060c6e559

const LimitSelector = ({ limit, onLimitChange }) => {
   return (
      <div className="controls">
         <label htmlFor="limit">Show: </label>
         <select
            value={limit}
            id="limit"
<<<<<<< HEAD
            onChange={(e) => {
=======
            onClick={(e) => {
>>>>>>> 0f4af0f20450de238b5e65cdcb25012060c6e559
               onLimitChange(Number(e.target.value));
            }}
         >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
            <option value="100">100</option>
         </select>
      </div>
   );
};

export default LimitSelector;
