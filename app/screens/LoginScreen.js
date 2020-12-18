import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import AppScreen from '../components/AppScreen';
import AppButton from '../components/AppButton';
import * as Yup from 'yup';
import ErrorMessage from '../components/AppErrorMessage';
import AppFormField from '../components/AppFormField';
import AppSumbitButton from '../components/AppSumbitButton';


const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"), //pour valider la regex email
    password: Yup.string().required().min(4).matches().label("Password")
})

function LoginScreen(props) {

    return (
        <AppScreen style={styles.container}>
            <Image style={styles.logo} source={require('../assets/logo-red.png')}/>
            <Formik
                initialValues={{ email: '', password: ''}}
                onSubmit={values => console.log(values)} 
                validationSchema={validationSchema}
            >
                { () => (
                    <>
                        <AppFormField
                            name="email"
                            icon="email"
                            autoCapitalize="none"
                            autoCorrect={false}
                            keyboardType="email-address"
                            textContentType="emailAddress"
                            placeholder='Email'
                        />
                        <AppFormField
                            name="password"
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon="lock"
                            placeholder="Password"
                            secureTextEntry
                            textContentType="password"
                        />
                        <AppSumbitButton title="Login"/>
                    </>
                )}
            </Formik>
            
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: 'center',
        marginTop: 50,
        marginBottom: 50,
    }
})

export default LoginScreen;