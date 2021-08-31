import UserForm from "common/components/UserForm";
import { EDIT_USER_FORM_SUBMITTED } from "features/ManageUser/actionTypes";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

const EditUser = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector(state => state.Users[id]);
  const [formData, setFormData] = useState(user);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: EDIT_USER_FORM_SUBMITTED, payload: { userData: formData, id }});
    history.push('/search-user')
  }

  return (
    <UserForm formData={formData}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      label="Edit"
    />
  )
}

export default EditUser;