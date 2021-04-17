import React, { useState } from "react";
import { Table } from "react-bootstrap";
import toast from "react-hot-toast";
import api from "../api/http";
import NewPlan from "./NewPlan";
import deleteIcon from "./assets/delete.svg";

function Plans({ plans, setPlans }) {
  const [allPlans, setAllPlans] = useState(plans);

  const handlePlanSubmit = async (newPlan) => {
    const { ok, problem, data } = await api.apiSauce.post("plans/new", newPlan);

    if (!ok) {
      if (data) {
        toast.error(data.error);
      } else {
        toast.error("Unexpected Error Ocured !, please try again");
      }
      console.log(problem);
      return;
    }
    setPlans([...allPlans, newPlan]);
    setAllPlans([...allPlans, newPlan]);
    toast.success(data.info);
  };

  const handlePlanDelete = async (id) => {
    const { ok, data, problem } = await api.apiSauce.post("/plans/delete", {
      id: id,
    });

    if (ok) {
      toast.success(data.info);
      // eslint-disable-next-line
      setPlans(plans.filter((p) => p._id != id));
      // eslint-disable-next-line
      setAllPlans(plans.filter((p) => p._id != id));
    } else if (!ok && data) {
      toast.error(data.error);
    } else {
      console.log(problem);
      toast.error("Sorry, Cant connect to Server !");
    }
  };

  return (
    <div className="manege-plan">
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Plan</th>
            <th>Prize</th>
            <th>Validity</th>
            <th>Description</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {allPlans.map((p, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{p.title}</td>
              <td>₹ {p.price}</td>
              <td>{p.validity}</td>
              <td>{p.description}</td>
              <td>
                <img
                  src={deleteIcon}
                  width="25px"
                  alt="delete-icon"
                  onClick={() => handlePlanDelete(p._id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <NewPlan onSubmit={handlePlanSubmit} />
    </div>
  );
}

export default Plans;
