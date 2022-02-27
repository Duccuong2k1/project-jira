import React, { useEffect, useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';

import { withFormik } from 'formik';
import * as Yup from 'yup';
import { connect, useDispatch, useSelector } from 'react-redux';
import { GET_ALL_PROJECT_CATEGORY_SAGA } from '../../../redux/constants/CyberBugConstants';

const CreateProjectJira = (props) => {
    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
        setFieldValue
    } = props;

    const projectCategorySelect = useSelector((state) => state.ProjectCategoryReducer.projectCategory);
    const dispatch = useDispatch()
    // console.log('select box', projectCategorySelect)

    const editorRef = useRef(null);
    // const log = () => {
    //     if (editorRef.current) {
    //         console.log('editor',editorRef.current.getContent());
    //         setFieldValue('description',content)
    //     }
    // };
    const handleChangeEditor = (content ,editor)=>{
        setFieldValue('description',content)
    }

    useEffect(() => {
        dispatch({ type: GET_ALL_PROJECT_CATEGORY_SAGA })
    }, [])
    return (
        <div className="container m-5">
            <h3>Create Project</h3>
            <form action="" className="container" onSubmit={handleSubmit}>
                <div className="form-group">
                    <p>Name</p>
                    <input type="text" name="projectName" className="form-control" onChange={handleChange} />
                </div>
                <div className="form-group">
                    <Editor
                        name="description"
                        onInit={(evt, editor) => editorRef.current = editor}
                        initialValue=""
                        onEditorChange={handleChangeEditor}
                        init={{
                            height: 300,
                            menubar: false,
                            plugins: [
                                'advlist autolink lists link image charmap print preview anchor',
                                'searchreplace visualblocks code fullscreen',
                                'insertdatetime media table paste code help wordcount'
                            ],
                            toolbar: 'undo redo | formatselect | ' +
                                'bold italic backcolor | alignleft aligncenter ' +
                                'alignright alignjustify | bullist numlist outdent indent | ' +
                                'removeformat | help',
                            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                        }}
                    />
                </div>
                <div className="form-group">
                    <p>Lựa chọn</p>
                    <select id="" className="form-control" name="categoryId" onChange={handleChange} >
                        {projectCategorySelect.map((item, index) => {
                            return (

                                <option value={item.id} key={index}>{item.projectCategoryName}</option>
                            )
                        })}

                    </select>
                </div>
                <button className="btn btn-primary" type="submit">Lưu</button>
            </form>

        </div>
    )
}

const CreateProjectWithFormik = withFormik({
    enableReinitialize:true,
    mapPropsToValues: (props) => {
        return {
            projectName: '',
            description: '',
            categoryId: props.arrProjectCategory[0]?.id
        }
    },

    // Custom sync validation
    validationSchema: Yup.object().shape({

    }),

    handleSubmit: (values, { props, setSubmitting }) => {
        // console.log('gai tri', values)
        props.dispatch({
            type:'CREATE_PROJECT_SAGA',
            newProject:values
        })
    },

    displayName: 'CreateProjectJira',
})(CreateProjectJira);


const mapStateToProps = (state) => {
    return {
        arrProjectCategory: state.ProjectCategoryReducer.projectCategory
    }
}

export default connect(mapStateToProps)(CreateProjectWithFormik);