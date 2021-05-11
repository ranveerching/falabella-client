/**
 *
 * SendMail
 *
 */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Formik, useFormikContext } from 'formik';
import { convertToHTML } from 'draft-convert';
import { Typography } from 'antd';
import map from 'lodash/map';

import TextInputComponent from 'components/TextInputComponent';
import { mailSchema } from 'utils/validationSchema';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';

import './sendMailStyles.css';

const { Title } = Typography;

const Form = props => {
  const { loading } = props;

  const {
    values,
    errors,
    handleChange,
    handleSubmit,
    setFieldValue,
  } = useFormikContext();

  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  useEffect(() => {
    setFieldValue(
      'emailContent',
      convertToHTML(editorState.getCurrentContent()),
    );
  }, [editorState]);

  return (
    <form onSubmit={handleSubmit}>
      <TextInputComponent
        placeholder="Subject..."
        name="subject"
        type="text"
        label="Subject"
        values={values.subject}
        onChange={handleChange}
        error={errors.subject}
        labelClass="text-left text-black m-0"
      />

      <Title level={5} className="text-left text-black m-0 mb-2">
        Content
      </Title>
      <Editor
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        toolbarClassName="toolbar-class"
        editorState={editorState}
        onEditorStateChange={setEditorState}
      />

      <div className="text-right mt-4">
        <div className="text-right">
          <button className="btn btn-danger" type="submit" disabled={loading}>
            Send
          </button>
        </div>
      </div>
    </form>
  );
};

export function SendMail(props) {
  const { loading, registeredUsers, handleSendMail, setIsModalVisible } = props;

  return (
    <>
      <div className="send-mail-container">
        <Formik
          initialValues={{ subject: '', emailContent: '' }}
          onSubmit={values => {
            const updatedValues = {
              ...values,
              email: map(registeredUsers.users, item => item.email),
              setIsModalVisible: () => setIsModalVisible(false),
            };
            handleSendMail(updatedValues);
          }}
          validationSchema={mailSchema}
          validateOnChange={false}
        >
          <Form loading={loading} />
        </Formik>
      </div>
    </>
  );
}

SendMail.propTypes = {
  dispatch: PropTypes.func.isRequired,
  handleSendMail: PropTypes.func,
  registeredUsers: PropTypes.object.isRequired,
  loading: PropTypes.bool,
  setIsModalVisible: PropTypes.func,
};

Form.propTypes = {
  loading: PropTypes.bool,
};

export default SendMail;
