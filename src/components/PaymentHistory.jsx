import React, { useState } from "react";
import api from "../api/http";
import NewPaymentModal from "./../components/NewPaymentModal";
import toast from "react-hot-toast";
import deleteIcon from "./assets/delete.svg";

function PaymentHistory({ payments, setPayments, users, plans }) {
  const [allPayments, setAllPayments] = useState(payments);

  const handleNewPayment = async (newPayment) => {
    try {
      const { ok, problem, data } = await api.apiSauce.post(
        "/payments/new",
        newPayment
      );
      if (!ok) {
        console.log(problem);
        if (data) {
          toast.error(data.error);
          return;
        }

        toast.error("Error Connecting to Server !");
        return;
      } else {
        toast.success(data.info);
        window.location.reload(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handlePaymentDelete = async (id) => {
    const { ok, data, problem } = await api.apiSauce.post("/payments/delete", {
      id: id,
    });

    if (!ok) {
      console.log(problem);
      toast.error("Error Connecting to server !");
    } else {
      const remainigPayments = allPayments.filter((u) => u._id !== id);
      setAllPayments(remainigPayments);
      setPayments(remainigPayments);
      toast.success(data.info);
    }
  };

  return (
    <div className="payment-history-container">
      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>#</th>
              <th>from</th>
              <th>Amount</th>
              <th>Payment Date</th>
              <th>Valide until</th>
              <th>Payment Mode</th>
              <th>Plan</th>
              <th>Transaction Id</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {allPayments.length > 0 &&
              allPayments.map((p, indx) => (
                <tr key={indx}>
                  <td>{indx + 1}</td>
                  <td>{p.userId.name}</td>
                  <td>₹{p.amount}</td>
                  <td>{p.paymentDate}</td>
                  <td>{p.validUpto}</td>
                  <td>{p.paymentMode}</td>
                  <td>{p.planId.title}</td>
                  <td>{p.transactionId}</td>
                  <td>
                    <img
                      src={deleteIcon}
                      width="25px"
                      alt="delete-icon"
                      onClick={() => handlePaymentDelete(p._id)}
                    />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div>
        <NewPaymentModal
          users={users}
          plans={plans}
          onSubmit={handleNewPayment}
        />
      </div>
    </div>
  );
}

export default PaymentHistory;
