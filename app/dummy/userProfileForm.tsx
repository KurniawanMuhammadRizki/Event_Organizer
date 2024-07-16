"use client";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { uploadImageToCloudinary } from "@/utils/uploadFileToCloudinary";

const UserProfileForm = () => {
  return (
    <Formik
      initialValues={{ username: "", photoProfile: null }}
      validationSchema={Yup.object({
        username: Yup.string().required("Required"),
        photoProfile: Yup.mixed().required("A file is required"),
      })}
      onSubmit={async (values, { setSubmitting }) => {
        if (!values.photoProfile) {
          alert("Photo profile is required");
          setSubmitting(false);
          return;
        }
        const photoProfileLink = await uploadImageToCloudinary(
          values.photoProfile
        );
        console.log("imgUrlnya: ", photoProfileLink);
      }}>
      {({ setFieldValue }) => (
        <Form>
          <label htmlFor="username">Username</label>
          <Field name="username" type="text" />
          <ErrorMessage name="username" />

          <label htmlFor="photoProfile">Photo Profile</label>
          <input
            name="photoProfile"
            type="file"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              const file =
                event.currentTarget.files && event.currentTarget.files[0];
              if (file) {
                setFieldValue("photoProfile", file);
              }
            }}
          />
          <ErrorMessage name="photoProfile" />

          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default UserProfileForm;
