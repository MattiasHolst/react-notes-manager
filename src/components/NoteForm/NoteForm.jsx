import React, { useState } from "react";
import s from "./style.module.css";
import { PencilFill, TrashFill } from "react-bootstrap-icons";
import ButtonPrimary from "components/ButtonPrimary/ButtonPrimary";
import { max, min } from "services/validator";
import FieldError from "components/FieldError/FieldError";

const VALIDATOR = {
  title: (value) => {
    return min(value, 3) || max(value, 20);
  },
  content: (value) => {
    return min(value, 3);
  },
};

const NoteForm = ({
  isEditable = true,
  note,
  title,
  onClickEdit,
  onClickDelete,
  onSubmit,
}) => {
  const [formValues, setFormValues] = useState({
    title: note?.title,
    content: note?.content,
  });
  const [formErrors, setFormErrors] = useState({
    title: note?.title ? undefined : true,
    content: note?.content ? undefined : true,
  });

  const updateFormValues = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormValues({ ...formValues, [name]: value });
    validate(value, name);
  };

  const validate = (fieldValue, fieldName) => {
    setFormErrors({
      ...formErrors,
      [fieldName]: VALIDATOR[fieldName](fieldValue),
    });
  };
  return (
    <div className={s.container}>
      <div className="row justify-content-space-between">
        <div className="col-10">
          <h2 className="mb-3">{title}</h2>
        </div>
        <div className="col-1">
          {onClickEdit && (
            <PencilFill onClick={onClickEdit} className={s.icon} />
          )}
        </div>
        <div className="col-1">
          {onClickDelete && (
            <TrashFill onClick={onClickDelete} className={s.icon} />
          )}
        </div>
      </div>
      <div className={`mb-5 ${s.title_input_container}`}>
        {isEditable && (
          <>
            <label className="form-label">Title</label>
            <input
              onChange={updateFormValues}
              type="text"
              name="title"
              className="form-control"
              value={formValues.title}
            />
            <FieldError msg={formErrors.title} />
          </>
        )}
      </div>
      <div className="mb-5">
        {isEditable ? (
          <>
            <label className="form-label">Content</label>
            <textarea
              onChange={updateFormValues}
              type="text"
              name="content"
              className="form-control"
              rows={5}
              value={formValues.content}
            />
            <FieldError msg={formErrors.content} />{" "}
          </>
        ) : (
          <pre>{note.content}</pre>
        )}
      </div>
      <div className={s.submit_btn}>
        {onSubmit && (
          <ButtonPrimary
            isDisabled={formErrors.title || formErrors.content ? true : false}
            onClick={() => onSubmit(formValues)}
          >
            Submit
          </ButtonPrimary>
        )}
      </div>
    </div>
  );
};

export default NoteForm;
