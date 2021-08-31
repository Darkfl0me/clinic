import { useState } from "react";
import { useDispatch } from "react-redux";
import UserForm from "common/components/UserForm";
import { useHistory } from "react-router-dom";
import { ADD_USER_FORM_SUBMITTED } from "features/ManageUser/actionTypes";

const AddUser = () => {
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();
  const history = useHistory();
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: ADD_USER_FORM_SUBMITTED, payload: formData });
    history.push('/search-user')
  }

  return (
    <UserForm
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      formData={formData}
    />
  )
}

export default AddUser;