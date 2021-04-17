import React from "react";
import PaymentHistory from "./PaymentHistory";
import Plans from "./Plans";
import UserTable from "./UsersTable";
import ManegeBlogs from "./ManegeBlogs";

function Selector({
  item,
  users,
  setUsers,
  payments,
  setPayments,
  plans,
  setPlans,
  blogs,
}) {
  switch (item) {
    case "Manage Blogs":
      return <ManegeBlogs blogs={blogs} />;
    case "Payments":
      return (
        <PaymentHistory
          users={users}
          plans={plans}
          setPayments={setPayments}
          payments={payments}
        />
      );
    case "Plans":
      return <Plans setPlans={setPlans} plans={plans} />;
    case "Users":
      return <UserTable users={users} setUsers={setUsers} />;
    default:
      return null;
  }
}

export default Selector;
