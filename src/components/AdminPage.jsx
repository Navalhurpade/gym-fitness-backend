import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

import api from "./../api/http";
import background from "./assets/sportsman.jpg";
import ListGroup from "./ListGroup";
import Selector from "./Selector";

const options = {
  // weekday: "short",
  year: "numeric",
  month: "long",
  day: "numeric",
};

const menuItems = [
  {
    name: "Users",
  },
  {
    name: "Plans",
  },
  {
    name: "Payments",
  },
  {
    name: "Manage Blogs",
  },
];

const AdminPage = () => {
  const [users, setUsers] = useState([]);
  const [payments, setPayments] = useState([]);
  const [plans, setPlans] = useState([]);
  const [blogs, setBlogs] = useState([]);

  const [seletedMenu, setSelectMenu] = useState(menuItems[0]);
  const menu = seletedMenu.name;

  const getData = async () => {
    const promise = api.axiosApi
      .get("/allData")
      .then((responce) => {
        const { data } = responce;

        const removedAdmin = data.users.filter((u) => !u.isAdmin);

        const updatedDatePayments = data.payments.map((p) => {
          const paymentDate = new Date(p.paymentDate);
          const validUpto = new Date(p.validUpto);
          return {
            ...p,
            paymentDate: paymentDate.toLocaleDateString(undefined, options),
            validUpto: validUpto.toLocaleDateString(undefined, options),
          };
        });

        setUsers(removedAdmin);
        setPayments(updatedDatePayments);
        setPlans(data.plans);
        setBlogs(data.blogs);
        return;
      })
      .catch((err) => {
        console.log(err);
      });

    toast.promise(promise, {
      loading: "Hang on, loding...",
      success: "Done !",
      error: "Opps, Erorr ocured !",
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="admin-page-container">
      <Toaster />
      <div className="admin-subcontainer ">
        <img src={background} alt="Gym-Background" className="background-img" />
        <div className="wellcomeAdmin">
          <h1>Hello Admin !</h1>
        </div>
      </div>
      <div className="section-2">
        <div className="menu">
          <ListGroup
            items={menuItems}
            onItemSelect={(item) => setSelectMenu(item)}
            selectedItem={seletedMenu.name}
          />
        </div>
        <div>
          <Selector
            item={menu}
            users={users}
            setUsers={setUsers}
            payments={payments}
            setPayments={setPayments}
            blogs={blogs}
            setBlogs={setBlogs}
            plans={plans}
            setPlans={setPlans}
          />
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
