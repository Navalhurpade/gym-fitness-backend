import React, { useState } from "react";
import Input from "./Input";
import deleteIcon from "./assets/delete.svg";
import toast from "react-hot-toast";
import api from "../api/http";
import UserEditModal from "./UserEditModal";

const UserTable = ({ users, setUsers }) => {
  const [search, setSearch] = useState("");
  const [foundUsers, setFoundUsers] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  //for updating state of search input
  const handleSearch = (e) => {
    setSearch(e.currentTarget.value);
  };

  //This will handle Serching
  const handleKeyDown = (event) => {
    //frist get lenth and keyCode from input
    const length = event.currentTarget.value.length;

    //keyCode refers to diff action on input
    const backspaceCode = event.keyCode;

    //Checking if backSpace pressed , AND last charecter is deleted !

    //KeyCode 8 mence BACKSPACE pressed !
    if (backspaceCode === 8 && length === 1) {
      setIsSearching(false);
      setFoundUsers([]);
      return;
    }

    //performing case inSensetive search
    const searchResult = users.filter((u) =>
      u.name.toLowerCase().startsWith(search.toLowerCase())
    );

    //updating All User upon every key press !
    setIsSearching(true);
    setFoundUsers(searchResult);
  };

  //This will handle User Deletion !
  const handleDelete = async (id) => {
    const { data, ok, problem } = await api.apiSauce.put("/users/delete", {
      _id: id,
    });
    if (!ok) {
      console.log(problem);
      toast.error("Error Connecting to server !");
    } else {
      const remainigUsers = foundUsers.filter((u) => u._id !== id);
      setUsers(remainigUsers);
      toast.success(data.info);
    }
  };

  //This will handle User editing
  const handleUserEdit = async (updatedUser, id) => {
    try {
      //calling Server and sending  updated user details and users ID
      const { ok, problem, status } = await api.apiSauce.patch(
        "/users/update",
        {
          updatedUser,
          _id: id,
        }
      );

      //if responce is ok updating allUsers
      if (ok) {
        //notifying User
        toast.success("User Updated sucessfully !");

        // Frist remove the users old Details from allUsers
        const otherUsers = users.filter((u) => u._id !== updatedUser._id);

        //add new and Updated users details in all Users
        const addedUpdatedUser = [...otherUsers, updatedUser];
        setUsers(addedUpdatedUser);
      } else {
        //Loging errors
        console.log(problem);

        //handling Cretical error, Not updated !
        if (status === 304)
          toast.error(
            "Sorry User not Updated !, Please Reload this page and try again"
          );
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleNewUser = async (newUser) => {
    try {
      const { ok, data, problem } = await api.apiSauce.post(
        "/auth/register",
        newUser
      );
      if (!ok) {
        console.log("Error !", problem);
        if (data) toast.error(`${data.error}`);
        else toast.error(`Unecepeted Error occured, Please reload Page!`);
        return;
      } else {
        toast.success(data.info || "Registered new User");
        console.log(data.info);
        setUsers([...users, newUser]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="users-container">
      <table className="table">
        <thead>
          <tr>
            <th className="collumn" itemScope="col">
              #
            </th>
            <th className="collumn" itemScope="col">
              Name
            </th>
            <th className="collumn" itemScope="col">
              Email
            </th>
            <th className="collumn" itemScope="col">
              Age
            </th>
            <th className="collumn" itemScope="col">
              Phone Number
            </th>
            <th className="collumn" itemScope="col"></th>
            <th className="collumn" itemScope="col"></th>
          </tr>
        </thead>
        <tbody>
          {(isSearching ? foundUsers : users).map((usr, index) => {
            return (
              <tr className="row-header" key={index}>
                <th itemScope="row">{index + 1}</th>
                <td className="collumn">{usr.name}</td>
                <td className="collumn">{usr.email}</td>
                <td className="collumn">{usr.age}</td>
                <td className="collumn">{usr.number}</td>
                <td className="collumn">
                  <img
                    src={deleteIcon}
                    width="25px"
                    alt="delete-icon"
                    onClick={() => handleDelete(usr._id)}
                  />
                </td>
                <td>
                  <UserEditModal data={usr} onUserEdit={handleUserEdit} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="float-right">
        <Input
          value={search}
          onChange={handleSearch}
          lable="Search"
          onKeyDown={handleKeyDown}
          className="form-control float-right"
          placeholder="search for users..."
        />
        <UserEditModal onUserEdit={handleNewUser} />
      </div>
    </div>
  );
};

export default UserTable;
