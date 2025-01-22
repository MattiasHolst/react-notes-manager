import React, { useState } from "react";
import s from "./style.module.css";
import { PencilFill, TrashFill } from "react-bootstrap-icons";
import ButtonPrimary from "components/ButtonPrimary/ButtonPrimary";
const NoteForm = ({ title, onClickEdit, onClickDelete, onSubmit }) => {
  const [formValues, setFormValues] = useState({ title: "", content: "" });

  const updateFormValues = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormValues({ ...formValues, [name]: value });
  };
  return (
    <div className={s.container}>
      <div className="row justify-content-space-between">
        <div className="col-10">
          <h2 className="mb-3">{title}</h2>
        </div>
        <div className="col-1">
          {onClickEdit && <PencilFill className={s.icon} />}
        </div>
        <div className="col-1">
          {onClickDelete && <TrashFill className={s.icon} />}
        </div>
      </div>
      <div className={`mb-3 ${s.title_input_container}`}>
        <label className="form-label">Title</label>
        <input
          onChange={updateFormValues}
          type="text"
          name="title"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Content</label>
        <textarea
          onChange={updateFormValues}
          type="text"
          name="content"
          className="form-control"
          rows={5}
        />
      </div>
      <div className={s.submit_btn}>
        {onSubmit && (
          <ButtonPrimary onClick={() => onSubmit(formValues)}>
            Submit
          </ButtonPrimary>
        )}
      </div>
    </div>
  );
};

export default NoteForm;
