import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import TextError from "./TextError";
import "../App.css";

const YoutubeForm = () => {
  const [formValues, setFormvalues] = useState(null);
  const navigate = useNavigate();
  const initialValues = {
    name: "",
    number: [""],
    friends: [
      {
        fundingName: "",
        fundingPrice: ""
      }
    ]
  };
  const savedData = {
    ...initialValues
  };
  const onSubmit = (values, setSubmitProp) => {
    console.log(
      "🚀 ~ file: Projects.jsx ~ line 21 ~ onSubmit ~ values",
      values
    );
    navigate("/table", { state: values });
    setSubmitProp.resetForm(true);
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    number: Yup.number().required("Required")
    // fundingPrice: Yup.string().required("Required")
  });
  return (
    <Formik
      initialValues={formValues || initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      validateOnChange={false}
      // validateOnBlur={false}
      // validateOnMount
      // enableReinitialize
    >
      {/* "formik" is passed as a child in the formik and act as a prop*/}
      {(formik) => {
        return (
          <Form action="">
            <div className="row mt-5">
              <div className="col-6">
                <div className="form-control">
                  <label htmlFor="name">Name</label>
                  <Field type="text" name="name" id="name" />
                  <ErrorMessage name="name" component={TextError} />
                </div>
              </div>
              <div className="col-6">
                <div className="form-control">
                  <label htmlFor="name">Price</label>
                  <Field type="number" name="number" id="number" />
                  <ErrorMessage name="number" component={TextError} />
                </div>
              </div>
            </div>
            <label htmlFor="" name="friends">
              Funding Sources
            </label>
            <div className="form-control">
              <FieldArray name="friends">
                {(fieldArrayProps) => {
                  const { push, remove, form } = fieldArrayProps;

                  const { values } = form;
                  const { friends } = values;

                  return (
                    <>
                      <button
                        type="button"
                        className="btn btn-primary px-5"
                        onClick={() => push("")}
                      >
                        Add
                      </button>
                      {friends.map((ind, index) => {
                        console.log(
                          "🚀 ~ file: Projects.jsx ~ line 83 ~ {friends.map ~ index",
                          index
                        );
                        return (
                          <div key={index}>
                            <div className="row">
                              <div className="col-5">
                                <label htmlFor={`friends.${index}.fundingName`}>
                                  Name
                                </label>

                                <Field
                                  name={`friends.${index}.fundingName`}
                                  placeholder="Enter Name"
                                  type="text"
                                  required
                                />
                                <ErrorMessage
                                  name={`friends.${index}.fundingName`}
                                  component={TextError}
                                />
                              </div>
                              <div className="col-5">
                                <label
                                  htmlFor={`friends.${index}.fundingPrice`}
                                >
                                  Price
                                </label>

                                <Field
                                  name={`friends.${index}.fundingPrice`}
                                  type={"number"}
                                  placeholder="Enter Price"
                                  className="mx-2"
                                  required
                                />
                                <ErrorMessage
                                  name={`friends.${index}.fundingPrice`}
                                  component={TextError}
                                />
                              </div>
                              <div className="col-2">
                                <button
                                  onClick={() => remove(index)}
                                  type="button"
                                  className="btn btn-danger px-5 mt-4 ms-2"
                                >
                                  -
                                </button>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </>
                  );
                }}
              </FieldArray>
            </div>
            <button type="submit" className="btn btn-primary px-4">
              submit
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};
export default YoutubeForm;
