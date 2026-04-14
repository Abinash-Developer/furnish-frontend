import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';import Navbar from '../components/Navbar';import Footer from '../components/Footer';
import axios from 'axios';
const Signin = ()=>{
const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  });

  const signInSubmit = async (values)=>{
     try {
        // const loginRes = await axios.post(`http://apptest.kaswebtechsolutions.com/api/users/login`,values);
        const loginRes = await axios.post(`http://localhost:8788/api/users/login`,values);
        console.log("loginRes=",loginRes);
     } catch (error) {
        console.log();
     }
  }
  return (
    <>
    <Navbar/>
    <div style={styles.wrapper}>
      <div style={styles.formContainer}>
        <h2 style={styles.heading}>Sign In</h2>
        
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={validationSchema}
          onSubmit={(values) =>signInSubmit(values)}
        >
          <Form>
            <div style={styles.fieldGroup}>
              <label htmlFor="email" style={styles.label}>Email</label>
              <Field type="email" name="email" style={styles.input} />
              <ErrorMessage name="email" component="div" style={styles.error} />
            </div>

            <div style={styles.fieldGroup}>
              <label htmlFor="password" style={styles.label}>Password</label>
              <Field type="password" name="password" style={styles.input} />
              <ErrorMessage name="password" component="div" style={styles.error} />
            </div>
            <button type="submit" style={styles.button}>Sign In</button>
          </Form>
        </Formik>
      </div>
    </div>
    <Footer/>
    </>
  );
};

const styles = {
  wrapper: { display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' },
  formContainer: { width: '100%', maxWidth: '400px', padding: '20px' },
  fieldGroup: { marginBottom: '15px' },
  label: { display: 'block', marginBottom: '8px', fontSize: '14px' },
  input: { width: '100%', padding: '12px', border: '1px solid #ccc', borderRadius: '4px', backgroundColor: '#eff4ff', boxSizing: 'border-box' },
  error: { color: 'red', fontSize: '12px', marginTop: '5px' },
  button: { backgroundColor: '#000', color: '#fff', padding: '12px 25px', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '16px' }
};
export default Signin;